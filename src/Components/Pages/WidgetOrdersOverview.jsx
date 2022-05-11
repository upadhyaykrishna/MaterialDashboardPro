import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';

const orders = [
  {
    bgCircle: 'bg-green-500',
    icon: <NotificationsIcon fontSize="sm" style={{ color: "white" }} />,
    orderTitle: "$2400, Design changes",
    orderPlacedOn: "22 DEC 7:20 PM",
  },
  {
    bgCircle: 'bg-[#F44335]',
    icon: <Inventory2RoundedIcon fontSize="sm" style={{ color: "white" }} />,
    orderTitle: 'New order #1832412',
    orderPlacedOn: '21 DEC 11 PM'
  },
  {
    bgCircle: 'bg-blue-500',
    icon: <ShoppingCartRoundedIcon fontSize="sm" style={{ color: "white" }} />,
    orderTitle: 'Server payments for April',
    orderPlacedOn: '21 DEC 9:34 PM'
  },
  {
    bgCircle: 'bg-orange-500',
    icon: <PaymentRoundedIcon fontSize="sm" style={{ color: "white" }} />,
    orderTitle: 'New card added for order #4395133',
    orderPlacedOn: '20 DEC 2:20 AM'
  },
  {
    bgCircle: 'bg-pink-500',
    icon: <VpnKeyRoundedIcon fontSize="sm" style={{ color: "white" }} />,
    orderTitle: 'New card added for order #4395133',
    orderPlacedOn: '18 DEC 4:54 AM'
  },
];

const WidgetOrdersOverview = () => {
  return (
    <>
      <div className="bg-white w-80 h-[33rem] pt-4 rounded-xl">
        <p className="text-black1 font-bold ml-6">Orders Overview</p>
        <p className="text-heading ml-6 mt-2">24% this month</p>

        {orders.map((element) => {
          return (
            <div className="mt-7 ml-4 flex flex-row  ">
              <div className={` ${element.bgCircle} w-7 h-7 rounded-full flex justify-center items-center after:content-[''] after:w-0 after:h-12 after:relative after:border after:top-[2.4rem] after:-left-2`} >
                {element.icon}
              </div>
              <div className="ml-3">
                <span className="text-black1 font-bold text-sm">
                  {element.orderTitle}
                </span>
                <p className="text-heading">{element.orderPlacedOn}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WidgetOrdersOverview;
