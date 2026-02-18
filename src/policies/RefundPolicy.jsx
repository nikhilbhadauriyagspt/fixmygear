import React, { useEffect } from 'react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-44 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 uppercase">Refund Policy</h1>
        <p className="text-gray-500 mb-12 italic">Last updated February 18, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <p>
              Thank you for choosing our repair services. We hope you are satisfied with the work performed. However, if you
              are not completely satisfied with our service for any reason, you may be eligible for a
              refund. Please see below for more information on our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">RETURNS/REFUNDS</h2>
            <p>
              All refund requests must be made within seven (7) days of the service completion date. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">PROCESS</h2>
            <p>
              To request a refund, please email customer service at <a href="mailto:fix@gear.com" className="text-primary font-bold">fix@gear.com</a> with your service order number. After receiving your request, we will review the service performed and notify you of the status of your refund.
            </p>
            <address className="not-italic bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-6 leading-relaxed font-bold">
              FIXMYGEAR<br />
              Attn: Returns/Refunds<br />
              123 Tech Avenue, Innovation District<br />
              New York, NY 10001<br />
              United States
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">REFUNDS</h2>
            <p>
              After reviewing your request and inspecting the condition of any parts replaced, we will process your
              refund. Please allow at least seven (7) days from the approval of your request to process your
              refund. Refunds may take 1-2 billing cycles to appear on your credit card statement,
              depending on your credit card company. We will notify you by email when your refund has
              been processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">EXCEPTIONS</h2>
            <p>
              For issues related to recurring problems after a repair, please contact us immediately to arrange
              a follow-up diagnostic or refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">QUESTIONS</h2>
            <p>
              If you have any questions concerning our refund policy, please contact us at:
            </p>
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl mt-4 text-center">
              <a href="mailto:fix@gear.com" className="text-secondary font-bold text-lg hover:underline">fix@gear.com</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;