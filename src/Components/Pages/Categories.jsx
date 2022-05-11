import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const listOfCategory = [
  {
    icon: <LaunchIcon style={{ color: "white" }} fontSize="inherit" />,
    categoryName: 'Devices',
    text1: '250 in stock,',
    text2: '346+ sold'
  },
  {
    icon: <BookOnlineIcon style={{ color: "white" }} fontSize="inherit" />,
    categoryName: 'Tickets',
    text1: '123 closed, ',
    text2: '15 open'
  },
  {
    icon: <PriorityHighIcon style={{ color: "white" }} fontSize="inherit" />,
    categoryName: 'Error Logs',
    text1: '1 is active, ',
    text2: '40 closed'
  },
  {
    icon: <InsertEmoticonIcon style={{ color: "white" }} fontSize="inherit" />,
    categoryName: 'Happy users',
    text1: '',
    text2: '+430'
  },
];

const Categories = () => {
  return (
    <>
      {listOfCategory.map((element) => {
          return (
        <div className="grid grid-cols-4 mt-4 items-center ">
          <div className="m-4">
            <div className="bg-dark w-7 h-7 rounded-lg flex items-center justify-center">{element.icon}</div>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-black1 font-bold">{element.categoryName}</p>
            <p className="text-xs text-heading">
              {element.text1}<span className="font-semibold"> {element.text2} </span>{" "}
            </p>
          </div>
          <div className="">
            <ChevronRightIcon />
          </div>
        </div>
          )
      })}
    </>
  );
};

export default Categories;
