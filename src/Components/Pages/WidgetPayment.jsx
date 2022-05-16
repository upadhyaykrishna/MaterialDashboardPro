import React from "react";

const WidgetPayment = (props) => {
  return (
    <>
      <div className="bg-white w-48 h-56 mr-6 rounded-xl grid justify-items-center max-w-lg md:mb-5 sm:w-screen md:flex-grow">
        <div className="bg-blue-500 w-16 h-16 rounded-lg m-4 flex justify-center items-center">
          {props.icon}
        </div>
        <div className="flex justify-center flex-col text-center lg:text-sm">
          <p className="text-black1 font-bold">{props.heading}</p>
          <p className="text-heading  m-1">{props.subHeading}</p>
        </div>
        <hr className="mx-10 my-2" />
        <p className="text-black1 text-lg font-bold mb-1">{props.amount}</p>
      </div>
    </>
  );
};

export default WidgetPayment;
