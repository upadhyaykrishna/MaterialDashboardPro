import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Nav = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className=" w-full my-7  flex items-center rounded-lg  xl:left-5 sm:grid sm:grid-rows-2 sm:grid-cols-6">
        <div className="flex flex-row order-1 sm:col-span-6">
          <div className="ml-4">
            <p className="mt-3 text-grey2">
              {" "}
              <HomeIcon fontSize="inherit" /> /{" "}
              <span className="text-grey">Dashboards </span>/ Analytics{" "}
            </p>
            <p className="font-bold text-grey2 mb-2">Analytics</p>
          </div>
        </div>
        <MenuIcon className="mx-10 order-1 xl:order-8 xl:m-2 sm:ml-auto" />

        <input
          className="h-11 ml-auto order-1 bg-transparent border border-slate-300 placeholder:text-base rounded-lg focus:outline-none focus:border-2 focus:border-blue-500 sm:col-span-2"
          type={"text"}
          value={name}
          placeholder="   Search here"
          onChange={(e) => setName(e.target.value)}
        />
        <AccountCircleIcon className="m-2 order-1 xl:order-7 sm:ml-auto" color="action" />
        <SettingsIcon className="m-2 order-1 xl:order-9 sm:ml-auto" color="action" />
        <NotificationsIcon className="m-2 order-1 xl:order-10 sm:ml-auto" color="action" />
      </div>
    </>
  );
};

export default Nav;
