import React from 'react';
import Link from './link';

const TagsList = ({ tags, className, ...other }) => (
  <div className="tags-list">
    <h4 className="title">Tags</h4>
    {
      tags.map((tag, idx) => {
        const { fieldValue, totalCount, tagPath } = tag;
        // const path = `/tags/${_.kebabCase(tag.fieldValue)}`;
        return (
          <div className="tag-item" key={fieldValue}>
            <Link to={tagPath}># {fieldValue} ({totalCount})</Link>
          </div>
        );
      })
    }
  </div>
);

export default TagsList;
