import { useReveal } from '@/hooks/useReveal';

const CLIENTS = [
  { name: 'Gallery of Code', tag: 'Tech & Education' },
  { name: 'Renewables4Africa', tag: 'Clean Energy' },
  { name: 'Byomane', tag: 'Wig Coloring' },
];

interface ClientsProps {
  variant?: 'dark' | 'light';
}

export default function Clients({ variant = 'light' }: ClientsProps) {
  const ref = useReveal<HTMLElement>();

  const isDark = variant === 'dark';

  return (
    <section
      ref={ref}
      className={`relative border-y py-20 md:py-28 ${
        isDark
          ? 'border-cream-300/[0.06] bg-maroon-800'
          : 'border-charcoal-900/[0.06] bg-cream-50'
      }`}
    >
      <div className="section-padding mx-auto max-w-7xl">
        <p className={`reveal mb-12 text-center ${isDark ? 'label-tag' : 'label-tag-light'}`}>
          Brands we've helped shine
        </p>

        <div className="reveal reveal-delay-1 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-24">
          {CLIENTS.map((client, idx) => (
            <div key={client.name} className="flex items-center gap-10">
              {idx > 0 && (
                <span className={`hidden h-8 w-px md:block ${isDark ? 'bg-cream-300/10' : 'bg-charcoal-900/10'}`} />
              )}
              <div className="group flex flex-col items-center gap-2 text-center">
                <span
                  className={`font-display text-xl font-semibold tracking-tight transition-colors duration-300 hover:text-coral-500 md:text-2xl ${
                    isDark ? 'text-cream-400 hover:text-cream-50' : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  {client.name}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-label transition-colors duration-300 group-hover:text-coral-500/70 ${
                    isDark ? 'text-cream-400/40' : 'text-charcoal-500/40'
                  }`}
                >
                  {client.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
