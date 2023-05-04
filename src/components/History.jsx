import React from "react";
import history_img from "../assets/history_img.jpg";
const History = () => {
  return (
    <div className="">
      <div className="w-mobile md:w-container items-center mx-auto grid md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <h2 className="text-2xl text-ourRed">Brief History</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            libero quibusdam adipisci? Perferendis mollitia rerum voluptatibus
            dolor, quod doloribus maiores nesciunt unde quae eum autem?
          </p>
          <button className="px-5 py-3 text-gray-100 bg-ourYellow rounded-full">
            Contact us
          </button>
        </div>
        <div>
          <img className="rounded-md" src={history_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default History;
