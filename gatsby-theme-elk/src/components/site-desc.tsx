import React from "react";

const SideDesc = ({ desc, subDesc = "" }) => {
  return (
    <div className="side-desc">
      {desc} <span className="mr10"></span> {subDesc}
    </div>
  );
};

export default SideDesc;
