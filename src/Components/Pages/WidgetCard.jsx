import React from "react";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";

const WidgetCard = () => {
  return (
    <div className="lg:flex-wrap">
      <div className="bg-dark w-80 h-56 rounded-xl text-white lg:w-screen lg:mb-5 ">
        <SignalWifi4BarIcon className="m-5" style={{ color: "white" }} />
        <p className="font-bold text-lg ml-4 mt-5">4562 1122 4594 7852</p>
        <div className="flex flex-row ml-4 mt-10">
          <div className="mr-6">
            <p className="text-grey">Card Holder</p>
            <p className="font-bold">Jack Peterson</p>
          </div>
          <div>
            <p className="text-grey">Expires</p>
            <p className="font-bold">11/22</p>
          </div>
          <div className="flex items-center ml-auto">
            <img
              className="w-10 h-7 lg:w-24 lg:h-16 mr-5"
              src="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/mastercard.27fca3e7637a9458fb64.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
