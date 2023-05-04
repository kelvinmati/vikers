import React from "react";

const Navbar = () => {
  return (
    <div className=" ">
      <div className=" h-full w-mobile md:w-container mx-auto flex  justify-between items-center">
        <div>
          <img
            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,w_105/v1682497884/Vikers_logo-1-removebg-preview_pdzctv.png"
            alt=""
          />
        </div>
        <ul className="flex  space-x-6 items-center">
          <li className="text-ourYellow">Home</li>
          <li>About us</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
