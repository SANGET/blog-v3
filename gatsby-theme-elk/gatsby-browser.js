// custom typefaces
require("typeface-montserrat");
require("typeface-merriweather");
const React = require("react");
// const { setUkelliConfig } = require('ukelli-ui/core/config');
const { Loading } = require('ukelli-ui/core/loading');
const { Call, EventEmitter } = require('basic-helper');

const { LINK_TO_PAGE } = require('./utils/const');

let prefHref = window.location.href;
const Wrapper = ({ element, props }) => {
  const isMobile = /iPhone|Android|iOS/.test(navigator.userAgent);

  const [loading, setLoading] = React.useState(true);
  const currHref = window.location.href;
  React.useEffect(() => {
    // setLoading(false);
    // console.log('useEffect')
    const loadingDOM = document.querySelector('#loadingBg');
    if(loadingDOM) document.body.removeChild(loadingDOM);
    const handleLinkToPage = () => {
      if(prefHref !== currHref) setLoading(true);
    };
    EventEmitter.on(LINK_TO_PAGE, handleLinkToPage);
    setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => {
      // setLoading(true);
      EventEmitter.rm(LINK_TO_PAGE, handleLinkToPage);
    };
  }, [currHref]);
  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      <Loading inrow loading={loading} />
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
