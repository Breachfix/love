import { useLocation } from 'react-router-dom';
import './watch.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';  // <-- Changed this line
import { ArrowBackOutlined } from '@material-ui/icons';

const Watch = () => {
  const location = useLocation();
  const movie = location.state?.movie 
  
  useEffect(()=>{    
     console.log("location",location);  
   },[location]);

   console.log("Movie from state:", movie);

  return (
    <div className="watch">
      <Link to="/"> 
        <div className="back">
            <ArrowBackOutlined />
            {movie?.title}
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie?.video}
      />
    </div>
  )
}

export default Watch;
