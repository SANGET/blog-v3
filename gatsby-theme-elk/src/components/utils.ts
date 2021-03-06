import React, { useRef } from "react";
import { EventEmitter } from "@mini-code/base-func";

import { LINK_TO_PAGE } from '../../utils/const';

export const usePageLoading = () => {
  const [loading, setLoading] = React.useState(false);

  const prevHref = useRef('');
  /** 设置加载和判断是否移动设备 */
  React.useEffect(() => {
    const currPath = window.location.pathname;
    if (prevHref.current !== currPath) {
      setLoading(false);
      prevHref.current = currPath;
    }
    const handleLinkToPage = (to) => {
      if (to !== currPath) {
        setLoading(true);
      }
    };
    EventEmitter.on(LINK_TO_PAGE, handleLinkToPage);
    return () => {
      EventEmitter.rm(LINK_TO_PAGE, handleLinkToPage);
    };
  });

  return loading;
};
