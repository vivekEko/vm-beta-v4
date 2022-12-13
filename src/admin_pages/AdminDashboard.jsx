import React from "react";
import Admin_header from "../components/admin/admin_global_components/Admin_header";

const AdminDashboard = () => {
  const homePageData = {
    title: ["Page title", " Side pages", "Status"],
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
    <div className="bg-[#FFF6EB]">
      <Admin_header />
      <div className="px-16  h-[100vh]">
        <div className="grid grid-cols-3 justify-items-center items-center">
          {homePageData?.title?.map((data, index) => {
            return <h1>{data}</h1>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
