import React from "react";
import UseApiData from "./useApiData";
import UsePostData from "./usePostData";
import "./TvMazeDataList.css";

import { useState, useEffect } from "react";
const UserDetails = ({backButton, userId}) => {
   const apiData = UsePostData();
   const userapiData = UseApiData();
  const [Countries, setCountries] = useState([]);
  const [SelectedCountry, setSelectedCountry] = useState("America/Argentina/Salta");
  const [Time, setTime] = useState([]);
  const [Running, setRunning] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://worldtimeapi.org/api/timezone`
      ).then((response) => response.json());
      setCountries(response);
    })();
  }, []);
  console.log("time",SelectedCountry)


  useEffect(() => {
    let interval = null;
    if (Running){
     setInterval(() => {
    (async () => {
      const response = await fetch(
        `http://worldtimeapi.org/api/timezone/${SelectedCountry}`
      ).then((response) => response.json());
      setTime(response);
    })();
  }, 1000);}
  else if (!Running) {
    clearInterval(interval);
  }
  }, [SelectedCountry, Running]);

  const handleBackButton = (useridData)=>{
    backButton(useridData)
  }
  const handlePauseStartClick = () => {
        setRunning(!Running);

      };

  const arr = apiData.filter((word) => word.userId === userId);
  const userarr = userapiData.filter((word) => word.id === userId);
  console.log("tvMazeData",userarr)

  return (

    <div className="TvMazeDataList">
       
          <header className="postDataList">
        <div>
          <button className="btn styleTop" onClick={() => handleBackButton("")}>Back</button>
          </div>
        <div className="App">
       <h2>Country Dropdown</h2>
      </div> 
      <div style={{width: "40%"}}>
      <div  className="card2">

      <div><h3>Select Country:</h3></div>
<select id="countries" style={{width: "40%"}} onChange={(e) => setSelectedCountry({ value: e.target.value })}>
{Countries.map((country) => (
            <option value={country} >
              {country}
            </option>
          ))}
</select>
      
      <button className="btn styleTop" onClick={() => handlePauseStartClick("")}>
        {Running ? "Pause" : "Start"}
      </button>
      <div><h3>Time:</h3>
      <div><h3>{Time.datetime?Time.datetime:" -------------------"}</h3></div></div>
    </div>
      </div>
      </header>
      <div className="App"><h3>Profile Page</h3></div>
      {userarr.map((userarr) => (
    <div className="card2" >
        <div style={{width:"40%", margin:"20px"}}>Name: {userarr.name}</div>
        <div style={{width:"40%", margin:"20px"}}>User Name: {userarr.username}</div>
        <div style={{width:"40%", margin:"20px"}}>Address: {userarr.address.street}, {userarr.address.suite}, {userarr.address.city}, {userarr.address.zipcode}</div>
        <div style={{width:"40%", margin:"20px"}}>Email/Phone: {userarr.phone}</div>
    </div>))}
  
    <div className="postDataList">{arr.map((userRecord) => (
        <div className="card2" style={{width:"25%"}}>
         <div className="text">{userRecord.title}</div>
          <div className="info">
         <div className="data">{userRecord.body}</div>
          </div>
        </div>
      ))}</div>
    </div> 

  );
};
export default UserDetails;
