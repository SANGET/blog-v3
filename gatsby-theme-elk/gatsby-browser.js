// custom typefaces
require("typeface-montserrat");
require("typeface-merriweather");
const React = require("react");

exports.wrapPageElement = ({ element, props }) => {

  const isMobile = /iPhone|Android|iOS/.test(navigator.userAgent);

  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      {React.cloneElement(element, {
        ...props,
        isMobile
      })}
    </div>
  );
};
