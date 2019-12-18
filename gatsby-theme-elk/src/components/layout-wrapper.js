import React from 'react';

import { Loading } from '@deer-ui/core/loading';
import { Call, EventEmitter } from '@mini-code/base-func';
import { queryIsMobile } from '@deer-ui/core/utils';

import { LINK_TO_PAGE } from '../../utils/const';

import '../style/index.scss';

let prefHref;
const Wrapper = ({ children, props }) => {
  // const isMobile = /iPhone|Android|iOS/.test(navigator.userAgent);
  const [isMobile, setIsMobile] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  /** 删除 loading 背景 */
  React.useEffect(() => {
    const loadingDOM = document.querySelector('#loadingBg');
    if (loadingDOM) document.body.removeChild(loadingDOM);
  }, []);

  /** 设置加载和判断是否移动设备 */
  React.useEffect(() => {
    const isMobile2 = queryIsMobile();
    setIsMobile(isMobile2);
    const currHref = window.location.href;
    const handleLinkToPage = () => {
      if (prefHref !== currHref) {
        setLoading(true);
        prefHref = currHref;
      }
    };
    EventEmitter.on(LINK_TO_PAGE, handleLinkToPage);
    setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => {
      // setLoading(true);
      EventEmitter.rm(LINK_TO_PAGE, handleLinkToPage);
    };
  }, [loading]);
  return (
    <div className={isMobile ? 'mobile' : 'desktop'} id="__out_wrapper">
      <Loading inrow loading={loading} />
      {React.cloneElement(children, {
        ...props,
        isMobile,
      })}
    </div>
  );
};

export default Wrapper;
