import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import { useReveal } from '@/hooks/useReveal';
import { SERVICES, PROJECTS } from '@/data/content';

function ServicesPreview() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative bg-cream-50 py-28 md:py-36">
      <div className="section-padding relative z-10 mx-auto max-w-7xl">
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="label-tag-light mb-6">What We Do</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tighter text-charcoal-900 sm:text-5xl md:text-6xl">
              What we bring to
              <br />
              the <span className="text-coral-emphasis">spotlight.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-coral-600 transition-colors hover:text-coral-700"
          >
            See all services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="border-t border-charcoal-900/[0.08]">
          {SERVICES.slice(0, 3).map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${(idx % 3) + 1} group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-charcoal-900/[0.08] py-7 transition-all duration-500 hover:bg-coral-500/[0.03] md:gap-10 md:py-9`}
              >
                <span className="font-display text-sm font-normal text-charcoal-500/40 tabular-nums">
                  0{idx + 1}
                </span>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
                  <div className="flex items-center gap-3 md:w-72 lg:w-80 shrink-0">
                    <Icon className="h-5 w-5 text-charcoal-500 transition-colors duration-500 group-hover:text-coral-500" strokeWidth={1.6} />
                    <h3 className="font-display text-lg font-semibold text-charcoal-900 md:text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-charcoal-600 md:text-base">
                    {service.shortDescription}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-charcoal-500/30 transition-all duration-300 group-hover:text-coral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkPreview() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative bg-maroon-800 py-28 md:py-36">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="label-tag mb-6">Featured Work</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tighter text-cream-50 sm:text-5xl md:text-6xl">
              Work that speaks
              <br />
              for <span className="text-coral-emphasis">itself.</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cream-100 transition-colors hover:text-coral-400"
          >
            View all work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <Link
              key={project.client}
              to="/work"
              className={`reveal reveal-delay-${(idx % 3) + 1} group relative aspect-[4/5] overflow-hidden rounded-3xl border border-cream-300/[0.08]`}
            >
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/30 to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="rounded-full border border-cream-300/20 bg-maroon-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-cream-100 backdrop-blur-md">
                  {project.tag}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-display text-xl font-black text-cream-50 md:text-2xl">
                  {project.client}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-cream-300 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative bg-maroon-800 py-28 md:py-36">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="reveal">
            <p className="label-tag mb-6">About AshLight</p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tighter text-cream-50 sm:text-5xl md:text-6xl">
              Your brand deserves
              <br />
              to be <span className="text-coral-emphasis">seen.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-2 flex flex-col justify-end">
            <p className="text-lg leading-relaxed text-cream-200 md:text-xl">
              AshLight is a creative digital agency focused on helping brands show
              up better online.
            </p>
            <p className="mt-6 text-base leading-relaxed text-cream-400 md:text-lg">
              From strategy and social media management to content creation, video
              editing and AI-powered creative solutions, we combine creativity with
              technology to help brands stand out.
            </p>
            <Link
              to="/about"
              className="group mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cream-50 transition-colors hover:text-coral-400"
            >
              <span className="border-b border-cream-300/20 pb-1 transition-colors group-hover:border-coral-400">
                More About AshLight
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative overflow-hidden bg-cream-50 py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[30%] h-[45vh] w-[45vh] -translate-x-1/2 -translate-y-1/2 rounded-full spark-glow" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="reveal mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-coral-500/40" />
          <span className="label-tag-light">Let's Work Together</span>
          <span className="h-px w-8 bg-coral-500/40" />
        </div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl font-black leading-[1.05] tracking-tightest text-charcoal-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Ready to put your brand
          <br />
          in the <span className="text-coral-emphasis">spotlight?</span>
        </h2>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-charcoal-600">
          Let's create something worth paying attention to.
        </p>
        <Link
          to="/contact"
          className="reveal reveal-delay-3 group mt-12 inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-4 text-base font-semibold text-cream-50 transition-all duration-300 hover:bg-coral-600 hover:shadow-[0_0_55px_-8px_rgba(225,91,63,0.6)] active:scale-95"
        >
          Start a Project
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients variant="light" />
      <AboutPreview />
      <ServicesPreview />
      <WorkPreview />
      <CTASection />
    </>
  );
}
