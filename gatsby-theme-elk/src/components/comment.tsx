import React, { useEffect, useState } from 'react';
import { LoadScript, LoadLink } from '@deer-ui/core/utils';

{ /* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css"></link>
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script> */ }
export default function Comment() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = window.location.pathname;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = decodeURI(window.location.pathname); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://alex-blog-1.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();`;
    document.head.appendChild(script);
  }, []);
  return (
    <>
      <div id="disqus_thread"></div>
    </>
  );
}
