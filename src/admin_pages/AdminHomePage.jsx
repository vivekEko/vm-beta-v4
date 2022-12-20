import React, { useState } from "react";
import { useEffect } from "react";
// components
import Admin_header from "../components/admin/admin_global_components/Admin_header";
// assets
import image_icon from "../assets/img/admin/home_edit/image_icon.svg";

const AdminHomePage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const pageData = {
    pageName: "Home",
    all_sections: [
      {
        section_name: "Hero Section",
        section_data: [
          {
            title: "Heading",
            content: "SRI VANAMAMALAI (THOTHADRI) MUTT",
            type: "text",
          },
          {
            title: "Sub Heading",
            content: "SRI VANACHALA MAHAMUNI PARAMPARA",
            type: "text",
          },

          {
            title: "Brief Info",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus laoreet pretium. Ut sit amet finibus metus, nec cursus lacus.",
            type: "text",
          },

          {
            title: "Cover Image",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus laoreet pretium. Ut sit amet finibus metus, nec cursus lacus.",
            type: "image",
          },
        ],
      },

      {
        section_name: "Banner",
        section_data: [
          {
            title: "Heading",
            content: "SRI VANAMAMALAI DIVYADESAM",
            type: "text",
          },
          {
            title: "Sub Heading",
            content: "SRI VARAMANGAI NACHIYAR SAMETHA SRI DEIVANAYAGA PERUMAL",
            type: "text",
          },

          {
            title: "Brief Info",
            content:
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            type: "text",
          },

          {
            title: "Cover Image",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus laoreet pretium. Ut sit amet finibus metus, nec cursus lacus.",
            type: "image",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    setActiveSection(pageData?.all_sections[0]?.section_name);
  }, []);

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter">
      <Admin_header />
      <div className="px-16  ">
        <div className="flex justify-between items-center py-10  sticky  top-24 bg-[#FFF6EB]">
          <div></div>
          <div>
            <h1 className="text-3xl uppercase font-bold">
              {pageData?.pageName}
            </h1>
          </div>

          <div>
            <button className="p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95 ">
              Publish Content
            </button>
          </div>
        </div>

        <div className="flex items-start gap-16 text-[#232325]">
          {/* edit fields */}
          <div className="w-full  pt-10">
            {pageData?.all_sections
              ?.filter((filteredData, fliteredIndex) => {
                if (activeSection?.includes(filteredData?.section_name)) {
                  return filteredData;
                }
              })
              ?.map((data, index) => {
                return (
                  <div key={index}>
                    {data?.section_data?.map((sectionData, sectionIndex) => {
                      if (sectionData?.type === "text") {
                        return (
                          <div
                            key={sectionIndex}
                            className="bg-white p-5 rounded-lg mb-5 border-[#E0E2E7] border"
                          >
                            <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                              <h1 className="font-semibold">
                                {sectionData?.title}
                              </h1>

                              <div className=" items-center gap-5 border-x border-x-[#E0E2E7] px-5 hidden ">
                                <button className="font-bold">B</button>
                                <button className="italic">I</button>
                                <button className="underline underline-offset-4">
                                  U
                                </button>
                              </div>
                            </div>

                            <div className="mt-5">
                              <textarea
                                type="text"
                                value={sectionData?.content}
                                className="w-full outline-none border-0"
                              />
                            </div>
                          </div>
                        );
                      } else if (sectionData?.type === "image") {
                        return (
                          <div key={sectionIndex} className="my-10">
                            <div className="flex items-center gap-5">
                              <h1 className="font-semibold">
                                {sectionData?.title}
                              </h1>

                              <div className=" items-center gap-5 border-x border-x-[#E0E2E7] px-5 hidden ">
                                <button className="font-bold">B</button>
                                <button className="italic">I</button>
                                <button className="underline underline-offset-4">
                                  U
                                </button>
                              </div>
                            </div>

                            <div className="mt-2 bg-white border border-dashed rounded-lg h-full min-h-[200px] border-[#E0E2E7] relative ">
                              <lable
                                onClick={handleClick}
                                htmlFor="upload-image"
                                className="flex flex-col  justify-center items-center h-full min-h-[200px] border cursor-pointer"
                              >
                                <img
                                  src={image_icon}
                                  alt="upload image"
                                  className="w-[50px]"
                                />
                                <h1 className="font-semibold">
                                  <span className="text-[#FF440D] ">
                                    Upload an image
                                  </span>
                                </h1>
                                <h2>PNG, JPG, GIF up to 5MB</h2>
                              </lable>
                              <input
                                ref={hiddenFileInput}
                                className="hidden"
                                id="upload-image"
                                type="file"
                              />
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              })}
          </div>

          {/* section name list */}
          <div className="w-[40%] min-w-[300px] ">
            <h1 className="font-semibold">Sections</h1>
            <div className="mt-5 space-y-5">
              {pageData?.all_sections?.map((data, index) => {
                return (
                  <button
                    onClick={() => setActiveSection(data?.section_name)}
                    className="block w-full"
                  >
                    <h1
                      className={` ${
                        activeSection === data?.section_name
                          ? "bg-[#FC8D0B] text-white"
                          : "bg-white text-black"
                      } w-full font-medium  p-3 rounded-lg text-left`}
                    >
                      {data?.section_name}
                    </h1>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
