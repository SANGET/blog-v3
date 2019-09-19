import React from 'react';

const Tags = ({ tags, className, ...other }) => {
  return Array.isArray(tags) && tags.length > 0 ? (
    <div className={`tags ${className}`} {...other}>
      {
        tags.map((tag, idx) => {
          return (
            <span key={tag}>
              # <span className="tag mr10">{tag}</span>
            </span>
          );
        })
      }
    </div>
  ) : null;
};

export default Tags;