import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>All Western Mortgage</h4>
            <p>NMLS# 14210</p>
            <p className="footer-address">
              8345 W. Sunset Rd. #380<br />
              Las Vegas, NV 89113
            </p>
            <p className="footer-link">
              <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer">
                www.nmlsconsumeraccess.org
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h4>Jason Young</h4>
            <p>Loan Officer</p>
            <p>NMLS# 7513</p>
            <p>Licensed States: AL, GA, FL, TN, VA</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <a href="tel:678-608-2944">(678) 608-2944</a>
            </p>
            <p>
              <a href="mailto:jyoung@allwestern.com">jyoung@allwestern.com</a>
            </p>
            <p>
              <a href="mailto:info@allwestern.com">info@allwestern.com</a>
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 All Western Mortgage. All rights reserved. | Equal Housing Lender</p>
          <p className="footer-disclaimer">
            All loans subject to underwriting approval. Certain restrictions apply. This is not a commitment to lend.
          </p>
        </div>
      </div>
    </footer>
  );
}
