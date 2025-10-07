import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Jason Young - All Western Mortgage",
  description: "Get in touch with Jason Young for your mortgage needs. NMLS# 7513",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Ready to start your mortgage journey? Contact us today!</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <ContactForm />

            <div className="contact-info-sidebar">
              <div className="info-card">
                <h3>Contact Information</h3>

                <div className="info-item">
                  <h4>Jason Young</h4>
                  <p>Loan Officer</p>
                  <p>NMLS# 7513</p>
                </div>

                <div className="info-item">
                  <h4>Direct Tel</h4>
                  <p><a href="tel:678-608-2944">(678) 608-2944</a></p>
                </div>

                <div className="info-item">
                  <h4>Email</h4>
                  <p><a href="mailto:jyoung@allwestern.com">jyoung@allwestern.com</a></p>
                </div>

                <div className="info-item">
                  <h4>Licensed States</h4>
                  <p>AL, GA, FL, TN, VA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
