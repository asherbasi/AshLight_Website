import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface EmailCaptureProps {
  variant?: 'dark' | 'light';
}

export default function EmailCapture({ variant = 'dark' }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const inputClass =
    variant === 'light'
      ? 'flex-1 rounded-full border border-charcoal-900/20 bg-cream-100 px-5 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-500/50 focus:border-coral-500/50 focus:outline-none focus:ring-1 focus:ring-coral-500/30'
      : 'flex-1 rounded-full border border-cream-300/15 bg-charcoal-900/60 px-5 py-3 text-sm text-cream-50 placeholder:text-cream-400/50 focus:border-coral-500/50 focus:outline-none focus:ring-1 focus:ring-coral-500/30';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    const { error } = await supabase
      .from('learning_archive_subscribers')
      .insert({ email });

    if (error) {
      if (error.code === '23505') {
        setStatus('success');
        setMessage("You're already on the list — we'll be in touch.");
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
      return;
    }

    setStatus('success');
    setMessage("You're on the list. We'll let you know when resources drop.");
    setEmail('');
  };

  return (
    <div className="mx-auto w-full max-w-md">
      {status === 'success' ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-coral-500/30 bg-coral-500/10 px-6 py-5 text-center">
          <p className="text-sm font-medium text-cream-50">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="you@brand.com"
            disabled={status === 'loading'}
            className={inputClass}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-coral-600 active:scale-95 disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing...' : 'Get notified'}
            {status !== 'loading' && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-3 text-center text-xs text-coral-300">{message}</p>
      )}

      {status === 'idle' && (
        <p className={`mt-3 text-center text-xs ${variant === 'light' ? 'text-charcoal-500/60' : 'text-cream-400/50'}`}>
          Get notified when it drops — no spam, just resources.
        </p>
      )}
    </div>
  );
}
