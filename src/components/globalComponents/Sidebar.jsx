import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import currentPathAtom from "../../recoil/helpers/currentPathAtom";
import sidebarStatusAtom from "../../recoil/sidebar/sidebarStatusAtom";

// assets
import down_arrow from "../../assets/img/sidebar/down-arrow-icon.svg";

const Sidebar = () => {
  // Global variables
  const [currentPath] = useRecoilState(currentPathAtom);
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);

  // local variables
  const [openedLink, setOpenedLink] = useState(null);
  const sidebarData = [
    {
      main_link: {
        link_name: "Home",
        link_path: "/",
      },

      sub_links: [
        {
          sub_link_name: "Level 1",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 2",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 3",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 4",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 5",
          sub_link_path: "/",
        },
      ],
    },
    {
      main_link: {
        link_name: "layout 1",
        link_path: "/sample_page",
      },

      sub_links: [
        {
          sub_link_name: "Level 1",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 2",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 3",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 4",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 5",
          sub_link_path: "/",
        },
      ],
    },
    {
      main_link: {
        link_name: "layout 2",
        link_path: "/albums",
      },

      sub_links: [
        {
          sub_link_name: "Level 1",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 2",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 3",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 4",
          sub_link_path: "/",
        },
        {
          sub_link_name: "Level 5",
          sub_link_path: "/",
        },
      ],
    },
  ];
  // Detect outside click and close sidebar
  window.addEventListener("click", (event) => {
    const sidebar = document?.getElementById("sidebar");

    if (sidebar) {
      if (!sidebar?.contains(event?.target)) {
        setSidebarStatus(false);
      }
    }
  });

  return (
    <div
      id="sidebar"
      className={` ${
        sidebarStatus
          ? "w-[100%] ease-in"
          : currentPath?.pathname !== "/"
          ? "w-[0%] ease-out   min-w-[0px] md:w-[0.1%] md:min-w-[60px]"
          : "w-[0%] ease-out  min-w-[0px]"
      } h-screen bg-[#FC8D0B] fixed top-0 bottom-0  max-w-[300px] transition-all duration-300  shadow-2xl  `}
    >
      <div className=" overflow-x-hidden">
        {/* hamburger */}
        <div>
          <div
            onClick={() => setSidebarStatus(!sidebarStatus)}
            className={` ${
              currentPath?.pathname === "/" ? "hidden" : "flex"
            } w-[30px] h-[25px] mt-5 flex-col justify-between gap-2 mr-auto cursor-pointer ml-2 `}
          >
            <div
              className={` ${
                sidebarStatus ? "rotate-45 translate-y-3 " : "rotate-0"
              } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
            ></div>
            <div
              className={` ${
                sidebarStatus ? "hidden" : "block"
              } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
            ></div>
            <div
              className={` ${
                sidebarStatus ? "-rotate-45 -translate-y-2" : "rotate-0"
              } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
            ></div>
          </div>

          <button
            className={` ${
              currentPath?.pathname === "/"
                ? "fixed top-9 left-2 md:left-5 lg:left-8 xl:left-10 text-xl  font-bold "
                : "hidden"
            } 
          
          ${sidebarStatus ? "text-white" : "text-[#630000]"}

          `}
            onClick={() => setSidebarStatus(!sidebarStatus)}
          >
            MENU
          </button>
        </div>

        <button
          className={` ${
            currentPath?.pathname !== "/"
              ? "fixed top-0 left-0 md:left-5 lg:left-8 xl:left-10 text-xl  font-bold md:hidden "
              : "hidden"
          } 


          
          `}
          onClick={() => setSidebarStatus(!sidebarStatus)}
        >
          <div className="w-[30px] h-[25px] mt-5 flex flex-col justify-between gap-2 mr-auto cursor-pointer ml-2 ">
            <div
              className={` ${
                sidebarStatus ? "rotate-45 translate-y-3 " : "rotate-0"
              } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
            ></div>
            <div
              className={` ${
                sidebarStatus ? "hidden" : "block"
              } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
            ></div>
            <div
              className={` ${
                sidebarStatus ? "-rotate-45 -translate-y-2" : "rotate-0"
              } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
            ></div>
          </div>
        </button>

        <div
          className={` ${
            currentPath?.pathname === "/" ? "mt-[7.5rem]" : "mt-20"
          } min-w-[200px] `}
        >
          {/* sidebar links container */}
          {sidebarData?.map((data, index) => {
            return (
              <div
                key={index}
                className={` ${
                  openedLink === data?.main_link?.link_name
                    ? "bg-[#FF5A29] bg-opacity-[33%]"
                    : ""
                }  pl-2 overflow-y-hidden`}
              >
                <div className="flex justify-between items-center ">
                  {/* main links */}
                  <NavLink
                    to={data?.main_link?.link_path}
                    className={({ isActive }) =>
                      isActive ? "opacity-100" : "opacity-50"
                    }
                  >
                    <button
                      onClick={() => setSidebarStatus(false)}
                      className="flex  flex-[0.9] gap-5 py-5 items-center text-white op"
                    >
                      <div className="bg-white w-[40px] aspect-square rounded-full ">
                        {" "}
                        {/* icon here */}{" "}
                      </div>
                      <div>
                        <h1 className="text-xl uppercase">
                          {data?.main_link?.link_name}
                        </h1>
                      </div>
                    </button>
                  </NavLink>

                  <div
                    onClick={() => {
                      if (openedLink === data?.main_link?.link_name) {
                        setOpenedLink(null);
                      } else {
                        setOpenedLink(data?.main_link?.link_name);
                      }
                    }}
                    className="pr-5  flex-[0.1]  min-w-[50px] cursor-pointer"
                  >
                    <img
                      src={down_arrow}
                      alt="..."
                      className={` ${
                        openedLink === data?.main_link?.link_name
                          ? "rotate-0"
                          : "-rotate-90"
                      } w-[15px]  transition-all h-full`}
                    />
                  </div>
                </div>

                <div
                  className={` ${
                    openedLink === data?.main_link?.link_name
                      ? "max-h-[300px] ease-in duration-300 "
                      : "max-h-0 ease-out overflow-y-hidden duration-300"
                  } transition-all text-white   `}
                >
                  {data?.sub_links?.map((sub_data, sub_index) => {
                    return (
                      <button key={sub_index} className="block">
                        <h1 className="text-white py-3 pl-16 uppercase">
                          {sub_data?.sub_link_name}
                        </h1>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
