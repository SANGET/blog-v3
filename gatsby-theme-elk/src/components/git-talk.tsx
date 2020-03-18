import React, { useEffect, useState } from 'react';
import { LoadScript, LoadLink } from '@deer-ui/core/utils';

{ /* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css"></link>
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script> */ }
export default function Comment() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    LoadScript({
      src: 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js'
    })
      .then(() => {
        const gitalk = new Gitalk({
          clientID: 'f8eba0f1901205e0e513',
          clientSecret: '7d4cfcf55e3877fcd149d5f94f2ff20e070b0b7a',
          repo: 'blog-v3',
          owner: 'SANGET',
          admin: ['SANGET'],
          id: decodeURI(window.location.pathname), // Ensure uniqueness and length less than 50
          distractionFreeMode: false // Facebook-like distraction free mode
        });
        gitalk.render('gitalk-container');
      });
    LoadLink({ src: 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css' });
  }, []);
  return (
    <div id="gitalk-container"></div>
  );
}
