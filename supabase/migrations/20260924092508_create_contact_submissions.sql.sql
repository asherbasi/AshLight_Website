/*
# Create contact_submissions table (single-tenant, no auth)

## Summary
Adds a table to store contact form submissions from the AshLight website.
When a visitor fills out the contact form, the data is saved here by the
send-contact-email edge function. This serves as a permanent record of every
submission, independent of whether the email notification succeeds.

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — the submitter's name
  - `email` (text, not null) — the submitter's email address
  - `phone` (text, nullable) — optional phone number
  - `message` (text, not null) — the message body
  - `created_at` (timestamptz, defaults to now())

2. Security
- Row Level Security ENABLED on `contact_submissions`.
- INSERT is open to `anon, authenticated` because the contact form is public
  and the edge function (using the service role key) bypasses RLS anyway.
  The frontend does not write directly to this table — the edge function does.
- SELECT, UPDATE, DELETE are restricted to `authenticated` only so that a
  logged-in admin could manage submissions if needed, but anon cannot read them.
  This protects visitor data from public access.

3. Indexes
- Index on `created_at` descending for chronological querying.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact_submissions" ON contact_submissions;
CREATE POLICY "auth_select_contact_submissions"
  ON contact_submissions FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_contact_submissions" ON contact_submissions;
CREATE POLICY "auth_update_contact_submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact_submissions" ON contact_submissions;
CREATE POLICY "auth_delete_contact_submissions"
  ON contact_submissions FOR DELETE
  TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions (created_at DESC);
