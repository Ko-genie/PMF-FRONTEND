import dynamic from 'next/dynamic';
import Image from "next/image";

// Dynamically import components with SSR disabled
const DefaulHeader = dynamic(() => import('@/components/header/DefaulHeader'), {
  ssr: false,
});
const DefaultFooter = dynamic(() => import('@/components/footer/DefaultFooter'), {
  ssr: false,
});
const Team1 = dynamic(() => import('@/components/team/Team1'), {
  ssr: false,
});
const CallToAction = dynamic(() => import('@/components/team/CallToAction'), {
  ssr: false,
});

const TeamV1 = () => {
  return (
    <>
      {/* Header */}
      <DefaulHeader />

      {/* Feature Section Fifty One */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Our Team
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  World’s most qualified team members.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          width={90}
          height={30}
          className="lazy-img shapes shape-two"
        />
        <Image
          src="/images/shape/shape_175.svg"
          alt="shape"
          width={90}
          height={30}
          className="lazy-img shapes shape-three"
        />
      </div>

      {/* Team Section Two */}
      <div className="team-section-two mt-20">
        <div className="container">
          <div className="wrapper border-bottom pb-120 lg-pb-80 position-relative">
            <div className="row">
              <Team1 />
            </div>
            {/* /.row */}

            <CallToAction />
            {/* End call to action */}
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.team-section-two */}

      {/* Footer */}
      <DefaultFooter />
    </>
  );
};

export default TeamV1;
