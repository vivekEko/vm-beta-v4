import React from "react";
import { Link } from "react-router-dom";

// assets
import header_img from "../../../assets/img/admin/header/header-img.png";
import view_site from "../../../assets/img/admin/header/view-site.svg";

const Admin_header = () => {
  return (
    <header className="flex justify-between items-center p-5  bg-[#feddb5]  px-16 sticky top-0 z-[10060] ">
      <div></div>
      <div>
        <img src={header_img} alt="..." />
      </div>
      <div>
        {localStorage.getItem("token") && (
          <Link to={"/"} target="_blank">
            <button className="flex gap-2 tracking-wider group">
              <span className="group-hover:underline underline-offset-4 transition-all">
                View Site
              </span>
              <img src={view_site} alt="view site" className="w-[35px]" />
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Admin_header;
