import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled
const Header = dynamic(() => import('@/components/home-page/home-6/Header'), {
  ssr: false,
});
const DefaultFooter = dynamic(() => import('@/components/footer/DefaultFooter'), {
  ssr: false,
});
const Pagination = dynamic(() => import('@/components/blog/Pagination'), {
  ssr: false,
});
const SearchBox = dynamic(() => import('@/components/blog/SearchBox'), {
  ssr: false,
});
const Category = dynamic(() => import('@/components/blog/Category'), {
  ssr: false,
});
const RecentPost = dynamic(() => import('@/components/blog/RecentPost'), {
  ssr: false,
});
const BannerPost = dynamic(() => import('@/components/blog/BannerPost'), {
  ssr: false,
});
const Blog2 = dynamic(() => import('@/components/blog/Blog'), {
  ssr: false,
});
const Image = dynamic(() => import('next/image'), {
  ssr: false,
});

const GridWithSidebar = () => {
  return (
    <>
      {/* 
      =============================================
      Theme Default Menu
      ============================================== 	
      */}
      <Header />

      {/* 
      =============================================
      Feature Section Fifty One
      ============================================== 
      */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <h2 className="main-title fw-500 tx-dark">
                  Check our inside news &amp; update.
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
      </div>

      {/* 
      =============================================
      Blog Section Five
      ============================================== 
      */}
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <div className="row">
                    <Blog2 />
                  </div>
                </div>
                {/* /.blog-meta-wrapper */}
                <div className="page-pagination-one pt-15">
                  <Pagination />
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox />
                  </div>
                  {/* /.blog-sidebar-search */}

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <Category />
                  </div>
                  {/* /.blog-sidebar-category */}

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div>
                  {/* /.sidebar-recent-news */}

                  <BannerPost />
                  {/* /.sidebar-banner-add */}
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
      =============================================
      Contact Section One
      ============================================== 
      */}
      <DefaultFooter />
    </>
  );
};

export default GridWithSidebar;
