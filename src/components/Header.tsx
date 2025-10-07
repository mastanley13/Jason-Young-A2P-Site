'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
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
