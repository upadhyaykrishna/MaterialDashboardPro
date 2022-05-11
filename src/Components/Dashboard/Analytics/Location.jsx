import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import EditIcon from "@mui/icons-material/Edit";

const data = [
  {
    image:
      "https://demos.creative-tim.com/material-dashboard-pro-react/static/media/product-1-min.a4c2bc133076d3b7c517.jpg",
    place: "Cozy 5 Stars Apartment",
    description:
      'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the mainnight life in Barcelona',
    rate: "$899/night",
    location: "Barcelona, Spain",
  },
  {
    image:
      "https://demos.creative-tim.com/material-dashboard-pro-react/static/media/product-2-min.0ef21c3599693a69cd7e.jpg",
    place: "Office Studio",
    description:
      'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
    rate: "$1.119/night",
    location: "London, UK",
  },
  {
    image:
      "https://demos.creative-tim.com/material-dashboard-pro-react/static/media/product-3-min.c4eb341f49bb541a8a8e.jpg",
    place: "Beautiful Castle",
    description:
      'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
    rate: "$459/night",
    location: "Milan, Italy",
  },
];

const Location = () => {
  return (
    <>
      <div className="left-[19rem] absolute top-[67rem] flex flex-row ">
        {data.map((element) => {
          return (
            <div className="w-80 h-96 bg-white text-center rounded-lg mr-5">
              <div>
                <img
                  src={element.image}
                  alt="can't load image"
                  className="w-72 relative left-3 -top-5 rounded-lg "
                />
              </div>

              <p className="text-grey2 text-lg font-medium  w-full">
                {element.place}
              </p>
              <p className="text-heading ml-6 mr-6 mt-2 ">
                {element.description}
              </p>
              <div className="w-56 h-[1px] bg-line mt-5 ml-12" />
              <div className="flex-row justify-between flex  text-heading mr-5 ml-5 mt-2 fle">
                <p>{element.rate}</p>
                <p className="ml-20 text-right">{element.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Location;
