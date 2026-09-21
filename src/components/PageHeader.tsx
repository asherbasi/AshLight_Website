import { useReveal } from '@/hooks/useReveal';

interface PageHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  bg?: 'maroon' | 'cream';
}

export default function PageHeader({ label, title, description, bg = 'maroon' }: PageHeaderProps) {
  const ref = useReveal<HTMLElement>();

  const bgClass = bg === 'cream' ? 'bg-cream-50' : 'bg-maroon-800';
  const textColor = bg === 'cream' ? 'text-charcoal-900' : 'text-cream-50';
  const descColor = bg === 'cream' ? 'text-charcoal-600' : 'text-cream-300';
  const labelClass = bg === 'cream' ? 'label-tag-light' : 'label-tag';

  return (
    <section ref={ref} className={`relative ${bgClass} pt-36 pb-16 md:pt-44 md:pb-20`}>
      <div className="section-padding mx-auto max-w-7xl">
        <p className={`reveal ${labelClass} mb-6`}>{label}</p>
        <h1 className={`reveal reveal-delay-1 font-display text-4xl font-black leading-[1.05] tracking-tighter ${textColor} sm:text-5xl md:text-6xl lg:text-7xl`}>
          {title}
        </h1>
        {description && (
          <p className={`reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed ${descColor} md:text-lg`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
