import React from 'react';
import "./ProfileScreen.css";
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import { auth } from '../firebase';
import PlanScreen from './PlanScreen';

function ProfileScreen() {
    const user = useSelector(selectUser);


  return (
    <div className="profileScreen">
      < Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
            <img  
            classname="nav_avatari"
            src="https://firebasestorage.googleapis.com/v0/b/joyful-a1987.appspot.com/o/avatasmall.jpeg?alt=media&token=1ead6c2d-74b0-4302-8b32-9ee990e3a5a1" alt="" 
            />
            <div className="profileScreen__details">
                <h2>{user.email}</h2>
                <div className="profileScreen__plans">
                  <h3>Plans</h3>

                  <PlanScreen />
                   <button 
                   onClick={()=> auth.signOut()} 
                   className="profileScreen__signOut">
                    Sign Out</button> 
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default ProfileScreen;