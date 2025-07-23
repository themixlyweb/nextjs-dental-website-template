const socialLinks = [
  {
    id: 1,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: 'uil uil-instagram',
    url: 'https://www.instagram.com/',
  },
];

const SocialLinks = ({ className = 'nav social social-white mt-4' }) => (
  <nav className={className}>
    {socialLinks.map(({ id, icon, url }) => (
      <a
        key={id}
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit our ${icon.includes('facebook') ? 'Facebook' : 'Instagram'} page`}
      >
        <i className={`${icon} fs-30 text-white rounded`} />
      </a>
    ))}
  </nav>
);

export default SocialLinks;
