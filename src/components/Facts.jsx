import Counter from 'components/Counter';
import { factList1, factList2 } from '../data';

/**
 * Facts section that displays multiple counters using fact list data.
 *
 * @component
 * @returns {JSX.Element} Grid of animated fact counters.
 */
const Facts = () => {
  const combinedFacts = [...factList1, ...factList2];

  return (
    <div className="row d-flex justify-content-center align-items-center g-10 g-lg-12">
      {combinedFacts.map(({ id, number, title, src }) => (
        <Counter
          key={id}
          title={title}
          number={number}
          suffix="+"
          Img={src}
        />
      ))}
    </div>
  );
};

export default Facts;
