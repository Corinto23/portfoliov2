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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          sapiente dolorum illo, necessitatibus error placeat recusandae
          molestiae aperiam ipsum praesentium velit quisquam soluta voluptatum,
          dolorem perferendis quia consequuntur assumenda! Magni numquam eius,
          itaque, cum atque quos provident vel omnis, quam est amet? Blanditiis
          fuga officiis, corporis aliquid ipsam laborum possimus.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore esse
          harum libero hic magni impedit eaque incidunt molestias, iusto totam
          laborum odit quos delectus doloremque deleniti neque? Facilis aperiam
          pariatur et a ipsam, dolorem qui repellat laborum nulla eveniet veniam
          officia perferendis in quasi eaque distinctio iusto inventore
          consequatur non?
        </p>
      </div>
    </div>
  );
};

export default About;
