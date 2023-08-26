import React from 'react';
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'; 

const Home = ({type}) => {
  const [lists, setLists] =useState([]);
  const [genre, setGenre] =useState(null);
  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL
  });

  useEffect(()=> {
    const getRandomLists = async ()=>{
      try {
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
        }`,{
            headers:{
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGVmYzczOTdjMDI1OWJkZmNkYWVmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjU0NDcxMSwiZXhwIjoxNjkyOTc2NzExfQ.o2PrkQ4QJ11qVc1l4uhfSx5G9fXzVgteiKxV1KcsVkU"
            }
          }
        );
        setLists(res.data);
      }catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className= "home" > 
      <Navbar/>
      
      <Featured type={type} setGenre={setGenre}/>
      {lists.map((list) =>(
        <List list={list}/>
      ))}
     
      
      

    </div>
  )
} 

export default Home;