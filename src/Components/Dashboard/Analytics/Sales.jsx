import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import img1 from "../../../assets/download (1).png";
import img2 from "../../../assets/download (2).png";
import img3 from "../../../assets/download (3).png";
import img4 from "../../../assets/download (4).png";

const salesData = [
  {
    img: img1,
    details1: "United State",
    details2: "2500",
    details3: "$230,900",
    details4: "29.9%",
  },
  {
    img: img2,
    details1: "Germany",
    details2: "3.900",
    details3: "$440,000",
    details4: "40.22%",
  },
  {
    img: img3,
    details1: "Great Britain",
    details2: "1.400",
    details3: "$190,700",
    details4: "23.44%",
  },
  {
    img: img4,
    details1: "Brasil",
    details2: "562",
    details3: "$143,960",
    details4: "32.14%",
  },
];

function Sales() {
  return (
    <>
      <div className="h-[20rem] bg-white rounded-lg md:h-[40rem] md:pr-5">
        <div className="flex flex-row">
          <div className="w-16 h-16 bg-green-600 rounded-xl relative left-5 -top-5">
            <LanguageIcon
              className="absolute top-5 left-5"
              style={{ color: "white" }}
            />
          </div>
          <p className="pt-4 ml-10 font-bold text-grey2">Sales by Country</p>
        </div>

        {salesData.map((element) => {
          return (
            <div className="mb-2">
              <div className="grid grid-cols-5 w-1/2 md:w-full">
                <img
                  src={element.img}
                  alt=""
                  className="top-1/3 self-center justify-center ml-5"
                />
                <div className="-ml-6 w-32">
                  <p className="text-heading font-bold text-sm">Country:</p>
                  <p>{element.details1}</p>
                </div>
                <div className="ml-5 ">
                  <p className="text-heading font-bold text-sm">Sales:</p>
                  <p>{element.details2}</p>
                </div>
                <div className="ml-5 text-center">
                  <p className="text-heading font-bold text-sm">Value:</p>
                  <p>{element.details3}</p>
                </div>
                <div className="ml-14 text-center">
                  <p className="text-heading font-bold text-sm">Bounce:</p>
                  <p>{element.details4}</p>
                </div>
              </div>
              <hr className="w-6/12 ml-10 my-2 md:w-10/12 md:mr-10" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Sales;
