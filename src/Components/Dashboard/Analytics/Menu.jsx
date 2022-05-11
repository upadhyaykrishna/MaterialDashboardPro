import React, {useState} from "react";
import Accordion from "./Accordion";
import {
  accordionData,
  accordionDocsData,
  accordionPagesData,
} from "./AccordionData";
import AccordionDocs from "./AccordionDocs";
import AccordionPages from "./AccordionPages";
import logo from "../../../assets/logo.png"

function Menu() {
  return (
    <div className="xl:hidden">
      <div className=" fixed h-[39rem] mt-4 ml-4 rounded-l-xl bg-dark2 text-white overflow-x-hidden w-[16.5rem]">
        <img src={logo} alt="" className="w-8 h-8 mt-5 ml-8"/>
        <h4 className="absolute top-6 right-0 font-semibold ">
          Material Dashboard PRO
        </h4>
        <div className="w-48 h-[1px] bg-[#5C5C62] absolute top-20 ml-7 ease-in-out" />
        <div className=" absolute top-20 w-60 m-auto ">
          {accordionData.map(({ icon, title, list1, list2, list3 }) => {
            return (
              <Accordion
                icon= {icon}
                title={title}
                list1={list1}
                list2={list2}
                list3={list3}
              />
            );
          })}
          <h4 className="font-semibold absolute left-0 ml-5 text-sm">PAGES</h4>
          <div className="relative top-6">
            {accordionPagesData.map(
              ({icon,
                title,
                list1,
                list2,
                list3,
                list4,
                list5,
                list6,
                list7,
                list8,
                list9,
              }) => {
                return (
                  <AccordionPages
                    icon={icon}
                    title={title}
                    list1={list1}
                    list2={list2}
                    list3={list3}
                    list4={list4}
                    list5={list5}
                    list6={list6}
                    list7={list7}
                    list8={list8}
                    list9={list9}
                  />
                );
              }
            )}
          </div>
          <div className="relative top-6">
            <div className="w-48 h-[1px] bg-line2 ml-7 mt-3" />
            <h4 className="font-semibold absolute left-0 ml-5 mt-3 text-sm">DOCS</h4>
            <div className="relative top-7">
              {accordionDocsData.map(
                ({
                  icon,
                  title,
                  list1,
                  list2,
                  list3,
                  list4,
                  list5,
                  list6,
                  list7,
                  list8,
                  list9,
                  list10,
                  list11,
                  list12,
                  list13,
                  list14,
                  list15,
                }) => {
                  return (
                    <AccordionDocs
                    icon={icon}
                      title={title}
                      list1={list1}
                      list2={list2}
                      list3={list3}
                      list4={list4}
                      list5={list5}
                      list6={list6}
                      list7={list7}
                      list8={list8}
                      list9={list9}
                      list10={list10}
                      list11={list11}
                      list12={list12}
                      list13={list13}
                      list14={list14}
                      list15={list15}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
