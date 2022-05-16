import React from "react";
import Data from "./Data";
import Footer from "./Footer";
import Graphs from "./Graphs";
import Location from "./Location";
import Menu from "./Menu";
import Nav from "./Nav";
import Sales from "./Sales";

const Dashboard = () => {
  return (
    <>
      <Menu />
      <div className="absolute left-[19rem] w-[64rem] grid-rows-6 xl:left-5 xl:pr-5 xl:w-fit">
       <Nav />
        <Sales />
        <Graphs />
        <Data />
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;