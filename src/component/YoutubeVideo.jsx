
const videoIds = [
  "w4vdcwQzRZA",
  "_D7MGFRNtUE",
  "g26WLLGkxus",
  "x3orkqvcwdc",
  "w4vdcwQzRZA",
  "_D7MGFRNtUE",
  "g26WLLGkxus",
  "ARfPginzTco",
];
const YoutubeVideo = () => {
  return (
    <div className="flex flex-wrap justify-center  items-center pb-5">
      {videoIds.map((videoId) => (
        <div key={videoId} className="m-2">
          <iframe
            width="400"
            height="225"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`YouTube video player - ${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YoutubeVideo;
