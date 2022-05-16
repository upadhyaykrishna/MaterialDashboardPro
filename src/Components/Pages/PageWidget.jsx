import React from "react";
import Menu from "../Dashboard/Analytics/Menu";
import Nav from "../Dashboard/Analytics/Nav";
import upcomingEvents from "./data";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Battery from "./Battery";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import WidgetPayment from "./WidgetPayment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyFrancIcon from "@mui/icons-material/CurrencyFranc";
import WidgetCard from "./WidgetCard";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import Categories from "./Categories";
import WidgetOrdersOverview from "./WidgetOrdersOverview";

const PageWidget = () => {
  return (
    <div>
      <Menu />
      <Nav />
      <div className="absolute left-[19rem] max-w-full top-32 xl:left-5 ">
        <div className="flex flex-row mb-5 xl:w-full lg:flex-wrap">
          {/* 1st row */}
          {/* Box1 */}
          <div className="w-80 h-72 bg-white rounded-xl mr-5 lg:mb-5 sm:w-full">
            <p className="text-black1 font-bold pt-5 pl-5">Upcoming events</p>
            <p className="mt-1 ml-5 text-heading">Joined</p>
            {upcomingEvents.map((element) => {
              return (
                <div className="flex flex-row my-5">
                  <div className="bg-black w-12 h-12 rounded-lg mx-5 flex justify-center items-center">
                    {element.icon}
                  </div>
                  <div>
                    <p className="text-black1 font-semibold">
                      {element.eventName}
                    </p>
                    <p className="text-heading">{element.eventDate}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Box2 */}
          <div className="bg-white h-72 rounded-xl w-2/3 lg:w-full lg:mr-5">
            <div className="flex flex-row justify-between">
              <div className="m-5 flex flex-row">
                <div className="bg-blue-500 w-12 h-12 rounded-lg mr-5 flex justify-center items-center">
                  <DateRangeIcon style={{ color: "white" }} />
                </div>
                <div>
                  <p className="text-heading ">Tasks</p>
                  <p className="text-black1 font-bold">480</p>
                </div>
              </div>
              <div className="m-5 w-40">
                <span className="text-sm">60%</span>
                <div className="bg-blue-500 w-40 h-1" />
              </div>
            </div>
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex flow-row w-[64rem] max-w-full xl:w-full lg:flex-wrap">
          <div>
            <Battery
              icon={<BatteryChargingFullIcon style={{ color: "white" }} />}
              name="Battery Health"
              number="99 %"
            />
            <Battery
              icon={<VolumeDownIcon style={{ color: "white" }} />}
              name="Music Volume"
              number="15/100"
            />
          </div>
          <div className="flex flex-row sm:flex-wrap">
            <WidgetPayment
              icon={<AccountBalanceIcon style={{ color: "white" }} />}
              heading="Salary"
              subHeading="Belong Interactive"
              amount="+$2000"
            />
            <WidgetPayment
              icon={<CurrencyFrancIcon style={{ color: "white" }} />}
              heading="Paypal"
              subHeading="Freelance Payment"
              amount="$455.00"
            />
          </div>
          <div className="">
            <WidgetCard />
          </div>
        </div>

        {/* 3rd row */}
        <div className="mb-6 flex-row flex lg:flex-wrap w-">
          <div className="bg-white w-64 h-44 rounded-xl mr-6 lg:w-5/12 lg:flex-grow md:w-full">
            <div className="flex flex-row justify-between">
              <p className="text-heading p-5">Full Body</p>
              <div className="bg-blue-300 w-24 h-6 flex justify-center items-center rounded-lg m-5">
                <p className="text-xs font-bold text-blue-600">MODERATE</p>
              </div>
            </div>
            <p className="text-heading mx-5">
              What matters is the people who are sparked by it. And the people
              who are liked.
            </p>
          </div>

          <div className="bg-white w-36 h-44 mr-6 rounded-xl lg:w-5/12 lg:mb-5 lg:flex-grow md:mt-5">
            <div className="mt-6">
              <span className="text-heading mx-6">Off</span>
            </div>
            <div className="flex flex-col mt-8 mx-7">
              <LightbulbIcon
                fontSize="large"
                style={{ color: "darkslategray" }}
              />
              <span className="text-heading my-4">Lights</span>
            </div>
          </div>

          <div className="bg-white w-60 h-40 rounded-xl pt-3 mr-6 lg:flex-wrap lg:w-full lg:mb-5">
            <span className="text-heading font-bold ml-4">Calories</span>
            <p className="text-black1 font-bold text-lg ml-4">
              97{" "}
              <span className="text-sm text-green-500 font-extrabold">+5%</span>
            </p>
          </div>

          <div className="bg-white w-36 h-40 rounded-xl mr-6 lg:w-5/12 lg:flex-grow md:w-full">
            <div className="bg-blue-500 w-12 h-12 rounded-lg m-5 flex justify-center items-center">
              <ShortcutIcon style={{ color: "white" }} />
            </div>
            <p className="text-black1 text-lg font-bold ml-5">
              754 <span className="text-heading">m</span>
            </p>
            <p className="text-heading font-semibold ml-5">New York City</p>
          </div>

          <div className="bg-white w-36 h-40 rounded-xl pt-5 lg:w-5/12 lg:flex-grow md:mt-5">
            <span className="text-heading ml-5">Steps</span>
            <p className="text-3xl font-bold text-black1 ml-5 my-5">11.4K</p>
            <div className="ml-5 w-14 h-5 bg-green-300 flex justify-center items-center rounded-md">
              <p className="text-xs font-semibold text-green-700">+4.3%</p>
            </div>
          </div>
        </div>

        {/* 4th row */}
        <div className="mb-6 flex flow-row lg:flex-wrap">
          <div className="bg-white w-[27rem] h-[33rem] pt-4 rounded-xl mr-6 lg:w-full lg:flex-wrap lg:mb-6">
            <p className="text-black1 font-bold ml-4">Calendar</p>
            <p className="text-heading ml-4">Monday, 2021</p>
          </div>

          <div className="lg:flex-wrap lg:w-full lg:mr-5">
            <div className="bg-white w-60 h-[22rem] rounded-xl pt-4 mr-6 mb-5 lg:flex-wrap lg:w-full">
              <p className="text-black1 font-bold ml-4 mb-5">Categories</p>
              <Categories />
            </div>

            <div className="bg-dark w-60 h-40 rounded-xl text-white lg:w-full lg:flex-grow lg:mb-5">
              <p className="text-lg font-bold pt-6 ml-5">Some kind of blues</p>
              <p className="ml-5">Deftones</p>
            </div>
          </div>

            <WidgetOrdersOverview />
        </div>

      </div>
    </div>
  );
};

export default PageWidget;
