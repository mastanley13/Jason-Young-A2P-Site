// Reusable header/navbar component
function loadHeader(activePage) {
    const headerHTML = `
    <header>
        <div class="container">
            <div class="logo">
                <img src="images/awm-logo.png" alt="All Western Mortgage">
            </div>
            <nav>
                <ul>
                    <li><a href="home.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
                    <li><a href="contact.html" ${activePage === 'contact' ? 'class="active"' : ''}>Contact Us</a></li>
                    <li><a href="privacy.html" ${activePage === 'privacy' ? 'class="active"' : ''}>Privacy Policy</a></li>
                    <li><a href="terms.html" ${activePage === 'terms' ? 'class="active"' : ''}>Terms of Service</a></li>
                </ul>
            </nav>
            <div class="header-contact">
                <a href="tel:678-608-2944" class="phone">(678) 608-2944</a>
                <a href="contact.html" class="btn-apply">Apply Now!</a>
            </div>
        </div>
    </header>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
}

// Reusable footer component
function loadFooter() {
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h4>All Western Mortgage</h4>
                    <p>NMLS# 14210</p>
                    <p class="footer-address">
                        8345 W. Sunset Rd. #380<br>
                        Las Vegas, NV 89113
                    </p>
                    <p class="footer-link">
                        <a href="https://www.nmlsconsumeraccess.org" target="_blank">www.nmlsconsumeraccess.org</a>
                    </p>
                </div>

                <div class="footer-section">
                    <h4>Jason Young</h4>
                    <p>Loan Officer</p>
                    <p>NMLS# 7513</p>
                    <p>Licensed States: AL, GA, FL, TN, VA</p>
                </div>

                <div class="footer-section">
                    <h4>Contact</h4>
                    <p>
                        <a href="tel:678-608-2944">(678) 608-2944</a>
                    </p>
                    <p>
                        <a href="mailto:jyoung@allwestern.com">jyoung@allwestern.com</a>
                    </p>
                    <p>HQ: <a href="tel:800-707-2830">800.707.2830</a></p>
                    <p>
                        <a href="mailto:info@allwestern.com">info@allwestern.com</a>
                    </p>
                </div>

                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <nav class="footer-links">
                        <a href="home.html">Home</a>
                        <a href="contact.html">Contact Us</a>
                        <a href="privacy.html">Privacy Policy</a>
                        <a href="terms.html">Terms of Service</a>
                    </nav>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2025 All Western Mortgage. All rights reserved. | Equal Housing Lender</p>
                <p class="footer-disclaimer">All loans subject to underwriting approval. Certain restrictions apply. This is not a commitment to lend.</p>
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

