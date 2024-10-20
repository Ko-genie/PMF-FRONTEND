import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

export const metadata = {
  title: "Cookie policy",
};

const Policy = () => {
  return (
    <>
      {/* 
      =============================================
      Theme Default Menu
      ============================================== 	
      */}
      <DefaulHeader />

      {/* 
      =============================================
      Policy Content
      ============================================== 	
      */}
      <div className="policy-content mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 className="fw-500 tx-dark">Cookie Policy</h1>
              <p>Last updated May 12, 2022</p>

              <p>
                This label: "label: "label: "Cookie policy", href: "/policy/cookie"", href: "/policy/cookie"", href: "/policy/cookie" explains how KOGENIE E-SOLUTIONS PRIVATE
                LIMITED ("Company", "we", "us", and "our") uses cookies and
                similar technologies to recognize you when you visit our
                websites at <a href="http://www.kogenie.com">http://www.kogenie.com</a>.
              </p>
              <h3>What are cookies?</h3>
              <p>
                Cookies are small data files placed on your computer or mobile
                device when you visit a website. Cookies are used to make
                websites work more efficiently and to provide reporting
                information.
              </p>

              <h3>Why do we use cookies?</h3>
              <p>
                We use both first-party and third-party cookies for essential
                purposes, analytics, and targeted advertising. These cookies can
                track your interaction with our website and help improve your
                experience.
              </p>

              <h3>How can I control cookies?</h3>
              <p>
                You can decide whether to accept or reject cookies using the
                Cookie Consent Manager. Essential cookies are necessary to
                provide services and cannot be rejected.
              </p>

              <h3>What about other tracking technologies?</h3>
              <p>
                We may also use web beacons, tracking pixels, or clear gifs to
                monitor site traffic or measure the effectiveness of email
                marketing campaigns.
              </p>

              <h3>Do you serve targeted advertising?</h3>
              <p>
                Third-party cookies may be used for targeted advertising. These
                cookies can track your interactions across multiple websites to
                provide relevant ads.
              </p>

              <h3>How often will you update this Cookie Policy?</h3>
              <p>
                We may update this policy from time to time to reflect changes
                in the use of cookies or for operational, legal, or regulatory
                reasons. Please revisit this page regularly.
              </p>

              <h3>Further Information</h3>
              <p>
                If you have any questions about our use of cookies, please
                contact us at:
                <br />
                Email: <a href="mailto:contact@kogenie.com">contact@kogenie.com</a>
                <br />
                Address: KOGENIE E-SOLUTIONS PRIVATE LIMITED, CR PARK K1-34, New
                Delhi 110024 India
                <br />
                Phone: +91 9606045031
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
      =============================================
      Footer
      ============================================== 	
      */}
      <DefaultFooter />
    </>
  );
};

export default Policy;
