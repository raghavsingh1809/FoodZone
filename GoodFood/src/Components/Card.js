import React from "react"; 
import { BASE_URL } from "./Maincard";
const Card = (props) => {
  const { name, price, image, type } = props;

  return (
    <div className="card card-main">
      <div className="card-img">
        <img src={BASE_URL+image} alt={name} />
        </div>
        <div className="card-body card-content">
          <h5 className="card-title"> Name : {name}</h5>
          <h5 className="card-title"> Price : {price.toFixed(2)}</h5>
          <h5 className="card-title"> Type : {type}</h5> 
        </div>
      
    </div>
  );
};

export default Card;

