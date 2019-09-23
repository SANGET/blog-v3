// custom typefaces
require("typeface-montserrat");
require("typeface-merriweather");
const React = require("react");
const { setUkelliConfig } = require('ukelli-ui/core/config');

const Wrapper = ({ element, props }) => {
  const isMobile = /iPhone|Android|iOS/.test(navigator.userAgent);

  React.useEffect(() => {
    const loadingDOM = document.querySelector('#loadingBg');
    if(loadingDOM) document.body.removeChild(loadingDOM);
    setUkelliConfig({
      isMobile
    });
  }, []);
  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      {React.cloneElement(element, {
        ...props,
        isMobile
      })}
    </div>
  );
};

exports.wrapPageElement = ({ element, props }) => {
  return (
    <Wrapper element={element} props={props}  />
  );
};
