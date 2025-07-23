import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Image from 'next/image';

/**
 * Counter component for displaying a metric with icon, animated number, and title.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Title of the metric.
 * @param {number} props.number - Numeric value to animate.
 * @param {string} props.Img - Image URL or path for the icon.
 * @param {string} [props.suffix] - Optional suffix (e.g., "+", "%").
 * @returns {JSX.Element} Rendered counter block.
 */
const Counter = ({ title, number, Img, suffix }) => {
  return (
    <div className="col-md-6 col-lg-4 px-xl-12">
      <div
        className="d-flex flex-column justify-content-center align-items-center bg-white rounded counter-cards p-5"
        aria-label={`Counter card: ${title}`}
      >
        <Image
          src={Img}
          width={100}
          height={100}
          alt={title}
          priority
        />
        <h3 className="fs-30 counter mt-5 text-second" aria-label={`${number}${suffix || ''}`}>
          <CountUp end={number} suffix={suffix} />
        </h3>
        <p className="fw-bold fs-18 text-center merriweather">{title}</p>
      </div>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  Img: PropTypes.string.isRequired,
  suffix: PropTypes.string,
};

export default Counter;
