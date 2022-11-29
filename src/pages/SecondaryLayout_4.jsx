import React, { useEffect, useState } from "react";
// routing
import { Link, useParams } from "react-router-dom";
// components
import Header_2 from "../components/globalComponents/Header_2";
// assets
import frame from "../assets/img/secondaryLayoutPage/frame.png";
import leftArrow from "../assets/img/galleryPage/left_button.svg";
import rightArrow from "../assets/img/galleryPage/right_button.svg";
import axios from "axios";

const SecondaryLayout_4 = () => {
  const [pageData, setPageData] = useState(null);
  const parameters = useParams();

  useEffect(() => {
    axios
      .post(import.meta.env.VITE_BASE_LINK + "sub_album_page", {
        sub_album_name: parameters?.year,
        album_id: parameters?.album,
      })
      .then(function (response) {
        console.log("albumdetails :", response?.data);
        setPageData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [parameters]);

  // const pageData = {
  //   banner: {
  //     heading: "Gallery ",
  //     image: "",
  //   },

  //   album_banner: {
  //     p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus laoreet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus laoreet pretium. ",

  //     image: "",
  //   },

  //   title: "2012",

  //   content: [
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },

  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //   ],
  // };

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

      {/* title */}
      <h1 className="uppercase text-xl md:text-2xl xl:text-3xl w-[90%] mx-auto pt-10">
        {pageData?.title}
      </h1>

      {/* album banner */}

      <div className="flex my-10 mx-auto w-[90%] ">
        <div className="flex justify-center items-center ">
          <img src={leftArrow} alt="previous" />
        </div>
        <div className="flex-1">
          <div className="max-w-[600px] mx-auto">
            <div className="h-[350px] bg-gray-200 "></div>
            <p className="pt-10 font-caladea"> {pageData?.album_banner?.p} </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={rightArrow} alt="next" />
        </div>
      </div>

      {/* content */}
      <div>
        <div className="    w-[90%] mx-auto pb-10 ">
          {/* content flex */}

          <div className="grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-5 justify-between w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8  xl:gap-10 2xl:gap-12 py-10 ">
            {pageData?.content?.map((data, index) => {
              return (
                <div key={index} className="flex-1 mb-2">
                  <div className="aspect-square  bg-[#D9D9D9]"></div>
                  <h1 className="text-center pt-2 text-lg  md:text-xl xl:text-2xl">
                    {data?.sub_heading}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryLayout_4;
