import React, { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const AccordionPages = ({icon, title, list1, list2, list3, list4, list5, list6, list7, list8, list9 }) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex flex-row  hover:bg-grey cursor-pointer ml-4 h-12 p-3 pl-5 mr-5 rounded-lg mb-0 mt-0"
        >
          <div>{icon}</div>
          <div className='pl-2'>{title} </div>
          <div className="absolute right-0 mr-7">{isActive ? <KeyboardArrowUpRoundedIcon style={{color: 'white'}} /> : <KeyboardArrowDownRoundedIcon style={{color: 'white'}}/>}</div>
        </div>
        {isActive && (
          <>
            <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer">
              {list1}
            </div>
            <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
              {list2}
            </div>
            {list3 ? (
              <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
                {list3}
              </div>
            ) : (
              <div className="mb-3" />
            )}
            {list4 ? (
              <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
                {list4}
              </div>
            ) : (
              <div className="mb-3" />
            )}
            {list5 ? (
              <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
                {list5}
              </div>
            ) : (
              <div className="mb-3" />
            )}
            {list6 ? (
              <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
                {list6}
              </div>
            ) : (
              <div className="mb-3" />
            )}
            {list7 ? (
              <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
                {list7}
              </div>
            ) : (
              <div className="mb-3" />
            )}
            {list8 ? (
              <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
                {list8}
              </div>
            ) : (
              <div className="mb-3" />
            )}
            {list9 ? (
              <div className="hover:bg-grey ml-4 mr-5 rounded-lg h-12 p-3 cursor-pointer ">
                {list9}
              </div>
            ) : (
              <div className="mb-3" />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default AccordionPages