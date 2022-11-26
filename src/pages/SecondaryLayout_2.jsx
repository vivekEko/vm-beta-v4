import React, { useState } from "react";
import Header_2 from "../components/globalComponents/Header_2";
// assets
import frame from "../assets/img/secondaryLayoutPage/frame.png";
import { Link } from "react-router-dom";

const SecondaryLayout_2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const pageData = {
    banner: {
      heading: "Gallery ",
      image: "",
    },

    content: [
      {
        title: "Album 1",
        content_data: [
          {
            year: "2000",
            image: "",
            link: "/album_details",
          },

          {
            year: "2001",
            image: "",
            link: "/album_details",
          },
          {
            year: "2002",
            image: "",
            link: "/album_details",
          },
          {
            year: "2003",
            image: "",
            link: "/album_details",
          },
        ],
      },

      {
        title: "Album 2",
        content_data: [
          {
            year: "2000",
            image: "",
            link: "/album_details",
          },

          {
            year: "2001",
            image: "",
            link: "/album_details",
          },
          {
            year: "2002",
            image: "",
            link: "/album_details",
          },
          {
            year: "2003",
            image: "",
            link: "/album_details",
          },
        ],
      },

      {
        title: "Album 3",
        content_data: [
          {
            year: "2000",
            image: "",
            link: "/album_details",
          },

          {
            year: "2001",
            image: "",
            link: "/album_details",
          },
          {
            year: "2002",
            image: "",
            link: "/album_details",
          },
          {
            year: "2003",
            image: "",
            link: "/album_details",
          },
        ],
      },

      {
        title: "Album 4",
        content_data: [
          {
            year: "2000",
            image: "",
            link: "/album_details",
          },

          {
            year: "2001",
            image: "",
            link: "/album_details",
          },
          {
            year: "2002",
            image: "",
            link: "/album_details",
          },
          {
            year: "2003",
            image: "",
            link: "/album_details",
          },
        ],
      },
    ],
  };

  return (
    <section>
      {/* banner */}
      <div className="bg-[#D9D9D9] ">
        <Header_2 />

        <div className="w-[90%] mx-auto">
          <h1 className="pb-5 md:pb-8  pt-60  uppercase text-3xl md:text-4xl xl:text-5xl lg:w-[70%] xl:w-[60%] 2xl:w-[50%]   font-bold text-[#292929] ">
            {pageData?.banner?.heading}
          </h1>
        </div>
      </div>

      {/* content */}
      <div>
        <div className="  pt-10 md:pt-20 w-[90%] mx-auto ">
          {/* content flex */}
          {pageData?.content?.map((mainData, mainIndex) => {
            return (
              <div
                key={mainIndex}
                className="py-10 border-y-[#0000007a] border-t"
              >
                <div className="flex justify-between items-center">
                  <h1 className="uppercase text-xl md:text-2xl xl:text-3xl">
                    {mainData?.title}
                  </h1>

                  <Link to="/albums_expanded">
                    <button className=" p-2 px-4 md:p-3 md:px-10  text-base md:text-lg bg-[#FC8D0B] text-white w-fit  active:scale-95 transition-all">
                      View All
                    </button>
                  </Link>
                </div>

                <div className="flex justify-between w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8  xl:gap-10 2xl:gap-12 py-10">
                  {mainData?.content_data?.map((data, index) => {
                    return (
                      <Link className="flex-1" key={index} to={data?.link}>
                        <div>
                          <div className="aspect-square  bg-[#D9D9D9]"></div>
                          <h1 className="text-center pt-2 text-xl md:text-2xl xl:text-3xl">
                            {data?.year}
                          </h1>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondaryLayout_2;
