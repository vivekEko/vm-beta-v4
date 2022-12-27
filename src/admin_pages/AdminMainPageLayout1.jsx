import React from "react";
import Admin_header from "../components/admin/admin_global_components/Admin_header";

const AdminMainPageLayout1 = () => {
  const pageData = {
    pageName: "Vanamamalai Temple",
    subPageName: "Temple History",
  };

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter pb-52">
      <Admin_header />
      <div className="px-16">
        <div className="flex justify-between items-center py-10  sticky  top-24 bg-[#FFF6EB] ">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl uppercase font-bold">
              {pageData?.pageName}
            </h1>
          </div>

          <div className="flex-1 ">
            <button
              //   onClick={() => {
              //     axios
              //       .put(VITE_BASE_LINK + "home_page", pageData)
              //       .then((response) => {
              //         console.log(response?.data);
              //       });
              //   }}
              className="block ml-auto p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95 "
            >
              Publish Content
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-[#5A5A5A] text-center text-2xl font-oswald">
            {pageData?.subPageName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdminMainPageLayout1;
