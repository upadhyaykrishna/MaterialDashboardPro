import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-[64rem] absolute left-[19rem] top-[92rem] flex flex-row text-heading h-10">
        <p>© 2022, made with by <span className="font-semibold text-grey2">Creative Tim</span> for a better </p>
        <div className="flex flex-row absolute right-0">
            <div className="ml-10">Creative TIm</div>
            <div className="ml-10">About Us</div>
            <div className="ml-10">Blog</div>
            <div className="ml-10 mr-5">License</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
