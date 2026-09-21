import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import EmailCapture from '@/components/EmailCapture';
import { useReveal } from '@/hooks/useReveal';
import { RESOURCES } from '@/data/content';

export default function LearningArchivePage() {
  const ref = useReveal<HTMLElement>();

  return (
    <>
      <PageHeader
        label="Learning Archive"
        title={<>Tools we use, <br /> <span className="text-coral-emphasis">free</span> for your brand.</>}
        description="Templates, checklists, and presets from our own workflow — shared so your brand can create with intention."
        bg="maroon"
      />

      <section ref={ref} className="relative bg-cream-50 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          {/* Resource cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.title}
                  className={`reveal reveal-delay-${(idx % 3) + 1} group relative flex flex-col gap-5 rounded-3xl border border-charcoal-900/10 bg-cream-100 p-7 transition-all duration-500 hover:border-coral-500/30 hover:shadow-[0_8px_40px_-12px_rgba(74,14,29,0.12)]`}
                >
                  {/* Coming Soon badge */}
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-coral-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-coral-600 ring-1 ring-coral-500/20">
                    Coming Soon
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-500/10 ring-1 ring-coral-500/20 transition-all duration-500 group-hover:bg-coral-500/15 group-hover:ring-coral-500/40">
                    <Icon className="h-5 w-5 text-coral-500" strokeWidth={1.6} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-label text-charcoal-500/50">
                      {resource.tag}
                    </span>
                    <h2 className="font-display text-lg font-bold text-charcoal-900">
                      {resource.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-charcoal-600">
                      {resource.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Email capture */}
          <div className="reveal reveal-delay-3 mt-20 flex flex-col items-center gap-6 rounded-3xl bg-maroon-800 p-10 text-center md:p-14">
            <h3 className="font-display text-2xl font-bold text-cream-50 md:text-3xl">
              Be the first to know.
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-cream-300 md:text-base">
              Resources are still being crafted. Drop your email and we'll send them your way.
            </p>
            <EmailCapture variant="dark" />
          </div>

          {/* CTA */}
          <div className="reveal mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-charcoal-600">
              Need help putting these tools to work?
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-coral-600 transition-colors hover:text-coral-700"
            >
              <span className="border-b border-coral-500/30 pb-1 transition-colors group-hover:border-coral-600">
                Book a call with AshLight
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
