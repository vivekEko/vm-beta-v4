import React, { useState } from "react";
import Admin_header from "../components/admin/admin_global_components/Admin_header";
// assets
import image_icon from "../assets/img/admin/home_edit/image_icon.svg";
import arrow_icon from "../assets/img/admin/home_edit/arrow.svg";
import delete_icon from "../assets/img/admin/home_edit/delete.svg";
import delete_icon_active from "../assets/img/admin/home_edit/delete-active.svg";
import eye_open_inactive from "../assets/img/admin/home_edit/eye_open_inactive.svg";
import eye_open_active from "../assets/img/admin/home_edit/eye_open.svg";
import eye_close_inactive from "../assets/img/admin/home_edit/eye_close.svg";
import eye_close_active from "../assets/img/admin/home_edit/eye_close_active.svg";
import { useEffect } from "react";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const AdminSubPageLayout1 = () => {
  const pageData2 = {
    pageName: "Vanamamalai Temple",
    subPageName: "Temple History",
    all_tabs: [
      {
        tab_name: "Tab 1",
        tab_id: 7,
        status: true,
        tab_data: [
          {
            id: 1,
            title: "Heading",
            content: "SRI VANAMAMALAI (THOTHADRI) MUTT",
            type: "text",
            link_status: true,
          },
          {
            id: 2,
            title: "Sub Heading",
            content: "SRI VANACHALA MAHAMUNI PARAMPARA",
            type: "text",
            link_status: true,
          },
          {
            id: 3,
            title: "Brief Info",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus laoreet pretium. Ut sit amet finibus metus, nec cursus lacus.",
            type: "text",
            link_status: true,
          },
          {
            id: 4,
            title: "Cover Image",
            content: ["media/img/first_tab_image.png"],
            type: "image",
            link_status: true,
          },
          {
            id: 5,
            title: "Background Color",
            content: "",
            type: "color",
            link_status: false,
          },
          {
            id: 6,
            title: "Youtube",
            content_title: "",
            content: "",
            type: "yt_link",
            link_status: false,
          },
          {
            id: 7,
            title: "PDF",
            content_title: "",
            content: ["L"],
            type: "file",
            link_status: false,
          },
        ],
      },
      {
        tab_name: "Tab 2",
        tab_id: 8,
        status: true,
        tab_data: [
          {
            id: 8,
            title: "Heading",
            content: "Sri Vanamamalai divyadesam",
            type: "text",
            link_status: true,
          },
          {
            id: 9,
            title: "Sub Heading",
            content: "Sri varamangai nachiyar sametha sri deivanayaga perumal",
            type: "text",
            link_status: true,
          },
          {
            id: 10,
            title: "Brief Info",
            content:
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.",
            type: "text",
            link_status: true,
          },
          {
            id: 11,
            title: "Cover Image",
            content: ["media/img/rect.png"],
            type: "image",
            link_status: true,
          },
          {
            id: 12,
            title: "Background Color",
            content: "#fc8d0b",
            type: "color",
            link_status: true,
          },
          {
            id: 13,
            title: "Youtube",
            content_title: "",
            content: "",
            type: "yt_link",
            link_status: false,
          },
          {
            id: 14,
            title: "PDF",
            content_title: "",
            content: ["L"],
            type: "file",
            link_status: false,
          },
        ],
      },
    ],
  };

  const [pageData, setPageData] = useState();
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [activeInput, setActiveInput] = useState(0);
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    setPageData(pageData2);
    setImageArray(
      pageData?.all_tabs
        ?.filter((filteredData) => {
          if (activeTab?.includes(filteredData?.tab_name)) {
            return filteredData;
          }
        })
        ?.map((data, index) => {
          return data?.tab_data[3]?.content;
        })
    );
  }, []);

  useEffect(() => {
    console.log("######### PAGE DATA ##########", pageData);
  }, [pageData]);

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter pb-52">
      <Admin_header />

      <div className="px-16">
        <div className="flex justify-between items-center py-10  sticky  top-24 bg-[#FFF6EB]">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl uppercase font-bold ">
              {pageData?.pageName}
            </h1>
          </div>

          <div className="flex-1">
            <button
              //   onClick={() => {
              //     axios
              //       .put(VITE_BASE_LINK + "home_page", pageData)
              //       .then((response) => {
              //         console.log(response?.data);
              //       });
              //   }}
              className="p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95 block ml-auto"
            >
              Publish Content
            </button>
          </div>
        </div>

        <h2 className="text-center text-xl font-oswald ">
          {pageData?.subPageName}
        </h2>

        <div className=" mt-10 flex gap-5">
          {/* input fields */}
          <div className="w-full flex-1 ">
            <div className="w-full  pt-10  ">
              {pageData?.all_tabs
                ?.filter((filteredData) => {
                  if (activeTab === filteredData?.tab_name) {
                    return filteredData;
                  }
                })
                ?.map((data, index) => {
                  return (
                    <div key={index} className="">
                      {data?.tab_data?.map((tabDatas, tabIndex) => {
                        if (
                          tabDatas?.type === "text" &&
                          tabDatas?.link_status == true &&
                          tabDatas?.title !== "Brief Info"
                        ) {
                          return (
                            <div
                              key={tabIndex}
                              className="bg-white p-5 rounded-lg mb-5 border-[#E0E2E7] border"
                            >
                              <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                                <h1 className="font-semibold">
                                  {tabDatas?.title}
                                </h1>
                              </div>

                              <div className="mt-5">
                                <textarea
                                  type="text"
                                  rows={5}
                                  value={tabDatas?.content}
                                  onClick={() => setActiveInput(tabDatas?.id)}
                                  onChange={(e) => {
                                    const newState = data?.tab_data?.map(
                                      (obj) => {
                                        if (obj.id === activeInput) {
                                          return {
                                            ...obj,
                                            content: e?.target?.value,
                                          };
                                        }

                                        return obj;
                                      }
                                    );

                                    setPageData({
                                      ...pageData,
                                      all_tabs: pageData?.all_tabs?.map(
                                        (data) => {
                                          if (data?.tab_name === activeTab) {
                                            return {
                                              ...data,
                                              tab_data: newState,
                                            };
                                          }

                                          return data;
                                        }
                                      ),
                                    });
                                  }}
                                  className="w-full outline-none border-0"
                                />
                              </div>
                            </div>
                          );
                        }

                        // #############################
                        if (
                          tabDatas?.type === "text" &&
                          tabDatas?.link_status == true &&
                          tabDatas?.title === "Brief Info"
                        ) {
                          return (
                            <div
                              key={tabIndex}
                              className="bg-white p-5 rounded-lg mb-5  border border-red-500"
                            >
                              <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                                <h1 className="font-semibold">
                                  {tabDatas?.title}
                                </h1>
                              </div>

                              <div className="mt-5">
                                <textarea
                                  type="text"
                                  rows={5}
                                  value={tabDatas?.content}
                                  onClick={() => setActiveInput(tabDatas?.id)}
                                  onChange={(e) => {
                                    const newState = data?.tab_data?.map(
                                      (obj) => {
                                        if (obj.id === activeInput) {
                                          return {
                                            ...obj,
                                            content: e?.target?.value,
                                          };
                                        }

                                        return obj;
                                      }
                                    );

                                    setPageData({
                                      ...pageData,
                                      all_tabs: pageData?.all_tabs?.map(
                                        (data) => {
                                          if (data?.tab_name === activeTab) {
                                            return {
                                              ...data,
                                              tab_data: newState,
                                            };
                                          }

                                          return data;
                                        }
                                      ),
                                    });
                                  }}
                                  className="w-full outline-none border-0"
                                />
                              </div>
                            </div>
                          );
                        }

                        //   ###################################

                        if (tabDatas?.type === "image") {
                          return (
                            <>
                              {tabDatas?.link_status === true && (
                                <div className="my-10 ">
                                  <div className="flex items-center gap-5">
                                    <h1 className="font-semibold">
                                      Left Side Cover Image
                                    </h1>
                                  </div>

                                  <div className="mt-2 bg-white  border border-dashed rounded-lg h-full min-h-[200px] border-[#E0E2E7] relative ">
                                    <label
                                      // onClick={handleClick}
                                      htmlFor="upload-image"
                                      className="flex flex-col  justify-center items-center h-full min-h-[200px] border cursor-pointer group transition-all relative "
                                    >
                                      <div className=" flex-col justify-center items-center absolute bg-black bg-opacity-95 inset-0 hidden group-hover:flex transition-all duration-[1000] ">
                                        <img
                                          src={image_icon}
                                          alt="upload image"
                                          className="w-[50px] block "
                                        />
                                        <h1 className="font-semibold block">
                                          <span className="text-[#FF440D] ">
                                            Upload an image
                                          </span>
                                        </h1>
                                        <h2 className=" block text-white">
                                          PNG, JPG, GIF up to 5MB
                                        </h2>
                                      </div>

                                      <img
                                        src={
                                          VITE_BASE_LINK + tabDatas?.content[0]
                                        }
                                        alt=""
                                        className=""
                                      />
                                      <input
                                        // ref={hiddenFileInput}
                                        className="opacity-0 cursor-pointer inset-0 "
                                        id="upload-image"
                                        type="file"
                                        onClick={() =>
                                          setActiveInput(tabDatas?.id)
                                        }
                                        onChange={(e) => {
                                          let formdata = new FormData();
                                          formdata.append(
                                            "file",
                                            e?.target?.files[0]
                                          );
                                          formdata.append("index", 0);
                                          formdata.append(
                                            "image_array",
                                            imageArray
                                          );

                                          axios
                                            .post(
                                              VITE_BASE_LINK + "newImageUpload",
                                              formdata
                                            )
                                            .then((response) => {
                                              const newState =
                                                data?.tab_data?.map((obj) => {
                                                  if (obj.id === activeInput) {
                                                    return {
                                                      ...obj,
                                                      content:
                                                        response?.data
                                                          ?.image_array,
                                                    };
                                                  }

                                                  return obj;
                                                });

                                              setPageData({
                                                ...pageData,
                                                all_tabs:
                                                  pageData?.all_tabs?.map(
                                                    (data) => {
                                                      if (
                                                        data?.tab_name ===
                                                        activeTab
                                                      ) {
                                                        return {
                                                          ...data,
                                                          tab_data: newState,
                                                        };
                                                      }

                                                      return data;
                                                    }
                                                  ),
                                              });
                                            });
                                        }}
                                      />
                                    </label>
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        }
                      })}
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Tab name list */}
          <div className="w-[40%] min-w-[300px] sticky top-64">
            <h1 className="font-semibold">Tabs</h1>
            <div className="mt-5 space-y-5 max-h-[300px] px-2 overflow-y-scroll">
              {pageData?.all_tabs?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`  ${
                      activeTab === data?.tab_name
                        ? "bg-[#FC8D0B] text-white"
                        : "bg-white text-black"
                    } w-full  rounded-lg flex justify-between items-center`}
                  >
                    <button
                      onClick={() => setActiveTab(data?.tab_name)}
                      className={`p-3 rounded-lg font-medium    w-full text-left `}
                    >
                      {data?.tab_name === "Section 1"
                        ? "Hero Section"
                        : data?.tab_name === "Section 2"
                        ? "Banner Section"
                        : data?.tab_name}
                    </button>

                    {/* section type */}
                    {data?.section_type && (
                      <div className=" rounded-lg font-medium relative">
                        <div>
                          <button
                            onClick={() =>
                              setBannerOptionDropdown(!bannerOptionDropdown)
                            }
                            className=" p-3 rounded-lg"
                          >
                            {data?.section_type} \/
                          </button>
                        </div>
                        <div
                          className={` ${
                            bannerOptionDropdown ? "block" : "hidden"
                          } absolute top-[110%] right-0 rounded-lg bg-white  w-max text-left text-black`}
                        >
                          <button
                            onClick={() => {
                              setBannerOptionDropdown(!bannerOptionDropdown);
                            }}
                            className="block p-3 px-4 hover:bg-slate-100 transition-all w-full text-left"
                          >
                            Full Screen Image
                          </button>
                          <button
                            onClick={() => {
                              setBannerOptionDropdown(!bannerOptionDropdown);
                            }}
                            className="block p-3 px-4 hover:bg-slate-100 transition-all w-full text-left"
                          >
                            Content
                          </button>
                        </div>
                      </div>
                    )}

                    {/* hide section */}
                    <button
                      className=" h-full  "
                      onClick={async () => {
                        const hideSection = await axios
                          .put(VITE_BASE_LINK + "addSectionLandingPage", {
                            data: {
                              section_id: data?.section_id,
                              current_status: data?.status,
                            },
                          })
                          .then((response) => {
                            console.log("response of section edit:");
                            console.log(response);
                          });

                        const homePageData = await axios
                          .get(VITE_BASE_LINK + "home_page")
                          .then((response) => {
                            setActiveTab(response?.data?.all_tabs[0]?.tab_name);
                            setPageData(response?.data);
                          });
                      }}
                    >
                      {data?.tab_name !== "Section 1" && (
                        <div>
                          {activeTab === data?.tab_name ? (
                            <img
                              src={
                                data?.status
                                  ? eye_open_active
                                  : eye_close_active
                              }
                              alt="visible"
                              className="p-3 rounded-lg font-medium min-w-[40px] "
                            />
                          ) : (
                            <img
                              src={
                                data?.status
                                  ? eye_open_inactive
                                  : eye_close_inactive
                              }
                              alt="invisilble"
                              className="p-3 rounded-lg font-medium min-w-[40px] "
                            />
                          )}
                        </div>
                      )}
                    </button>

                    {/* delete section */}
                    {data?.tab_name === "Section 1" ||
                    data?.tab_name === "Section 2" ? (
                      ""
                    ) : (
                      <button
                        className=" h-full "
                        onClick={async () => {
                          const deleteSection = await axios
                            .delete(VITE_BASE_LINK + "addSectionLandingPage", {
                              data: {
                                section_id: data?.section_id,
                              },
                            })
                            .then((response) => {
                              console.log("response of section add:");
                              console.log(response);
                            });

                          const homePageData = await axios
                            .get(VITE_BASE_LINK + "home_page")
                            .then((response) => {
                              setActiveTab(
                                response?.data?.all_tabs[0]?.tab_name
                              );
                              setPageData(response?.data);
                            });
                        }}
                      >
                        {activeTab === data?.tab_name ? (
                          <img
                            src={delete_icon_active}
                            alt="delete"
                            className="p-3 rounded-lg font-medium min-w-[40px] "
                          />
                        ) : (
                          <img
                            src={delete_icon}
                            alt="delete"
                            className="p-3 rounded-lg font-medium min-w-[40px] "
                          />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <h1 className="font-semibold">Add Section</h1>
              <div className="flex  gap-5 mt-5">
                <button
                  onClick={async () => {
                    // let formdata = new FormData();
                    // formdata?.append(
                    //   "layout_type",
                    //   newSectionActiveLayout?.backend_name
                    // );
                    const addNewSection = await axios
                      .post(VITE_BASE_LINK + "addSectionLandingPage", formdata)
                      .then((response) => {
                        console.log("response of section add:");
                        console.log(response);
                      });

                    const homePageData = await axios
                      .get(VITE_BASE_LINK + "home_page")
                      .then((response) => {
                        setActiveTab(
                          response?.data?.all_tabs[
                            response?.data?.all_tabs?.length - 1
                          ]?.tab_name
                        );
                        setPageData(response?.data);
                      });
                  }}
                  className="p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubPageLayout1;
