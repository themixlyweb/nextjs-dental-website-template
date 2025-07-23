import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { services, usefulLinks } from '../data';

/**
 * Renders a footer widget with a title and list of links.
 *
 * @param {Array} list - List of items with `id` and `title`.
 * @param {string} title - Widget section title.
 * @returns {JSX.Element} Footer widget.
 */
const renderWidget = (list, title) => (
  <div className="widget">
    <h3 className="widget-title fs-24 mb-3 merriweather">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ title, id }) => (
        <li key={id}>
          <NextLink href="#" title={title} className="lato" />
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Footer component for the website.
 *
 * @returns {JSX.Element} Footer section with logo, widgets, social links, and contact info.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top overflow-hidden bg-color">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Logo + Description + Social */}
          <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-center text-center text-lg-start">
              <div className="mb-5">
                <Image
                  src="/img/logo-light.webp"
                  alt="Dental Clinic Logo"
                  width={200}
                  height={100}
                  className="text-center"
                />
              </div>
              <p className="lead mb-5 fs-18 text-white lato text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error.
              </p>
              <h3 className="fs-24 text-white merriweather">Follow Us On</h3>
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Services + Useful Links */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 text-white">
            {renderWidget(services, 'Services')}
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 text-white">
            {renderWidget(usefulLinks, 'Useful Links')}
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 mt-md-5 mt-lg-0 mt-10">
            <div className="widget">
              <h3 className="widget-title fs-24 mb-3 merriweather">Contact Us</h3>
              <div className="d-flex mb-3">
                <i className="uil uil-location-pin-alt fs-30 text-white" />
                <address className="ms-2 text-white lato">
                  123 Main Street, Springfield, IL 62704, United States
                </address>
              </div>
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-white" />
                <a href="mailto:company@gmail.com" className="ms-2 text-white lato">
                  company@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="uil uil-phone-volume fs-26 text-white" />
                <a href="tel:+911234567890" className="ms-2 text-white lato fs-18">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mt-md-4 mb-7" />

        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white lato text-center">
            © {currentYear} Dental Clinic - SEO Optimized Dental Website Template. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
