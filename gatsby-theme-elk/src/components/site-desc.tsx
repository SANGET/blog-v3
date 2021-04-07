import React from "react";

const SideDesc = ({ desc, subDesc = "" }) => {
  return (
    <blockquote>
      <span className="mr10"></span> {subDesc}
    </blockquote>
  );
};

export default SideDesc;
