import React from "react";

const videoIds = [
  "oSvF4atqVW0",
  "cJvEN_nqFCo",
  "AeD8OGEKJNY",
  "FOrZHPNc-pc",
  "U_iFxRmOCdo",
];

const YoutubeVideo = () => {
  return (
    <div className="flex flex-wrap justify-center  items-center p-10">
      {videoIds.map((videoId) => (
        <div key={videoId} className="m-2">
          <iframe
            width="500"
            height="315"
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
