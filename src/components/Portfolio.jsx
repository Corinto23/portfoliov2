import React from "react";
import analogClock from "../assets/images/analogClock.png";
import tsxone from "../assets/images/tsxone.png";
import currencyConverter from "../assets/images/currencyConverter.png";
import mp1 from "../assets/images/mp1.png";
import rpsGame from "../assets/images/rpsGame.png";
import toDoList from "../assets/images/toDoList.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mp1,
      demoLink: "https://corinto23.github.io/mini-project-1/",
      codeLink: "https://github.com/Corinto23/mini-project-1",
    },
    {
      id: 2,
      src: tsxone,
      demoLink: "https://tsxone.pages.dev/",
      codeLink: "https://github.com/Corinto23/tsxone",
    },
    {
      id: 3,
      src: currencyConverter,
      demoLink: "https://corinto23.github.io/currencyConverter/",
      codeLink: "https://github.com/Corinto23/currencyConverter",
    },
    {
      id: 4,
      src: analogClock,
      demoLink: "https://corinto23.github.io/analogClock/",
      codeLink: "https://github.com/Corinto23/analogClock",
    },
    {
      id: 5,
      src: rpsGame,
      demoLink: "https://corinto23.github.io/rockPaperScissor/",
      codeLink: "https://github.com/Corinto23/rockPaperScissor",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">My Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
