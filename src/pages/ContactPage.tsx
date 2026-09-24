import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Instagram, Music2, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { useReveal } from '@/hooks/useReveal';

const SOCIALS = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/ashlight.agency' },
  { label: 'TikTok', icon: Music2, href: 'https://tiktok.com/@ashlight.agency' },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const ref = useReveal<HTMLElement>();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setFormMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('loading');
    setFormMessage('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        throw new Error(errBody.error || `Request failed (${response.status})`);
      }

      setStatus('success');
      setFormMessage("Thank you! Your message has been sent. We'll get back to you within 48 hours.");
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
      setFormMessage('Something went wrong sending your message. Please try again or email us directly.');
    }
  };

  return (
    <>
      <PageHeader
        label="Contact"
        title={<>Let's put your brand <br /> in the <span className="text-coral-emphasis">spotlight.</span></>}
        description="Tell us about your brand and what you're looking for. We'll get back to you within 48 hours."
        bg="maroon"
      />

      <section ref={ref} className="relative bg-cream-50 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
            {/* Contact info */}
            <div className="reveal flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-bold text-charcoal-900 md:text-3xl">
                  Get in touch.
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-charcoal-600 md:text-base">
                  Whether you have a clear project in mind or just want to explore
                  what's possible, we're happy to talk. No pressure, no jargon — just
                  a real conversation about your brand.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <a
                  href="mailto:asherdesigns3@gmail.com"
                  className="group inline-flex items-center gap-3 text-lg font-semibold text-charcoal-900 transition-colors hover:text-coral-600"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-500/10 ring-1 ring-coral-500/20 transition-all duration-300 group-hover:bg-coral-500/15 group-hover:ring-coral-500/40">
                    <Mail className="h-5 w-5 text-coral-500" />
                  </span>
                  asherdesigns3@gmail.com
                </a>

                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-label text-charcoal-500/50">
                    Follow AshLight
                  </p>
                  <div className="flex gap-3">
                    {SOCIALS.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-900/10 text-charcoal-600 transition-all duration-300 hover:border-coral-500/40 hover:bg-coral-500/10 hover:text-coral-600"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-charcoal-900/10 bg-cream-100 p-8">
                <h3 className="font-display text-lg font-bold text-charcoal-900">
                  What happens next?
                </h3>
                <ol className="mt-4 flex flex-col gap-3">
                  {[
                    'You reach out — we reply within 48 hours.',
                    'We schedule a call to understand your brand and goals.',
                    'You get a tailored proposal — no templates, no pressure.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal-600">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral-500/15 text-[10px] font-bold text-coral-600">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Contact form */}
            <div className="reveal reveal-delay-2">
              {status === 'success' ? (
                <div className="flex flex-col items-center gap-4 rounded-3xl border border-coral-500/30 bg-coral-500/5 p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-coral-500/15 ring-1 ring-coral-500/30">
                    <Check className="h-7 w-7 text-coral-500" />
                  </div>
                  <p className="text-sm font-medium text-charcoal-900 md:text-base">
                    {formMessage}
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormMessage('');
                    }}
                    className="text-sm font-semibold text-coral-600 transition-colors hover:text-coral-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 rounded-3xl border border-charcoal-900/10 bg-cream-100 p-7 md:p-8"
                >
                  <h3 className="font-display text-lg font-bold text-charcoal-900">
                    Send a message
                  </h3>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-label text-charcoal-500/60" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange('name')}
                      className="rounded-xl border border-charcoal-900/15 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-500/40 focus:border-coral-500/50 focus:outline-none focus:ring-1 focus:ring-coral-500/30"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-label text-charcoal-500/60" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange('email')}
                      className="rounded-xl border border-charcoal-900/15 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-500/40 focus:border-coral-500/50 focus:outline-none focus:ring-1 focus:ring-coral-500/30"
                      placeholder="you@brand.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-label text-charcoal-500/60" htmlFor="phone">
                      Phone <span className="text-charcoal-500/40 normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className="rounded-xl border border-charcoal-900/15 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-500/40 focus:border-coral-500/50 focus:outline-none focus:ring-1 focus:ring-coral-500/30"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-label text-charcoal-500/60" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange('message')}
                      className="rounded-xl border border-charcoal-900/15 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-500/40 focus:border-coral-500/50 focus:outline-none focus:ring-1 focus:ring-coral-500/30"
                      placeholder="Tell us about your brand and what you need..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-coral-600">{formMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-coral-600 active:scale-95 disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send message'}
                    {status !== 'loading' && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Back link */}
          <div className="reveal mt-16 text-center">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-coral-600 transition-colors hover:text-coral-700"
            >
              <span className="border-b border-coral-500/30 pb-1 transition-colors group-hover:border-coral-600">
                Back to home
              </span>
              <ArrowRight className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
