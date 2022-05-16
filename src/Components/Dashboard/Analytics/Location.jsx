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
      <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-3">
        {data.map((element) => {
          return (
            <div className="w-full h-fit bg-white rounded-lg xl:h-[27rem] mb-10 lg:h-fit lg:mb-5">
              <div>
                <img
                  src={element.image}
                  alt="can't load image"
                  className="w-11/12 relative left-3 -top-5 rounded-lg xl:left-4 md:w-[95%]"
                />
              </div>

              <p className="text-grey2 text-lg font-medium w-full text-center ">
                {element.place}
              </p>
              <p className="text-heading mx-3 mt-2 text-center">
                {element.description}
              </p>
              <hr className="mx-14 my-5" />
              <div className="grid grid-cols-2 text-heading mb-5 mx-3">
                <p>{element.rate}</p>
                <p className="text-right">{element.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Location;
