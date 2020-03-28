import React from 'react';

const SideDesc = ({ desc, subDesc = '' }) => {
  return (
    <blockquote>{desc} <span className="mr10"></span> {subDesc}</blockquote>
  );
};

export default SideDesc;
