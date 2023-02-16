import "./Sidebar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';


import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
            className="sidebarImg"
          src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qua si illo
          commodi corrupti velit earum magni inventore ullam impedit fugit quis
          cum saepe maiores nisi repellendus, sit sed, voluptas in voluptate!
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <FacebookIcon className="sidebarIcon"/>
         <TwitterIcon className="sidebarIcon"/>
         <PinterestIcon className="sidebarIcon"/>
         <InstagramIcon className="sidebarIcon"/>
        </div>
    </div>
    </div>
  );
};

export default Sidebar;
