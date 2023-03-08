import "./Settings.css";

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
            className="settingsImg"
            src="https://images.unsplash.com/photo-1674908850980-13d381e2c5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80" 
            alt="" 
            />
            <label htmlFor="fileInput">
                <AccountCircleOutlinedIcon  className="settingsPPIcon"/>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label> Username</label>
          <input type="text" placeholder="Satish"/>
          <label> Email</label>
          <input type="email" placeholder="sksatishk9@gmail.com"/>
          <label> Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
