import React from 'react'
import {Bookmark} from 'lucide-react'
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/apply", {
      state: {
        company: props.Company,
        post: props.Post,
        location: props.Location,
      },
    });
  }
    
  return (
   <div className="card">
    <div>
        <div className="top">
          <img src={props.BrandLogo} alt="" />
          <button>Save <Bookmark size={12} /></button>
          
        </div>
          <div className="center">
            <h3>{props.Company }<span>{props.DatePosted}</span></h3>
            <h2>{props.Post}</h2>
            <div className='tag'>
              <h4>{props.Tag1}</h4>
              <h4>{props.Tag2}</h4>
            </div>

          </div>
          <div className="bottom">
              <div>
                <h3>{props.Pay}</h3>
                <p>{props.Location}</p>
              </div>
              <div>
             <button onClick={handleApplyClick}>Apply Now</button>
              </div>
          </div>
      </div>
      </div>
      
  )
}

export default Card
