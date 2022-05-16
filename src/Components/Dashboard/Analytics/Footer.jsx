import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full text-heading h-10 grid grid-cols-3 grid-rows-1 lg:grid-rows-2 lg:grid-cols-1 lg:text-center lg:gap-y-5">
        <div className="">
        <p>© 2022, made with by <span className="font-semibold text-grey2">Creative Tim</span> for a better </p>
        </div>
        <div className="grid grid-cols-4 col-span-2 ml-auto gap-10 lg:ml-0">
            <div>Creative TIm</div>
            <div>About Us</div>
            <div>Blog</div>
            <div>License</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
