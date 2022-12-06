import React from "react";

// assets
import header_img from "../../../assets/img/header/header-img.png";

const Admin_header = () => {
  return (
    <header className="flex justify-center items-center p-5  bg-[#FC8D0B]">
      <div>
        <img src={header_img} alt="..." />
      </div>
    </header>
  );
};

export default Admin_header;
