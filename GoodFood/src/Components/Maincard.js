import React,{useState,useEffect} from "react";
import Card from "./Card"; 

export const BASE_URL = "http://localhost:9000";

const Maincard = (props) => {
    const [data,setData] = useState([]); 

    useEffect(() => {
        const fetchFoodData = async () => {
          try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setData(json); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchFoodData();
      }, []);

        
      
 return (
    <div className="container ">
      <div className="row">
        {data.map((item, index) => (
        <div className="col-md-4"> <Card key={index} {...item} />
           </div>
         ))}
      </div>
    </div>
  );
};
export default Maincard;
