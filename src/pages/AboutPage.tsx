import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Target, Cpu, TrendingUp, Sparkles, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Clients from '@/components/Clients';
import { useReveal } from '@/hooks/useReveal';
import { SERVICES } from '@/data/content';

const REASONS = [
  { icon: Lightbulb, title: 'Creative thinking', description: "We don't believe in copy-and-paste content." },
  { icon: Target, title: 'Strategy-driven', description: 'Everything we create has a purpose.' },
  { icon: Cpu, title: 'Technology-powered', description: 'We use modern tools and AI to work smarter and create better.' },
  { icon: TrendingUp, title: 'Built for growth', description: "The goal isn't simply to make your brand look good. It's to help it grow." },
];

const STEPS = [
  { number: '01', title: 'Discover', description: 'Understand your brand, audience and goals.' },
  { number: '02', title: 'Strategize', description: 'Develop a content and digital strategy tailored to your objectives.' },
  { number: '03', title: 'Create', description: 'Turn strategy into high-quality content and digital experiences.' },
  { number: '04', title: 'Grow', description: 'Analyze performance, improve what works and keep your brand moving forward.' },
];

const VALUE_POINTS = [
  'A dedicated team that treats your brand like our own',
  'Strategy first — no guesswork, no throwaway content',
  'Modern tools and AI to work faster without cutting quality',
  'Transparent reporting so you always know what is working',
];

export default function AboutPage() {
  const ref = useReveal<HTMLElement>();

  return (
    <>
      <PageHeader
        label="About AshLight"
        title={<>Your brand deserves <br /> to be <span className="text-coral-emphasis">seen.</span></>}
        bg="cream"
      />

      {/* Story */}
      <section className="relative bg-maroon-800 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div className="reveal flex flex-col gap-8">
              <p className="text-xl leading-relaxed text-cream-200 md:text-2xl">
                AshLight is a creative digital and media agency focused on helping
                brands show up better online.
              </p>
              <p className="text-base leading-relaxed text-cream-400 md:text-lg">
                From strategy and social media management to content creation, video
                editing and AI-powered creative solutions, we combine creativity with
                technology to help brands stand out. We believe every brand has a story
                worth telling — our job is to make sure it gets heard by the right people,
                in the right way, on the right platforms.
              </p>
              <p className="text-base leading-relaxed text-cream-400 md:text-lg">
                We work with ambitious brands across tech, clean energy, and beauty —
                building digital identities that don't just look good, but actually
                drive growth. Strategy first, creativity second, impact always.
              </p>
            </div>

            <div className="reveal reveal-delay-2 flex flex-col gap-4 rounded-3xl border border-cream-300/[0.08] bg-maroon-900/40 p-8 md:p-10">
              <h3 className="font-display text-xl font-bold text-cream-50 md:text-2xl">
                Why work with AshLight?
              </h3>
              <ul className="flex flex-col gap-4">
                {VALUE_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-cream-300 md:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral-500/15 ring-1 ring-coral-500/25">
                      <Check className="h-3 w-3 text-coral-400" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — Services */}
      <section ref={ref} className="relative bg-cream-50 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="reveal mb-16 max-w-3xl">
            <p className="label-tag-light mb-6">What We Do</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tighter text-charcoal-900 sm:text-5xl md:text-6xl">
              Everything your brand needs
              <br />
              to <span className="text-coral-emphasis">stand out.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal-600 md:text-lg">
              Eight disciplines under one roof — from social media and content creation
              to video production, design, paid advertising, and AI-powered automation.
              We bring it all together so your brand shows up consistently, everywhere.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`reveal reveal-delay-${(idx % 4) + 1} group flex flex-col gap-4 rounded-3xl border border-charcoal-900/10 bg-cream-100 p-7 transition-all duration-500 hover:border-coral-500/30 hover:shadow-[0_8px_40px_-12px_rgba(74,14,29,0.12)]`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-500/10 ring-1 ring-coral-500/20 transition-all duration-500 group-hover:bg-coral-500/15 group-hover:ring-coral-500/40">
                    <Icon className="h-5 w-5 text-coral-500" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-base font-bold text-charcoal-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-600">
                    {service.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="reveal reveal-delay-3 mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-maroon-800 p-10 text-center md:flex-row md:text-left md:p-14">
            <div className="max-w-lg">
              <h3 className="font-display text-2xl font-bold text-cream-50 md:text-3xl">
                Not sure where to start?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-300 md:text-base">
                Tell us about your brand and we will recommend the right approach — no pressure, just clarity.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-coral-600 active:scale-95"
            >
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why AshLight */}
      <section className="relative bg-maroon-800 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="reveal mb-16 max-w-3xl">
            <p className="label-tag mb-6">Why AshLight</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tighter text-cream-50 sm:text-5xl md:text-6xl">
              More than content.
              <br />
              A <span className="text-coral-emphasis">spotlight</span> for your brand.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`reveal reveal-delay-${(idx % 4) + 1} group flex flex-col gap-5 rounded-3xl border border-cream-300/[0.08] bg-maroon-900/40 p-8 transition-all duration-500 hover:border-coral-500/30 hover:bg-maroon-900/60`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-500/10 ring-1 ring-coral-500/20 transition-all duration-500 group-hover:bg-coral-500/15 group-hover:ring-coral-500/40">
                    <Icon className="h-5 w-5 text-coral-500" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-cream-50">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream-400">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative bg-cream-50 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="reveal mb-20 max-w-3xl">
            <p className="label-tag-light mb-6">Our Approach</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tighter text-charcoal-900 sm:text-5xl md:text-6xl">
              Strategy first.
              <br />
              Creativity second.
              <br />
              <span className="text-coral-emphasis">Impact always.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-charcoal-900/[0.08] md:grid-cols-4">
            {STEPS.map((step, idx) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${(idx % 4) + 1} group relative bg-cream-100 p-8 transition-all duration-500 hover:bg-cream-200 md:p-10`}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-coral-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="font-display text-5xl font-normal text-charcoal-500/20 transition-colors duration-500 group-hover:text-coral-500/40 md:text-6xl">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-charcoal-900 md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Clients variant="dark" />

      {/* CTA */}
      <section className="relative bg-cream-50 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="reveal flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-coral-500/40" />
              <span className="label-tag-light">Let's Talk</span>
              <span className="h-px w-8 bg-coral-500/40" />
            </div>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tighter text-charcoal-900 md:text-4xl">
              Want to work together?
            </h2>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-coral-600 active:scale-95"
            >
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
