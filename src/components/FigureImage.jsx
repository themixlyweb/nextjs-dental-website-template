import Image from 'next/image';
import PropTypes from 'prop-types';

/**
 * Responsive figure wrapper for Next.js Image.
 *
 * @component
 * @param {Object} props - Props for the image.
 * @param {string} props.className - CSS classes for the <figure>.
 * @param {string} props.src - Image source URL.
 * @param {number} props.width - Image width (required for Next.js optimization).
 * @param {number} props.height - Image height (required for Next.js optimization).
 * @param {string} props.alt - Descriptive alt text for accessibility.
 * @returns {JSX.Element} A semantic <figure> with responsive image.
 */
const FigureImage = ({ className, src, width, height, alt, ...others }) => {
  return (
    <figure className={className} {...others}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
        }}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
};

FigureImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FigureImage;
