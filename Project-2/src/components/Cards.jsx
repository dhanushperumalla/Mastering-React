import React from "react";

const Cards = ({ name = "Default Name" }) => {
  return (
    <div className="flex flex-col items-center justify-center border p-10 rounded-md gap-5 w-96 flex-wrap">
      <img
        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="w-52 h-52 rounded-md"
      />
      <h1 className="text-base bg-green-500 p-2 rounded">{name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta
        commodi optio ea minus!
      </p>
    </div>
  );
};

export default Cards;
