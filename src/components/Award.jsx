import React from "react";

const Award = () => {
  return (
    <div
      name="award"
      className="bg-gradient-to-b from-gray-800 to to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Certificate
          </p>
          <p className="py-6">Award</p>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/eQy_fPzGFOk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Award;
