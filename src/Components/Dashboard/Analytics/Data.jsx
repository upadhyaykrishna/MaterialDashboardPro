import React from "react";
import WeekendIcon from "@mui/icons-material/Weekend";
import BarChartIcon from "@mui/icons-material/BarChart";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const data = [
  {
    icon: <WeekendIcon style={{ color: "white" }} />,
    heading: "Bookings",
    record: "281",
    text1: "+55%",
    text2: "than lask week",
    bg: "bg-dark",
  },
  {
    icon: <BarChartIcon style={{ color: "white" }} />,
    heading: "Today's Users",
    record: "2,300",
    text1: "+3%",
    text2: "than last month",
    bg: "bg-blue-500",
  },
  {
    icon: <WeekendIcon style={{ color: "white" }} />,
    heading: "Revenue",
    record: "2,300",
    text1: "+3%",
    text2: "than last month",
    bg: "bg-green-500",
  },
  {
    icon: <PersonAddIcon style={{ color: "white" }} />,
    heading: "Followers",
    record: "+91",
    text1: "  ",
    text2: "Just updated",
    bg: "bg-pink-500",
  },
];

function Data() {
  return (
    <>
      <div className="absolute left-[19rem] top-[55rem] flex flex-row flex-wrap">
        {data.map((element) => {
          return (
            <div className="bg-white w-60 h-36 rounded-lg mr-5">
              <div className="grid grid-cols-2 mb-8">
                <div
                  className={`w-16 h-16 ${element.bg} relative left-5 -top-5 rounded-lg flex justify-center items-center`}
                >
                  {element.icon}
                </div>

                <div className="mr-5 mt-3">
                  <p className="text-heading text-right">{element.heading}</p>
                  <p className="text-grey2 font-bold text-2xl text-right">
                    {element.record}
                  </p>
                </div>
              </div>

              <div className="w-44 h-[1px] bg-line   mt-[5.5rem] ml-7 absolute" />
              <p className="mt-3 ml-3 text-heading">
                <span className="text-green-600 font-bold ">
                  {element.text1}
                </span>{" "}
                {element.text2}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;
