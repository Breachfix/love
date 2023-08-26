import React from 'react';
import "./featured.scss";
import { InfoOutlined, PlayArrow} from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function Featured({ type, setGenre }) {

const[content, setContent]= useState({});
const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL
});

 
  
useEffect(() => {
  const getRandomContent = async () => {
    try {
      const res = await axiosInstance.get(`/movies/random?type=${type}`, {
        headers: {
          token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setContent(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  getRandomContent();
}, [type]);

console.log(content);
  

  return (
    <div  className="featured">
      {type && (
        <div className="category">
          <span> {type === "movie" ? " Movies" : "Series" }</span>
          <select name= "genre" id= "genre" onChange={e=>setGenre(e.target.value)}
        >
          <option>Genre</option>
          <option value= "Love">Love</option>
          <option value= "Three Angels">Three Angels</option>
          <option value= "Temperance">Temperance</option>
          <option value= "Breach Repairers">Breach Repaires</option>
          <option value= "Changed Life">Changed Life</option>
          <option value= "Health">Health</option>
          <option value= "Prophecy">Prophecy</option>
          <option value= "Sanctuary">Sanctuary</option>
          <option value= "Hymns">Hymns</option>
          <option value= "Songs">Songs</option>
          <option value= "Sabbath">Sabbath</option>
          <option value= "Faith">Faith</option>
          <option value= "Hope">Hope</option>
          <option value= "Inspirational">Inspirational</option>
          <option value= "Documentary">Documentary</option>
          </select>

        </div>
      )}
         <img src={content.img} alt="" />
          <div className="info">
          <img 
     
          src={content.imgTitle}
          alt="" 
          />
          <span className="desc">
                {content.desc}
          </span>
          <div className="buttons">
          <Link to={{ pathname: "/watch", state: { movie: content } }}>
            <button className='play'>
              <PlayArrow />
              <span>Play</span>
            </button>
            </Link>

            <button className='more'>
              <InfoOutlined/>
              <span>Info</span>
            </button>
          </div>
          </div>
    </div>
  )
}
