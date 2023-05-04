import React from "react";
import hero_image from "../assets/hero_img.jpg";
import sahara_logo from "../assets/sahara-logo-removebg-preview.png";
import stima_sacco_logo from "../assets/stima-sacco-removebg-preview.png";

const Sponsors = () => {
  return (
    <div
      //   className="py-4 bg-ourYellow text-white md:h-[200px]  bg-no-repeat bg-cover bg-left-top	 bg-blend-multiply"
      //   style={{
      //     backgroundImage: `url(${hero_image})`,
      //   }}
      className="py-4  h-[200px] bg-gray-50 "
    >
      <div className="w-mobile md:w-container mx-auto   space-y-5 ">
        <h2 className="text-2xl">Our sponsors</h2>
        <div className="grid md:grid-cols-3 gap-4  ">
          <div>
            <img className="w-[200px] h-[90px]" src={stima_sacco_logo} />
          </div>
          <div>
            <img className="w-[200px] h-[90px]" src={sahara_logo} alt="" />
          </div>
          <div>
            <img
              className="w-[200px] h-[90px]"
              src="https://kaac.com/wp-content/uploads/2019/08/kaac-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
