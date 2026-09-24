interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  variant?: 'light' | 'muted';
}

export default function Logo({ className = '', showWordmark = true, variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-cream-50' : 'text-charcoal-900';

  return (
    <span className={`group inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/assets/images/image.png"
        alt="AshLight logo"
        className="h-9 w-9 object-contain transition-all duration-300 group-hover:scale-105"
      />
      {showWordmark && (
        <span className={`font-display text-lg font-bold tracking-tight ${textColor}`}>
          Ash<span className="text-coral-500">Light</span>
        </span>
      )}
    </span>
  );
}
