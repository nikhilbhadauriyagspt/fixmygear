import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-44 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 uppercase">Terms of Service</h1>
        <p className="text-gray-500 mb-12 italic">Last updated February 18, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase">AGREEMENT TO OUR LEGAL TERMS</h2>
            <p>
              We are FIXMYGEAR ("<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>"), a company operating in New York,
              United States at 123 Tech Avenue, Innovation District, New York, NY 10001, United States.
            </p>
            <p>
              We operate the website <a href="https://fixmygear.com/" className="text-primary hover:text-secondary">https://fixmygear.com/</a> (the "<strong>Site</strong>"), as well as any other related
              products and services that refer or link to these legal terms (the "<strong>Legal Terms</strong>") (collectively,
              the "<strong>Services</strong>").
            </p>
            <p>
              FIXMYGEAR was founded on the principle that household repairs should be handled with
              the same level of precision as industrial maintenance. We recognize that modern appliances
              are complex electronic systems that require specialized knowledge and calibrated tools for
              effective servicing.
            </p>
            <p>
              You can contact us by email at <a href="mailto:fix@gear.com" className="text-primary">fix@gear.com</a>, or by
              mail to 123 Tech Avenue, Innovation District, New York, NY 10001, United States.
            </p>
            <p>
              These Legal Terms constitute a legally binding agreement made between you, whether
              personally or on behalf of an entity ("<strong>you</strong>"), and FIXMYGEAR, concerning your access to
              and use of the Services. You agree that by accessing the Services, you have read,
              understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE
                WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-tight">TABLE OF CONTENTS</h2>
            <ol className="list-decimal pl-6 space-y-2 font-medium text-sm">
              <li><a href="#services" className="text-primary hover:underline uppercase">OUR SERVICES</a></li>
              <li><a href="#intellectual" className="text-primary hover:underline uppercase">INTELLECTUAL PROPERTY RIGHTS</a></li>
              <li><a href="#representations" className="text-primary hover:underline uppercase">USER REPRESENTATIONS</a></li>
              <li><a href="#prohibited" className="text-primary hover:underline uppercase">PROHIBITED ACTIVITIES</a></li>
              <li><a href="#management" className="text-primary hover:underline uppercase">SERVICES MANAGEMENT</a></li>
              <li><a href="#privacy" className="text-primary hover:underline uppercase">PRIVACY POLICY</a></li>
              <li><a href="#termination" className="text-primary hover:underline uppercase">TERM AND TERMINATION</a></li>
              <li><a href="#modifications" className="text-primary hover:underline uppercase">MODIFICATIONS AND INTERRUPTIONS</a></li>
              <li><a href="#law" className="text-primary hover:underline uppercase">GOVERNING LAW</a></li>
              <li><a href="#disclaimer" className="text-primary hover:underline uppercase">DISCLAIMER</a></li>
              <li><a href="#liability" className="text-primary hover:underline uppercase">LIMITATIONS OF LIABILITY</a></li>
              <li><a href="#contact" className="text-primary hover:underline uppercase">CONTACT US</a></li>
            </ol>
          </section>

          <section id="services">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4 uppercase">1. OUR SERVICES</h3>
            <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws.</p>
          </section>

          <section id="intellectual">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4 uppercase">2. INTELLECTUAL PROPERTY RIGHTS</h3>
            <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content").</p>
          </section>

          <section id="#privacy">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4 uppercase">8. PRIVACY POLICY</h3>
            <p>We care about data privacy and security. Please review our Privacy Policy: <a href="https://fixmygear.com/privacy-policy" className="text-primary hover:underline">https://fixmygear.com/privacy-policy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.</p>
          </section>

          <section id="contact">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4 uppercase">21. CONTACT US</h3>
            <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
            <address className="not-italic bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-4 leading-relaxed font-bold">
              FIXMYGEAR<br />
              123 Tech Avenue, Innovation District<br />
              New York, NY 10001<br />
              United States<br />
              <a href="mailto:fix@gear.com" className="text-primary">fix@gear.com</a>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;