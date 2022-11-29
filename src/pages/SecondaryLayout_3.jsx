import React from "react";
import Header_2 from "../components/globalComponents/Header_2";
// assets
import frame from "../assets/img/secondaryLayoutPage/frame.png";
import { Link } from "react-router-dom";

const SecondaryLayout_3 = () => {
  const pageData = {
    banner: {
      heading: "Gallery ",
      image: "",
    },
    title: "ALBUM 1",
    content: [
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },

      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
      },
      {
        sub_heading: "1991",
        image: "",
        link: "/album_details",
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
        <div className="  pt-10 md:pt-20 w-[90%] mx-auto pb-10 ">
          {/* content flex */}

          <div className="py-10 border-b-[#0000007a] border-b">
            <div className="flex justify-between items-center">
              <h1 className="uppercase text-xl md:text-2xl xl:text-3xl">
                {pageData?.title}
              </h1>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-5 justify-between w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8  xl:gap-10 2xl:gap-12 py-10 ">
              {pageData?.content?.map((data, index) => {
                return (
                  <Link key={index} to={data?.link}>
                    <div className="flex-1 mb-2">
                      <div className="aspect-square  bg-[#D9D9D9]"></div>
                      <h1 className="text-center pt-2 text-lg  md:text-xl xl:text-2xl">
                        {data?.sub_heading}
                      </h1>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryLayout_3;
