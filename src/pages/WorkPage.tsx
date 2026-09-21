import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { useReveal } from '@/hooks/useReveal';
import { PROJECTS } from '@/data/content';

export default function WorkPage() {
  const ref = useReveal<HTMLElement>();

  return (
    <>
      <PageHeader
        label="Featured Work"
        title={<>Work that speaks <br /> for <span className="text-coral-emphasis">itself.</span></>}
        description="Selected projects we've crafted for brands across tech, clean energy, and beauty."
        bg="maroon"
      />

      <section ref={ref} className="relative bg-cream-50 py-28 md:py-36">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="flex flex-col gap-24 md:gap-32">
            {PROJECTS.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <article
                  key={project.client}
                  className={`reveal reveal-delay-${(idx % 3) + 1} group grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* Visual */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-charcoal-900/10">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-cream-300/20 bg-maroon-950/60 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-label text-cream-100 backdrop-blur-md">
                        {project.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5">
                      <h2 className="font-display text-2xl font-black text-cream-50 drop-shadow-lg md:text-3xl">
                        {project.client}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-6">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-5xl font-normal text-charcoal-500/20">
                        0{idx + 1}
                      </span>
                      <span className="h-px flex-1 bg-charcoal-900/10" />
                    </div>

                    <p className="text-sm leading-relaxed text-charcoal-600 md:text-base">
                      {project.fullDescription}
                    </p>

                    {project.results && (
                      <div className="rounded-2xl border border-coral-500/20 bg-coral-500/5 px-5 py-4">
                        <p className="text-xs font-semibold uppercase tracking-label text-coral-600">
                          Result
                        </p>
                        <p className="mt-1.5 text-sm text-charcoal-700">
                          {project.results}
                        </p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-charcoal-900/10 bg-cream-100 px-3.5 py-1.5 text-xs font-medium text-charcoal-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="group/btn mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-charcoal-900/15 px-6 py-3 text-sm font-semibold text-charcoal-900 transition-all duration-300 hover:border-coral-500 hover:bg-coral-500/10 hover:text-coral-600"
                    >
                      View Case Study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="reveal mt-24 flex flex-col items-center gap-6 rounded-3xl bg-maroon-800 p-10 text-center md:p-14">
            <h3 className="font-display text-2xl font-bold text-cream-50 md:text-3xl">
              Your brand could be next.
            </h3>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-coral-600 active:scale-95"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
