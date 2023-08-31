import React, { useState, useEffect } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL
});

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axiosInstance.get("/users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
  
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    getNewUsers();
  }, []); // Empty dependency array
  
  console.error();
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem" key={user.id}>
            <img
              src={user.profilePic || "https://firebasestorage.googleapis.com/v0/b/joyful-a1987.appspot.com/o/avata.avif?alt=media&token=f4f000cd-3ba8-441c-89ba-356f553ad51e"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}