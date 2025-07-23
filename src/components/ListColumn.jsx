import React from 'react';

/**
 * Renders a responsive two-column bullet list.
 *
 * @param {Object} props
 * @param {string[][]} props.list - Array of list item groups (each group as an array of strings).
 * @param {string} [props.rowClass] - Additional CSS classes for row container.
 * @param {string} [props.bulletColor='blue'] - Bullet color modifier class.
 */
const ListColumn = ({ list, rowClass = '', bulletColor = 'blue' }) => {
  return (
    <div className={`row gy-3 ${rowClass}`}>
      {list.map((group, groupIndex) => (
        <div className="col-xl-6" key={`group-${groupIndex}`}>
          <ul className={`icon-list bullet-bg bullet-soft-${bulletColor} mb-0 lato`}>
            {group.map((item, itemIndex) => (
              <li
                key={`item-${groupIndex}-${itemIndex}`}
                className={itemIndex !== 0 ? 'mt-3' : undefined}
              >
                <i className="uil uil-check" aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListColumn;
