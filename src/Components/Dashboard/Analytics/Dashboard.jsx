import React from 'react';
import Data from "./Data";
import Footer from "./Footer";
import Graphs from "./Graphs";
import Location from "./Location";
import Menu from "./Menu";
import Nav from "./Nav";
import Sales from "./Sales";

const Dashboard = () => {
  return (
    <div>
      <Menu />
      <Nav />
      <Sales/>
      <Graphs/>
      <Data/>
      <Location/>
      <Footer />
    </div>
  )
}

export default Dashboard