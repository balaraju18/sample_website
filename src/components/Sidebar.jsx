import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import "../components/style.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      name: "Home",
    },
    {
      path: "/",
      name: "misc",
      icon: <GraphicEqIcon />,
    },
    {
      path: "/crypto",
      name: "crypto",
      icon: <CurrencyExchangeIcon />,
    },
    {
      path: "/listing",
      name: "listing",
      icon: <ListAltIcon />,
    },
    {
      path: "/crm",
      name: "crm",
      icon: <SupportAgentIcon />,
    },
    {
      path: "/intranet",
      name: "intranet",
      icon: <PieChartOutlineIcon />,
    },
    {
      path: "/ecommerce",
      name: "eCommerce",
      icon: <ShoppingCartOutlinedIcon />,
    },
    {
      path: "/News",
      name: "news",
      icon: <NewspaperOutlinedIcon />,
    },
    {
      name: "Apps",
    },
    {
      path: "/chat",
      name: "chat",
      icon: <ChatOutlinedIcon />,
    },
    {
      path: "/contact",
      name: "contact",
      icon: <ContactsOutlinedIcon />,
    },
    {
      path: "/mail",
      name: "mail",
      icon: <EmailOutlinedIcon />,
    },
    {
      name: "Cards",
    },
    {
      path: "/widgets",
      name: "widgets",
      icon: <WidgetsIcon />,
    },
    {
      path: "/metrics",
      name: "metrics",
      icon: <LeaderboardOutlinedIcon />,
    },
    {
        name: "Components",
      },
      {
        path: "/material Ui",
        name: "material Ui",
        icon: <WidgetsIcon />,
      },
   
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "60px" }} className="sidebar">
        <div className="top_section">
          <Diversity1OutlinedIcon style={{ color: "blue" }} />
          <h1
            style={{
              display: isOpen ? "block" : "none",
              fontSize: "18px",
              marginLeft: "20px",
              opacity: "0.6",
            }}
            className="logo"
          >
            jumbo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <MenuOpenIcon onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
