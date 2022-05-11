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
      <div className="absolute left-[19rem] top-[33rem] flex flex-row">
        {graphsBox.map((element) => {
          return (
            <div className=" w-80 h-80 bg-white rounded-lg mr-7">
              <div className={`w-72 h-52 ${element.bg} relative -top-5 ml-4 rounded-lg`} />
              <div className="absolute top-52 ml-6 ">
                <p className="text-grey2 font-bold">{element.heading}</p>
                <p className="text-heading">{element.subHeading}</p>
                <div className="w-40 h-[1px] bg-line mt-3 ml-12" />
                <p className="mt-3 text-heading">{element.updatedOn}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Graphs;
