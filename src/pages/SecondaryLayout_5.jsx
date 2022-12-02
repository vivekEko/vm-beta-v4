import React, { useEffect, useState } from "react";
// routing
import { Link, useParams } from "react-router-dom";
// components
import Header_2 from "../components/globalComponents/Header_2";
// assets

// routing
import axios from "axios";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const SecondaryLayout_5 = () => {
  const [pageData, setPageData] = useState(null);
  // const parameters = useParams();

  useEffect(() => {
    axios
      .get(VITE_BASE_LINK + "jeeyars")
      .then(function (response) {
        setPageData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const pageData = {
  //   title: "Jeeyar Paramapara",
  //   jeeyars: [
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //     {
  //       image: "",
  //       name: "Sri madhurakavi vAnamAmalai jEEyar swamy",
  //       prefix: "AD",
  //       start_date: "2014",
  //       end_date: "2020",
  //       jeeyar_no: "30",
  //       jeeyar_no_suffix: "th",
  //     },
  //   ],
  // };

  return (
    <section className="">
      {/* banner */}
      <div className=" ">
        <Header_2 />
      </div>

      {/* title */}
      <h1 className=" uppercase text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl w-[90%] mx-auto mt-20 text-center ">
        {pageData?.title}
      </h1>

      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-10 gap-y-20 w-[90%] mx-auto mt-32 pb-20">
        {pageData?.jeeyars?.map((data, index) => {
          return (
            <div key={index} className="bg-[#FC8D0B] p-5 text-white">
              <div className="bg-[#FFE8B1] aspect-video w-full"></div>
              <div>
                <h1 className="text-lg uppercase py-2">{data?.name}</h1>
                <div className="flex justify-between items-end ">
                  <h2 className="text-2xl">
                    {data?.prefix +
                      " " +
                      data?.start_date +
                      " to " +
                      data?.end_date}
                  </h2>

                  <h1 className="text-2xl">
                    {data?.jeeyar_no}{" "}
                    <span className="text-sm uppercase">
                      {data?.jeeyar_no_suffix}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SecondaryLayout_5;
