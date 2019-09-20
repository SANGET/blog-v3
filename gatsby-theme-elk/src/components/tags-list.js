import React from 'react';
import { Link, graphql } from "gatsby";
// const _ = require("lodash");

const TagsList = ({ tags, className, ...other }) => {
  return (
    <div className="tags-list">
      <ul>
        {
          tags.map((tag, idx) => {
            const { fieldValue, totalCount, tagPath } = tag;
            // const path = `/tags/${_.kebabCase(tag.fieldValue)}`;
            return (
              <li className="tag-item" key={fieldValue}>
                <Link to={tagPath}>{fieldValue} ({totalCount})</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default TagsList;