import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          A warm welcome to my corner of the internet. My journey began with a
          degree in Computer Technology, and from there, I've been on a
          rollercoaster of exciting tech adventures. Coding has my heart because
          it's not just a job for me; it's the path to becoming an IT
          professional. As a fast learner and adaptable developer, I thrive on
          challenges that help me grow.
        </p>
        <br />
        <p className="text-xl">
          Beyond the screen, you'll find me immersed in the worlds of gaming, TV
          series, movies, and anime. Staying updated with technology is a must,
          so I keep my ears to the ground, learning from fellow developers
          online. Looking ahead, my vision is clear – I'm on a quest to become
          one of the best. Thanks for stopping by and getting to know me a
          little better.
        </p>
      </div>
    </div>
  );
};

export default About;
