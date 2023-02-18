import "./Topbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet } from "react-router-dom";

const Topbar = () => {
  const user = false;
  return (
    <>
    <div className="top">
      <div className="topLeft">
        <FacebookIcon className="topIcon" />
        <TwitterIcon className="topIcon" />
        <PinterestIcon className="topIcon" />
        <InstagramIcon className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.unsplash.com/photo-1672748341520-6a839e6c05bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            style={{cursor:"pointer"}}
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}

        <SearchIcon className="topSearchIcon" />
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Topbar;
