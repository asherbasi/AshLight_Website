import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'View Our Works', to: '/work' },
  { label: 'Learning Archive', to: '/learning-archive' },
  { label: 'About', to: '/about' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-maroon-900">
      {/* Soft gradient + coral glow background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-spotlight-radial" />
        <div className="absolute left-1/2 top-[28%] h-[45vh] w-[45vh] -translate-x-1/2 -translate-y-1/2 rounded-full spark-glow animate-spark-pulse" />
        <div className="absolute left-[72%] top-[38%] h-[28vh] w-[28vh] -translate-x-1/2 rounded-full spark-glow opacity-50 animate-float-slow" />
        <div className="absolute left-[28%] top-[48%] h-[22vh] w-[22vh] -translate-x-1/2 rounded-full spark-glow opacity-40" />
        <div className="absolute inset-0 grain-overlay opacity-[0.08] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-maroon-900" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center md:px-10">
        {/* Eyebrow label */}
        <div className="reveal mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-coral-500/40" />
          <span className="label-tag">Social · Content · Video · Design</span>
          <span className="h-px w-8 bg-coral-500/40" />
        </div>

        {/* Large headline */}
        <h1 className="reveal reveal-delay-1 font-display text-5xl font-black leading-[1.02] tracking-tightest text-cream-50 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Giving your brand
          <br />
          the <span className="text-coral-emphasis">spotlight.</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-base leading-relaxed text-cream-300 md:text-lg">
          AshLight helps ambitious brands turn ideas into content, build stronger
          digital identities, and get seen by the people who matter.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link to="/contact" className="btn-primary group">
            Book a call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link to="/work" className="btn-ghost-dark group">
            <Play className="h-4 w-4 text-coral-400 transition-transform duration-300 group-hover:scale-110" />
            See our work
          </Link>
        </div>

        {/* Quick-link pills */}
        <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full border border-cream-300/15 px-4 py-2 text-xs font-medium text-cream-300 transition-all duration-300 hover:border-coral-500/40 hover:text-cream-50 hover:bg-coral-500/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="reveal reveal-delay-5 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream-300/15 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-coral-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
