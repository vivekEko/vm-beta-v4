import React from "react";
import Admin_header from "../components/admin/admin_global_components/Admin_header";

// assets
import editIcon from "../assets/img/admin/dashboard/edit_icon.svg";
import optionsIcon from "../assets/img/admin/dashboard/options_icon.svg";

const AdminDashboard = () => {
  const homePageData = {
    title: ["Page title", " Side pages", "Status", "Actions"],
    all_page_data: [
      {
        page_name: "Home Page",
        status: "Published",
      },
      {
        page_name: "Vanamamalai temple",
        sub_pages: 3,
        status: "Published",
      },
      {
        page_name: "Other temple",
        sub_pages: 3,
        status: "Draft",
      },
      {
        page_name: "Branches",
        sub_pages: 3,
        status: "Archived",
      },
      {
        page_name: "Ponnadikkal Jeeyar",
        sub_pages: 3,
        status: "Published",
      },
      {
        page_name: "Jeeyars",
        sub_pages: 1,
        status: "Published",
      },
      {
        page_name: "Education",
        sub_pages: 1,
        status: "Published",
      },
      {
        page_name: "Gallery",
        sub_pages: 1,
        status: "Published",
      },
    ],
  };
  return (
    <div className="bg-[#FFF6EB] ">
      <Admin_header />
      <div className="px-16 h-[100vh]">
        <div className="grid grid-cols-4 p-5 items-center pt-20 font-inter">
          {homePageData?.title?.map((data, index) => {
            return (
              <h1
                className={`font-semibold  ${
                  data === "Page title" ? "" : "text-center"
                }
                
                ${data === "Status" ? "max-w-[200px] mx-auto" : ""}
                `}
              >
                {data}
              </h1>
            );
          })}
        </div>

        <div>
          {homePageData?.all_page_data?.map((data, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-4  items-center p-5 my-5 font-inter bg-white"
              >
                <h1 className="text-[#5A5A5A] font-semibold ">
                  {data?.page_name}
                </h1>
                <h1 className="font-semibold  text-center">
                  {data?.sub_pages}
                </h1>
                <h1
                  className={` mx-auto  ${
                    data?.status === "Published"
                      ? "bg-[#29A654] "
                      : data?.status === "Draft"
                      ? "bg-[#7E7E7E]"
                      : "bg-[#FFA451]"
                  }  text-center text-white p-2 px-5 w-[150px] rounded-full`}
                >
                  {data?.status}
                </h1>
                <h1 className="flex justify-center gap-5">
                  <img src={editIcon} alt="edit" />
                  <img src={optionsIcon} alt="options" />
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
