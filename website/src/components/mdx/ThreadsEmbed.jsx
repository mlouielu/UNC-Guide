import React, {useEffect} from 'react';
import Translate from '@docusaurus/Translate';


export default function ThreadsEmbed({url}) {
  useEffect(() => {
    // Re-inject the script on each mount so it rescans the page
    const script = document.createElement('script');
    script.src = 'https://www.threads.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, [url]);

  const id = url.replace(/\/$/, '').split('/').pop();

  return (
    <blockquote
      className="text-post-media"
      data-text-post-permalink={url}
      data-text-post-version="0"
      id={`ig-tp-${id}`}
      style={{maxWidth: 540, margin: '1rem auto', padding: '1rem'}}>
	  <a href={url} target="_blank" rel="noopener noreferrer">
		<Translate
		  id="threadsEmbed.fallbackLink"
		  description="Fallback link text shown when a Threads embed does not load">
		  在 Threads 上查看這則貼文
		</Translate>
	  </a>
	</blockquote>
  );
}
