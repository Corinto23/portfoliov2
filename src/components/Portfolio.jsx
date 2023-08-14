import React from "react";
import analogClock from "../assets/images/analogClock.png";
import calculator from "../assets/images/calculator.png";
import currencyConverter from "../assets/images/currencyConverter.png";
import mp1 from "../assets/images/mp1.png";
import rpsGame from "../assets/images/rpsGame.png";
import toDoList from "../assets/images/toDoList.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: analogClock,
    },
    {
      id: 2,
      src: calculator,
    },
    {
      id: 3,
      src: currencyConverter,
    },
    {
      id: 4,
      src: mp1,
    },
    {
      id: 5,
      src: rpsGame,
    },
    {
      id: 6,
      src: toDoList,
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
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center jc">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
