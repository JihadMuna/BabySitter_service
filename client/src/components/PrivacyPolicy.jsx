import React from "react";
import privacyImage from "../assets/privacy-policy.jpg";
function PrivacyPolicy() {
  return (
    <>
      <div className="container mx-auto p-4 text-gray-800">
        <div className="text-center m-8">
          <img src={privacyImage} alt="about-image" />
        </div>
        <h1 className="text-3xl font-bold mb-4">
          BabySitter Service Privacy Policy
        </h1>
        <p>
          Thank you for choosing to be our customer, and use Babysitter
          service’s website.
        </p>
        <br />
        <p>
          The Privacy Policy of Babysitter service (the “Policy”) describes how
          we - the owners of the Site - Kislev Y”A Ltd. (Reg. No. 514189828)
          collect and process personally identifiable information on the Site.
          Your privacy is important to us, therefore we recommend you read this
          Policy carefully.
        </p>{" "}
        <br />
        <p>
          The Privacy Policy applies to you even if you have not signed up for
          the Site, except for the terms and conditions of the Policy that are
          applicable only to registered users. If after reading the Policy you
          find that it does not match your view or wishes, you should refrain
          from using the Site. We will regret it, but this is your full right.
          At any time, you may contact our Privacy Officer at:
          https://babysitter-service.netlify.app/contact-us, concerning requests
          or inquiries in connection with the Policy. If you are under 18, we
          will display your ad subject to the consent of your parents or legal
          guardian.
        </p>{" "}
        <br />
        <p>
          From time to time we may make changes to the Policy, due to the
          dynamic nature of the Site, of the Internet in general, and of the
          legislative and regulatory aspects that may apply to the Site's
          activity. We will post a notice about changes to the Policy on the
          Site or send you a notice by email detailing the changes and the date
          the changes will come into effect.
        </p>{" "}
        <br />
        <p>
          We implement information security systems and procedures to protect
          information related to you from abusive and unauthorized use. For
          example, all pages of the Site are secured by SSL encryption protocol.
          Payments by credit card are done via a secure vendor's payment
          processing platform that complies with the PCI-DSS standard, and our
          hosting service providers implement physical security and monitoring
          systems to prevent unauthorized access to the Site.
        </p>
      </div>
    </>
  );
}

export default PrivacyPolicy;
