import React from 'react';
import NextLink from './NextLink';

/**
 * List item wrapper for navigation links.
 *
 * @param {Object} props
 * @param {string} props.href - The URL for the link.
 * @param {string} props.title - The link's display text.
 * @param {string} [props.linkClassName='nav-link'] - Optional class for the link.
 * @param {string} [props.liClassName='nav-item'] - Optional class for the list item.
 */
const ListItemLink = ({
  href,
  title,
  linkClassName = 'nav-link',
  liClassName = 'nav-item',
}) => (
  <li className={liClassName}>
    <NextLink href={href} title={title} className={linkClassName} />
  </li>
);

export default ListItemLink;
