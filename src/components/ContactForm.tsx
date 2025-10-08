'use client';

import Script from 'next/script';

export default function ContactForm() {
  return (
    <div className="gohighlevel-form">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/uEcLi2YgOW8D6f0JNdCE"
        style={{width: '100%', height: '100%', border: 'none', borderRadius: '8px'}}
        id="inline-uEcLi2YgOW8D6f0JNdCE" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="A2P EXMAPLE FORM"
        data-height="979"
        data-layout-iframe-id="inline-uEcLi2YgOW8D6f0JNdCE"
        data-form-id="uEcLi2YgOW8D6f0JNdCE"
        title="A2P EXMAPLE FORM"
      />
      <Script 
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
