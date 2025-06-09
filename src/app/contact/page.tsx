'use client';
import React, { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    try {
      const f = document.createElement('iframe');
      f.src = 'https://forms.zohopublic.com/infoadvanced1/form/ALNationalExpansionForm/formperma/i6rbfAC0iV1M1OmUxBdDZcelkWuSqGSAyumRvxg860U?zf_rszfm=1';
      f.style.border = 'none';
      f.style.width = '100%';
      f.style.minHeight = '500px'; // tinggi minimal awal
      f.setAttribute('aria-label', 'Advanced Licensing National Expansion');
      f.setAttribute('scrolling', 'no');

      const d = document.getElementById('zf_div_form');
      if (d) d.appendChild(f);

      window.addEventListener(
        'message',
        function (event) {
          const evntData = event.data;
          if (evntData && typeof evntData === 'string') {
            const zf_ifrm_data = evntData.split('|');
            if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
              const zf_perma = zf_ifrm_data[0];
              const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + 'px';
              const iframe = d?.getElementsByTagName('iframe')[0];
              if (iframe && iframe.src.includes('formperma') && iframe.src.includes(zf_perma)) {
                if (iframe.style.height !== zf_ifrm_ht_nw) {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        },
        false
      );
    } catch (e) {
      console.error('Zoho iframe injection error', e);
    }
  }, []);

  return (
    <div className="min-h-screen px-4 py-16 mt-12 bg-gray-50 flex justify-center items-start">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you’re looking to expand your current business through licensing or have a million-dollar idea you’re ready to take nationwide, now is the time to act.
            <br />
            <br />
            Fill out the form to receive in-depth information and claim your free consultation. Let’s find out together if licensing is the game-changing move your business needs.
          </p>
        </div>

        {/* Right Form - Zoho Iframe Container */}
        <div id="zf_div_form" className="w-full overflow-hidden" />
      </div>
    </div>
  );
};

export default ContactPage;
