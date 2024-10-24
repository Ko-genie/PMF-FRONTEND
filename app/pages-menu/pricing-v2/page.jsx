import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Dynamically import components with SSR disabled
const Header = dynamic(() => import('@/components/home-page/home-6/Header'), {
  ssr: false,
});
const FooterMenu = dynamic(() => import('@/components/home-page/home-6/FooterMenu'), {
  ssr: false,
});
const CopyrightFooter2 = dynamic(() => import('@/components/footer/CopyrightFooter2'), {
  ssr: false,
});
const Pricing2 = dynamic(() => import('@/components/pricing/Pricing2'), {
  ssr: false,
});
const Faq2 = dynamic(() => import('@/components/faqs/Faq2'), {
  ssr: false,
});
const SocialPartner = dynamic(() => import('@/components/common/SocialPartner'), {
  ssr: false,
});

const PricingV2 = () => {
  return (
    <>
      {/* Theme Default Menu */}
      <Header />

      {/* Theme Hero Banner */}
      <div className="hero-banner-two position-relative mt-160 pb-80 md-mt-150 lg-pb-50">
        <Image
          src="/images/shape/shape_182.svg"
          alt="shape"
          className="lazy-img shapes shape-left-two"
        />
        <Image
          src="/images/shape/shape_183.svg"
          alt="shape"
          className="lazy-img shapes shape-right-two"
        />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal font-recoleta">
                Simple, Transparent &amp; Great pricing.
              </h1>
              <p className="text-lg pt-20 lg-pt-10">
                We have all kind of plans for every business that fit with your
                needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section-one position-relative">
        <div className="container">
          <Pricing2 />
        </div>
        <div className="shapes shape-one rounded-circle" />
        <Image
          src="/images/shape/shape_40.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* Fancy Short Banner */}
      <div
        className="fancy-short-banner-two mt-100 lg-mt-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="position-relative">
            <div className="inner-wrapper text-center m-auto">
              <h6 className="mb-5">Need Custom Plan?</h6>
              <h3 className="fw-normal mb-30">Send us message for Help.</h3>
              <Link href="/contact/contact-v1" className="btn-six fw-500">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="fancy-feature-eleven bg-color position-relative mt-160 lg-mt-90 pt-120 lg-pt-80 pb-90 lg-pb-70">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-three">
                <div className="sc-title text-uppercase">FAQ</div>
                <h2 className="main-title fw-normal">
                  Have any question in mind?
                </h2>
              </div>
              <div
                className="fs-15 fw-500 pt-40 pb-5 lg-pt-30"
                style={{ color: "#FF6B2F" }}
              >
                Confusion?
              </div>
              <p className="text-lg mb-45">
                Don’t find your answer here? just send us a message for help
              </p>
              <Link
                href="/contact/contact-v1"
                className="tran3s fs-17 fw-500 btn-three"
              >
                Contact Us
              </Link>
            </div>

            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq2 />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Section */}
      <div className="partner-section-one position-relative mt-160 mb-225 lg-mt-90 lg-mb-150 md-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div
                className="title-style-three text-center mb-70 lg-mb-30"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-normal">
                  Thousands of
                  <span className="d-inline-block position-relative">
                    customers
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#CDFFF0" }}
                    />
                  </span>
                  use Jano as their digital HQ, including:
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center justify-content-center">
                <SocialPartner />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
          <div className="shapes shape-one rounded-circle" />
          <div className="shapes shape-two rounded-circle" />
          <Image
            src="/images/shape/shape_42.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <Image
            src="/images/shape/shape_43.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>
        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default PricingV2;
