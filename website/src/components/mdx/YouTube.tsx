// Reference: https://gaudion.dev/blog/mdx-youtube-embed
// Fixed by Claude to adapted with Docusaurus.

//components/mdx/YouTube.tsx
export default function YouTube ({ id, ID } : { id? : string, ID? : string }){
  const videoId = id ?? ID;
  if (!videoId) {
    throw new Error('<YouTube /> requires an "id" prop');
  }
  return (
    <div>
     <iframe
      style={{
          aspectRatio: '16/9',
          width: '90%'
      }}
      className=""
      src={"https://www.youtube.com/embed/" + videoId}
      title="YouTube Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
