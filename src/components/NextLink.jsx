import Link from 'next/link';

const NextLink = ({ href, className = '', title }) => (
  <Link href={href} className={className}>
    {title}
  </Link>
);

export default NextLink;
