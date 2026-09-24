import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body: ContactSubmission = await req.json();

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store the submission in the database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        message: body.message,
      });

    if (dbError) {
      console.error("Database error:", dbError.message);
      return new Response(
        JSON.stringify({ error: "Failed to store submission." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const notifyEmail = "asherdesigns3@gmail.com";

    const emailHtml = `
      <div style="font-family: Inter, Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #FAF7F2; padding: 40px; border-radius: 16px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="font-family: Georgia, serif; font-size: 28px; color: #4A0E1D; margin: 0;">AshLight</h1>
          <p style="color: #C4B5A0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin: 4px 0 0;">New Contact Form Submission</p>
        </div>
        <div style="background: #fff; border-radius: 12px; padding: 28px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #1A1412; width: 90px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #524541;">${escapeHtml(body.name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #1A1412; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(body.email)}" style="color: #E15B3F; text-decoration: none;">${escapeHtml(body.email)}</a></td>
            </tr>
            ${body.phone ? `
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #1A1412; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #524541;">${escapeHtml(body.phone)}</td>
            </tr>
            ` : ""}
          </table>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #EDE5D6;">
            <p style="font-weight: 600; color: #1A1412; margin: 0 0 8px;">Message</p>
            <p style="color: #524541; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(body.message)}</p>
          </div>
        </div>
        <p style="text-align: center; color: #9E8E7A; font-size: 12px; margin-top: 24px;">
          This submission was sent from the AshLight website contact form.
        </p>
      </div>
    `;

    if (resendApiKey) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "AshLight Contact <onboarding@resend.dev>",
          to: [notifyEmail],
          subject: `New contact form submission from ${body.name}`,
          html: emailHtml,
        }),
      });

      if (!emailResponse.ok) {
        const errText = await emailResponse.text();
        console.error("Resend API error:", errText);
        // Still return success — the submission was stored in the DB
      }
    } else {
      console.warn("RESEND_API_KEY not configured — submission stored in DB but no email sent.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err.message);
    return new Response(
      JSON.stringify({ error: "Something went wrong processing your message." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
