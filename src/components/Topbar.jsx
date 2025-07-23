const Topbar = () => {
  const contactItems = [
    {
      href: 'tel:+911234567890',
      icon: 'uil-phone-volume',
      text: '+91 12345 67890',
    },
    {
      href: 'mailto:company@gmail.com',
      icon: 'uil-envelope',
      text: 'company@gmail.com',
    },
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/',
      icon: 'uil-facebook',
    },
    {
      href: 'https://www.instagram.com/',
      icon: 'uil-instagram',
    },
  ];

  return (
    <section className="bg-color d-none d-md-block">
      <div className="container text-white">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 d-none d-xl-flex">
            <p className="m-0 text-white lato">
              Opening Time: &nbsp; Monday To Saturday - (10am to 2pm & 5pm to 8pm)
            </p>
          </div>

          {contactItems.map(({ href, icon, text }, index) => (
            <div
              key={index}
              className="d-flex flex-row align-items-center justify-content-center col-auto me-2"
            >
              <div className="icon text-white fs-22 mt-1 me-2">
                <i className={`uil ${icon}`} />
              </div>
              <a href={href} className="link-white hover lato">
                {text}
              </a>
            </div>
          ))}

          <div className="d-flex flex-row align-items-center justify-content-center col-auto">
            {socialLinks.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                className={`link-white hover${index === 0 ? ' me-2' : ''}`}
              >
                <div className="icon text-white fs-22 mt-1">
                  <i className={`uil ${icon}`} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
