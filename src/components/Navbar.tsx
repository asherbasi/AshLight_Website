import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useReveal';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Resources', to: '/learning-archive' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNav = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-maroon-900/85 backdrop-blur-xl border-b border-cream-300/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-padding mx-auto flex h-16 items-center justify-between md:h-20 max-w-7xl">
        <Link to="/" className="transition-opacity hover:opacity-80" aria-label="AshLight home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(link.to)
                    ? 'text-coral-400'
                    : 'text-cream-300 hover:text-cream-50'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-coral-400" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('/contact')}
            className="hidden rounded-full bg-coral-500 px-5 py-2 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-coral-600 hover:shadow-[0_0_25px_-6px_rgba(225,91,63,0.5)] active:scale-95 md:inline-flex"
          >
            Book a call
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300/10 text-cream-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-cream-300/[0.05] bg-maroon-900/95 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <ul className="section-padding mx-auto flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => handleNav(link.to)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-coral-500/10 text-coral-400'
                    : 'text-cream-300 hover:bg-white/5 hover:text-cream-50'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-2">
            <button
              onClick={() => handleNav('/contact')}
              className="w-full rounded-full bg-coral-500 px-5 py-3 text-sm font-semibold text-cream-50"
            >
              Book a call
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
