import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Resources', to: '/learning-archive' },
  { label: 'Contact', to: '/contact' },
];

const SOCIALS = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/ashlight.agency' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'TikTok', icon: ArrowUpRight, href: 'https://tiktok.com/@ashlight.agency' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cream-300/[0.06] bg-charcoal-950">
      <div className="section-padding mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-5">
            <Link to="/" className="w-fit transition-opacity hover:opacity-80" aria-label="AshLight home">
              <Logo variant="light" />
            </Link>
            <p className="font-display text-lg font-semibold text-cream-300">
              Giving your brand the spotlight.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="label-tag">Navigation</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-400 transition-colors hover:text-coral-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="label-tag">Get In Touch</p>
            <a
              href="mailto:hello@ashlight.com"
              className="group inline-flex w-fit items-center gap-2 text-base text-cream-100 transition-colors hover:text-coral-400"
            >
              <Mail className="h-4 w-4 text-coral-400" />
              hello@ashlight.com
            </a>

            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300/[0.08] text-cream-300 transition-all duration-300 hover:border-coral-500/40 hover:bg-coral-500/10 hover:text-coral-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-300/[0.05] pt-8 sm:flex-row">
          <p className="text-xs text-cream-400/50">
            © {new Date().getFullYear()} AshLight. All rights reserved.
          </p>
          <p className="text-xs text-cream-400/50">Creative Digital Agency</p>
        </div>
      </div>
    </footer>
  );
}
