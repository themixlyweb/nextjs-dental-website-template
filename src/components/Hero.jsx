import NextLink from 'components/NextLink';

/**
 * Hero section with heading, subheading, and call-to-action.
 * Includes animations and responsive layout.
 */
const Hero = () => {
  return (
    <section className="wrapper bg-dark">
      <div className="swiper-hero dots-over">
        <div className="swiper-slide bg-dark bg-image hero" aria-label="Hero section background">
          <div className="container h-100">
            <div className="row h-100 hero-text">
              <div
                className="d-flex flex-column justify-content-center align-items-center align-items-md-start hero-text"
                style={{ maxWidth: '60%' }}
              >
                <h3
                  className="merriweather fs-24 text-white animate__animated animate__slideInDown animate__delay-1s"
                  aria-label="10 Years of Dental Excellence"
                >
                  10 Years of Dental Excellence
                </h3>
                <h1
                  className="merriweather fs-48 mb-4 text-white animate__animated animate__slideInDown animate__delay-2s"
                  aria-label="Main heading: Your Smile, Our Commitment"
                >
                  Your Smile, Our Commitment
                </h1>
                <p
                  className="lato lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-3s"
                  aria-label="Supporting text"
                >
                  Discover the difference exceptional dentistry makes with Dental Clinic — an SEO-optimized dental website template.
                </p>
                <div className="animate__animated animate__slideInUp animate__delay-3s merriweather">
                  <NextLink
                    title="Book Appointment"
                    href="#"
                    className="btn btn-lg rounded"
                    aria-label="Book an appointment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
