import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Jason Young - All Western Mortgage",
  description: "Terms of Service for Jason Young / All Western Mortgage",
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last Updated: October 2025</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container">
          <div className="policy-text">
            <h2>Agreement to Terms</h2>
            <p>By accessing or using the services of Jason Young and All Western Mortgage (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

            <h2>Our Services</h2>
            <p>We provide mortgage lending services, including but not limited to mortgage applications, loan processing, and related financial services. Our services are subject to applicable federal and state laws and regulations.</p>

            <h2>SMS Text Messaging Terms</h2>
            <div className="highlight-box">
              <p>By opting in to receive SMS text messages from Jason Young / All Western Mortgage, you will receive periodic text messages related to mortgage services, including application updates, rate information, appointment reminders, and promotional offers. Message frequency varies based on your interactions with us.</p>

              <p><strong>You can cancel the SMS service at any time.</strong> Simply text &quot;STOP&quot; to the shortcode. Upon sending &quot;STOP,&quot; we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>

              <p>If you experience issues with the messaging program, reply with the keyword HELP for more assistance, or reach out directly to <a href="mailto:jyoung@allwestern.com">jyoung@allwestern.com</a> or call <a href="tel:678-608-2944">(678) 608-2944</a>.</p>

              <p><strong>Carriers are not liable for delayed or undelivered messages.</strong></p>

              <p>As always, message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies. For questions about your text plan or data plan, contact your wireless provider.</p>

              <p>For privacy-related inquiries, please refer to our privacy policy: <Link href="/privacy">Privacy Policy</Link>.</p>
            </div>

            <h2>Use of Website and Services</h2>
            <p>You agree to use our website and services only for lawful purposes. You agree not to:</p>
            <ul>
              <li>Provide false or misleading information</li>
              <li>Use our services for any fraudulent purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of All Western Mortgage or its content suppliers and is protected by copyright and other intellectual property laws.</p>

            <h2>Disclaimer of Warranties</h2>
            <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free.</p>

            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Jason Young and All Western Mortgage shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>

            <h2>Mortgage Application Process</h2>
            <p>Submission of a mortgage application does not guarantee approval. All applications are subject to underwriting approval and verification of information. Loan terms, rates, and programs are subject to change without notice.</p>

            <h2>Equal Housing Opportunity</h2>
            <p>All Western Mortgage is committed to equal housing opportunity and complies with all applicable federal and state fair lending laws.</p>

            <h2>NMLS Information</h2>
            <p>Jason Young - NMLS# 7513<br />
            Licensed States: AL, GA, FL, TN, VA</p>

            <h2>Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions.</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the &quot;Last Updated&quot; date.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <p>
              <strong>Jason Young</strong><br />
              All Western Mortgage<br />
              Email: <a href="mailto:jyoung@allwestern.com">jyoung@allwestern.com</a><br />
              Phone: <a href="tel:678-608-2944">(678) 608-2944</a>
            </p>

            <h2>Severability</h2>
            <p>If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
