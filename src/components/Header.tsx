'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state
      setScrolled(currentScrollY > 50);

      // Only hide/show on mobile (we'll use CSS to apply this only on mobile)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/awm-logo.png"
              alt="All Western Mortgage"
              width={200}
              height={44}
              priority
            />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
            <li><Link href="/privacy" className={pathname === '/privacy' ? 'active' : ''}>Privacy Policy</Link></li>
            <li><Link href="/terms" className={pathname === '/terms' ? 'active' : ''}>Terms of Service</Link></li>
          </ul>
        </nav>
        <div className="header-contact">
          <a href="tel:678-608-2944" className="phone">(678) 608-2944</a>
          <Link href="/contact" className="btn-apply">Apply Now!</Link>
        </div>
      </div>
    </header>
  );
}
