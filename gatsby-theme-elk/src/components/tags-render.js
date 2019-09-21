import React from 'react';
import { Link, graphql } from "gatsby";
import wrapTagPath from '../../utils/wrap-tag-slug';

const Tags = ({ tags, className, ...other }) => {
  return Array.isArray(tags) && tags.length > 0 ? (
    <div className={`tags ${className ? className : ''}`} {...other}>
      {
        tags.map((tag, idx) => {
          return (
            <Link key={tag} to={wrapTagPath(tag)}>
              <span className="tag ml10"># {tag}</span>
            </Link>
          );
        })
      }
    </div>
  ) : null;
};

export default Tags;