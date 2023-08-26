import React from "react";
import "./topbar.css";
import { NotificationsNone, Language,Lock } from "@material-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout  } from "../../context/authContext/AuthActions";

export default function Topbar() {

  const{  dispatch} = useContext(AuthContext);

 

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">BreachFix</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <button className="topbarIconContainer" 
          onClick={() => dispatch(logout())} >
            <Lock />
          </button>

          <img src="https://firebasestorage.googleapis.com/v0/b/joyful-a1987.appspot.com/o/WhatsApp%20Image%202023-08-15%20at%208.08.09%20PM.jpeg?alt=media&token=973c545c-778b-4cd6-84a3-62726d0dfcbb" alt="" className="topAvatar" />
        
        </div>
      </div>
    </div>
  );
}
