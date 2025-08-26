// Reference: https://gaudion.dev/blog/mdx-youtube-embed
// Fixed by Claude to adapted with Docusaurus.

//components/mdx/YouTube.tsx
export default function YouTube ({ id } : { id : string }){
  return (
    <div>
     <iframe
      style={{
          aspectRatio: '16/9',
          width: '90%'
      }}
      className=""
      src={"https://www.youtube.com/embed/" + id}
      title="YouTube Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
