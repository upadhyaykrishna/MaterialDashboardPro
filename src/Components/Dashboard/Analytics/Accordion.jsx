import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const Accordion = ({icon, title, list1, list2, list3 }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex flex-row hover:bg-grey cursor-pointer ml-4 h-12 p-3 pl-4 mr-5 rounded-lg mb-3 mt-3"
        >
          <div>{icon}</div>
          <div className="pl-2">{title} </div>
          <div className="absolute right-0 mr-7">{isActive ? <KeyboardArrowUpRoundedIcon style={{color: 'white'}} /> : <KeyboardArrowDownRoundedIcon style={{color: 'white'}}/>}</div>
        </div>
        {isActive && (
          <>
            <div className=" hover:bg-grey ml-7 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
              {list1}
            </div>
            <div className="hover:bg-grey ml-7 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
              {list2}
            </div>
            {list3 ? (
              <div className="hover:bg-grey ml-7 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
                {list3}
              </div>
            ) : (
              <div className="mb-3" />
            )}
          </>
        )}
        {list3 && <div className="w-48 h-[1px] bg-line2 ml-7" />}
      </div>
    </>
  );
};

export default Accordion;
