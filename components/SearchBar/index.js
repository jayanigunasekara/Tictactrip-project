import React, { useEffect, useState } from 'react'
import {FaSearch} from "react-icons/fa"

const index = ({ setResults ,selectedLocation}) => {
    const [input, setInput] = useState("");

    
    /* Fetch and filter the data */
    const fetchData = (value)=>{
        fetch("https://api.comparatrip.eu/cities/autocomplete/?q="+ value)
        .then((response)=>response.json())
        .then((data)=>{

            console.log("Successfully fetched the data");

            const results = data.filter((location) => {
                return (
                  value &&
                  location &&
                  location.local_name &&
                  location.local_name.toLowerCase().includes(value)
                );
              });
              console.log(results);
              setResults(results);

        })
        .catch(e => console.log(e));
    }

    const handleChange = (value)=>{

        // setInput(value)
        // fetchData(value)


        
        if(selectedLocation && selectedLocation !== "" ){
            setInput(selectedLocation)
            console.log(input);
        }else{
            setInput(value)
            fetchData(value)
        }
     
    }

    


  return (


    
    <div className="input-group">
        <div className="form-outline">
            <input 
                type="search" 
                id="form1" 
                className="form-control" 
                placeholder={input} 
                value={input} 
                onChange={(e) => handleChange(e.target.value)} />
            
        </div>
        <button type="button" className="btn btn-primary">
            <FaSearch/>
        </button>
    </div>
    
  )
}

export default index
