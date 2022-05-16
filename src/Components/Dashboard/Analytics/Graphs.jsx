import React from "react";

const graphsBox = [
  {
    heading: "Website Views",
    subHeading: 'Last Campaign Performance',
    updatedOn: 'campaign sent 2 days ago',
    bg: 'bg-blue-500'
  },
  {
    heading: "Daily Sales",
    subHeading: '(+15%) increase in today sales.',
    updatedOn: 'updated 4 min ago',
    bg: 'bg-green-600'
  },
  {
    heading: "Completed Tasks",
    subHeading: 'Last Campaign Performance',
    updatedOn: 'just updated',
    bg: 'bg-dark'
  }
];

const Graphs = () => {
  return (
    <> 
      <div className="grid grid-cols-3 gap-6 mt-10 lg:grid-cols-2 lg:grid-rows-2 lg:mb-5 md:grid-rows-3 md:grid-cols-1">
        {graphsBox.map((element) => {
          return (
            <div className="w-full h-80 bg-white rounded-lg mb-10 lg:mb-5 md:w-">
              <div className={`w-11/12 h-52 ${element.bg} ml-[0.8rem] relative -top-5 rounded-lg max-w-full xl:ml-4 md:w-[96%]`} />
              <div className="mx-6 xl:ml-5">
                <p className="text-grey2 font-bold">{element.heading}</p>
                <p className="text-heading">{element.subHeading}</p>
                <hr className="my-3 mx-14"/>
                <p className="text-heading">{element.updatedOn}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Graphs;
