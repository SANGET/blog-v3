import React from 'react';
import wrapTagPath from '../../utils/wrap-tag-slug';
import Link from './link';

const Tags = ({ tags, className, ...other }) => {
  return Array.isArray(tags) && tags.length > 0 ? (
    <span className={`tags ${className ? className : ''}`} {...other}>
      {
        tags.map((tag, idx) => {
          return (
            <Link key={tag} to={wrapTagPath(tag)}>
              <span className="tag ml10"># {tag}</span>
            </Link>
          );
        })
      }
    </span>
  ) : null;
};

export default Tags;
