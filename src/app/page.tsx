'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <Image
              src="/young-team-logo.jpeg"
              alt="The Young Team - Powered by All Western Mortgage"
              className="team-logo"
              width={300}
              height={169}
              priority
            />
            <h1>Jason Young</h1>
            <p className="subtitle">Loan Officer | NMLS# 7513</p>
            <p className="licensed">Licensed States: AL, GA, FL, TN, VA</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image
                src="/jason-young.png"
                alt="Jason Young"
                width={400}
                height={500}
              />
            </div>
            <div className="about-text">
              <h2>Working with Jason Young</h2>
              <p>
                Since entering the mortgage industry in 2003, Jason Young has been dedicated to helping home buyers achieve their dreams of homeownership. Leading successful mortgage teams since 2006, Jason combines deep industry knowledge with a customer-focused approach, helping his team guide clients through every step of the mortgage process.
              </p>

              <p>
                With a special focus on assisting buyers facing complex financial or credit situations, he leverages his experience to ensure the teams&apos; clients receive sound advice and access to the best programs available. Known for his commitment to excellence, Jason is passionate about empowering clients to make informed, confident financial decisions.
              </p>

              <p>
                When not helping homebuyers and homeowners, Jason enjoys watching football, is an avid car enthusiast, and treasures spending time with his wife and three children.
              </p>

              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  APPLY ONLINE TODAY!
                </Link>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      const openCalc = (window as unknown as { openCalculator?: () => void }).openCalculator;
                      if (openCalc) openCalc();
                    }
                  }}
                  className="btn btn-secondary"
                >
                  ESTIMATE YOUR PAYMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p><a href="tel:678-608-2944">(678) 608-2944</a></p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p><a href="mailto:jyoung@allwestern.com">jyoung@allwestern.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
