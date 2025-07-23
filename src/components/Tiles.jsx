import Image from 'next/image';

const images = [
  {
    src: '/img/best-dental-hospital.webp',
    alt: 'Best Dental Hospital in Location | Dental Clinic - SEO Optimized Dental Website Template',
    className: 'col-md-10 offset-md-2',
  },
  {
    src: '/img/best-dental-hospital-2.webp',
    alt: 'Best Dental Hospital in Location | Dental Clinic - SEO Optimized Dental Website Template',
    className: 'col-md-12',
  },
  {
    src: '/img/best-dental-hospital-3.webp',
    alt: 'Best Dental Hospital in Location | Dental Clinic - SEO Optimized Dental Website Template',
    className: 'col-md-6',
    single: true,
  },
];

const Tiles = () => (
  <div className="row gx-md-5 gy-5 align-items-center">
    <div className="col-md-6">
      <div className="row gx-md-5 gy-5">
        {images
          .filter(img => !img.single)
          .map(({ src, alt, className }, index) => (
            <div className={className} key={index}>
              <figure className="rounded">
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </figure>
            </div>
          ))}
      </div>
    </div>

    <div className="col-md-6">
      <figure className="rounded">
        <Image
          src={images.find(img => img.single).src}
          alt={images.find(img => img.single).alt}
          width={800}
          height={600}
          layout="responsive"
        />
      </figure>
    </div>
  </div>
);

export default Tiles;
