import DashboardIcon from '@mui/icons-material/Dashboard';
import profile from "../../../assets/profile.jpg";
import ImageIcon from '@mui/icons-material/Image';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import ViewInArIcon from '@mui/icons-material/ViewInAr';   
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export const accordionData = [
    {
      icon: <img src={profile} alt="" className="w-8 h-8 -mt-1 rounded-full" />,
      title: "Brooklyn Alice",
      list1: "My Profile",
      list2: "Settings",
      list3: "Logout",
    },
    {
      icon: <DashboardIcon/>,
      title: "Dashboards",
      list1: "Analytics",
      list2: "Sales",
    },
  ];

  export const accordionPagesData = [
      {
        icon: <ImageIcon/>,
        title: "Pages",
        list1: "Profile",
        list2: "Users",
        list3: "Account",
        list4: "Projects",
        list5: "Pricing Range",
        list6: "RTL",
        list7: "Widgets",
        list8: "Charts",
        list9: "Notifications"
      },
      {
        icon: <AppsIcon/>,
        title: "Applications",
        list1: "Kanban",
        list2: "Wizard",
        list3: "Data Tables",
        list4: "Calendar",
      },
      {
        icon: <ShoppingBasketIcon/>,
        title: "Ecommerce",
        list1: "Products",
        list2: "Orders"
      },
      {
        icon: <ContentPasteIcon/>,
        title: "Authentication",
        list1: "Sign In",
        list2: "Sign Up",
        list3: "Reset Password"
      },

  ]

  export const accordionDocsData = [
    {
      icon: <UpcomingIcon/>,
        title: 'Basic',
        list1: 'Getting Started',
        list2: 'Foundation'
    },
    {
        icon: <ViewInArIcon/>,
        title: 'Components',
        list1: 'Alerts',
        list2: 'Avatar',
        list3: 'Badge',
        list4: 'Badge Dot',
        list5: 'Box',
        list6: 'Buttons',
        list7: 'Data Picker',
        list8: 'Dropzone',
        list9: 'Editor',
        list10: 'Input',
        list11: 'Pagination',
        list12: 'Progress',
        list13: 'Snackbar',
        list14: 'Social Button',
        list15: 'Typography'
    },
    {
        icon: <ReceiptLongIcon/>,
        title: "Change Log"
    }

  ]