import React, { useEffect, useState } from 'react';
import { LoadScript, LoadLink } from '@deer-ui/core/utils';

{ /* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css"></link>
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script> */ }
export default function Comment() {
  const [ready, setReady] = useState(false);
  return (
    <>
      <div id="disqus_thread"></div>
      <script __dangor></script>
    </>
  );
}
