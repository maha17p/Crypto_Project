import { BsNewspaper,BsSearch ,BsCurrencyBitcoin} from "react-icons/bs";
import { AiOutlineHome ,AiOutlineLogout,AiFillSetting} from "react-icons/ai";
import {FaEthereum,FaStackExchange} from 'react-icons/fa'

export const sideBarLinks = {
  logo: {
    icon: <FaEthereum />,
    label: "Crypto",
    link: "/",
  },
  search:{
    label:"Enter the name...",
    icon:<BsSearch />,
  },
  sideBarArr: [
    {
      id:'1',
      icon: <AiOutlineHome />,
      label: "Home",
      link: "/",
      notify:5
    },
  
    {
      id:'2',
      icon: <BsCurrencyBitcoin />,
      label: "Currency",
      link: "/currency",
      notify:5
    },
    {
      id:'3', 
      icon: <FaStackExchange />,
      label: "Exchanges",
      link: "/exchanges",
      notify:5
    },
    {
      id:'4',
      icon: <BsNewspaper />,
      label: "News",
      link: "/news",
      notify:5
    },
  ],
  settingBarArr:[
    {
      id:'1', 
      icon: <AiFillSetting />,
      label: "Settings",
      link: "/settings",
    },
    {
      id:'2', 
      icon: <AiOutlineLogout />,
      label: "Logout",
      link: "/logout",
    }
  ]
};
