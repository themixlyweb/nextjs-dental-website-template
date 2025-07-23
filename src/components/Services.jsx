import { Fragment, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import Tiles from 'components/Tiles';
import ListColumn from 'components/ListColumn';
import { aboutList1 } from '../data';

const Services = () => {
  const h2Ref = useRef(null);
  const [h2Width, setH2Width] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (h2Ref.current) {
        setH2Width(h2Ref.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-5">
        {/* Left Column - Tiles with Counter */}
        <div className="col-lg-6 position-relative">
          <div
            className="btn btn-circle bg-theme-dark pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
            style={{
              zIndex: 1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 170,
              height: 170,
            }}
          >
            <h3 className="fs-24 text-white mb-1 mt-n2">
              <CountUp end={25} suffix="K+" />
            </h3>
            <p className="fs-18 merriweather">Patients Treated</p>
          </div>
          <Tiles />
        </div>

        {/* Right Column - Text Content */}
        <div className="col-lg-6">
          <div
            className="d-flex align-items-center justify-content-start mb-2"
            style={{ width: `${h2Width}px` }}
          >
            <h3 className="fs-18 fw-bold text-second merriweather mb-0 me-3">
              Dental Clinic
            </h3>
            <div
              style={{
                flex: 1,
                height: '3px',
                backgroundColor: '#b3e5fc',
              }}
            />
          </div>

          <h2 className="fs-38 mb-5 merriweather d-inline" ref={h2Ref}>
            Best Dental Hospital in Location
          </h2>

          <p className="mb-5 fs-18 text-justify lato">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas ratione odit, iste minima, debitis aliquam asperiores ab accusantium error, possimus magni dolore incidunt illo esse? Id recusandae qui velit rerum a eum fugit! Iste, quia. Beatae esse distinctio modi aperiam! Culpa recusandae aut, nam perspiciatis officia veniam modi esse? Reprehenderit exercitationem ipsa iste quam, molestiae ipsum pariatur! Quia ex facere delectus, libero consequatur laboriosam placeat unde alias. Tempore omnis, porro amet quam placeat architecto atque numquam. Nobis doloribus est, consectetur libero quae facere ex exercitationem cum praesentium, temporibus voluptatum beatae magni nostrum quo magnam, voluptate reprehenderit facilis a accusantium!
          </p>

          <ListColumn list={aboutList1} />
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
