import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import components with SSR disabled
const DefaulHeader = dynamic(() => import('@/components/header/DefaulHeader'), {
  ssr: false,
});
const DefaultFooter = dynamic(() => import('@/components/footer/DefaultFooter'), {
  ssr: false,
});
const Testimonial = dynamic(() => import('@/components/home-page/home-3/Testimonial'), {
  ssr: false,
});
const Testimonial2 = dynamic(() => import('@/components/home-page/home-5/Testimonial'), {
  ssr: false,
});
const Testimonial3 = dynamic(() => import('@/components/home-page/home-6/Testimonial'), {
  ssr: false,
});

const Testimonials = () => {
  return (
    <>
      {/* Header */}
      <DefaulHeader />

      {/* Feature Section Fifty One */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-6" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-20">
                <div className="sc-title-two fst-italic position-relative">
                  Testimonials
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Client Feedback About us.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
          width={500}
          height={500}
        />
      </div>

      {/* Feedback Section Eleven */}
      <div className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50" data-aos="fade-up">
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section Fourteen */}
      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="pt-180 pb-180 lg-pt-100 lg-pb-100 position-relative zn2">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h2 className="main-title fw-500 tx-dark">
                    Check our client lovely words.
                  </h2>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testimonial2 />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div className="img-holder position-relative mt-25" data-aos="fade-left">
                  <Image
                    src="/images/media/img_84.jpg"
                    alt="shape"
                    className="lazy-img ms-auto"
                    width={500}
                    height={500}
                  />

                  <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <strong className="fw-500">4.8</strong>
                    <span>avg rating</span>
                  </div>

                  <Image
                    src="/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/shape/shape_169.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
          width={500}
          height={500}
        />
      </div>

      {/* Feedback Section Two */}
      <div className="feedback-section-two position-relative pt-150 pb-150 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="title-style-three text-center mb-70 lg-mb-40">
                <div className="icon d-flex align-items-center justify-content-center rounded-circle" style={{ background: "#FFC961" }}>
                  <Image
                    src="/images/icon/icon_19.svg"
                    alt="icon"
                    className="lazy-img"
                    width={50}
                    height={50}
                  />
                </div>
                <h2 className="main-title fw-500">
                  Check what’s our
                  <span className="d-inline-block position-relative">
                    client
                    <span className="mark-bg" style={{ backgroundColor: "#BCF8F1" }} />
                  </span>
                  say about us.
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <Testimonial3 />
            </div>
          </div>
        </div>

        <div className="circle-bg shapes">
          <Image
            src="/images/shape/shape_37.svg"
            alt="shape"
            className="lazy-img main-img m-auto"
            width={500}
            height={500}
          />
          <Image
            src="/images/media/img_07.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-one"
            width={80}
            height={80}
          />
          <Image
            src="/images/media/img_08.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-two"
            width={45}
            height={45}
          />
          <Image
            src="/images/media/img_09.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-three"
            width={85}
            height={85}
          />
          <Image
            src="/images/media/img_10.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-four"
            width={45}
            height={45}
          />
          <Image
            src="/images/media/img_11.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-five"
            width={110}
            height={110}
          />
          <Image
            src="/images/media/img_12.jpg"
            alt="shape"
            className="lazy-img shapes rounded-circle cp-six"
            width={55}
            height={55}
          />
        </div>
      </div>

      {/* Footer */}
      <DefaultFooter />
    </>
  );
};

export default Testimonials;
