import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Clients from '@/components/Clients';
import { useReveal } from '@/hooks/useReveal';
import { SERVICES } from '@/data/content';

export default function ServicesPage() {
  const ref = useReveal<HTMLElement>();

  return (
    <>
      <PageHeader
        label="What We Do"
        title={<>What we bring to <br /> the <span className="text-coral-emphasis">spotlight.</span></>}
        description="Six disciplines under one roof — from strategy and social to video, design, and AI-powered creative."
        bg="maroon"
      />

      <section ref={ref} className="relative bg-cream-50 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className={`reveal reveal-delay-${(idx % 3) + 1} group flex flex-col gap-5 rounded-3xl border border-charcoal-900/10 bg-cream-100 p-8 transition-all duration-500 hover:border-coral-500/30 hover:shadow-[0_8px_40px_-12px_rgba(74,14,29,0.12)] md:p-10`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-500/10 ring-1 ring-coral-500/20 transition-all duration-500 group-hover:bg-coral-500/15 group-hover:ring-coral-500/40">
                    <Icon className="h-5 w-5 text-coral-500" strokeWidth={1.6} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-normal text-charcoal-500/40 tabular-nums">
                        0{idx + 1}
                      </span>
                      <h2 className="font-display text-xl font-bold text-charcoal-900 md:text-2xl">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-charcoal-600 md:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.deliverables.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-charcoal-900/10 bg-cream-50 px-3 py-1.5 text-xs font-medium text-charcoal-600"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="group/btn mt-3 inline-flex w-fit items-center gap-2 text-sm font-semibold text-coral-600 transition-colors hover:text-coral-700"
                  >
                    Enquire about this service
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="reveal reveal-delay-3 mt-16 flex flex-col items-center gap-6 rounded-3xl bg-maroon-800 p-10 text-center md:p-14">
            <h3 className="font-display text-2xl font-bold text-cream-50 md:text-3xl">
              Not sure which service you need?
            </h3>
            <p className="max-w-lg text-sm leading-relaxed text-cream-300 md:text-base">
              Tell us about your brand and we'll recommend the right approach — no pressure, just clarity.
            </p>
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

      <Clients variant="dark" />
    </>
  );
}
