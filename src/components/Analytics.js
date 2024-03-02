import React from "react";
import Laptop from "../Assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[500px] mx-auto my-4 "
          src={Laptop}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className=" text-[#00df9a] text-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:4xl sm:3xl text-2xl font-bold py-2 ">Manage Data Analytics Centrally</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sit eveniet ex pariatur doloribus, dicta dolorum. Velit rem reprehenderit nemo molestiae porro sapiente facilis. Maxime sunt sint placeat quo nostrum.</p>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md mx-auto md:mx-0 my-6 py-3  font-medium ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
