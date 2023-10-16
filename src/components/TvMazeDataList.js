import React from "react";
import UseApiData from "./useApiData";
import "./TvMazeDataList.css";

const UserDataList = ({userIDcallback}) => {
  const apiData = UseApiData();
 
  const HandleUserIDcallback = (useridData)=>{
    userIDcallback(useridData)
  }
  return (
    <div className="TvMazeDataList">
      <header>
      <div className="App">
       <h1>Directory</h1>
      </div>
      </header>
      {apiData?.map((userRecord) => (
        <div className="card" id={userRecord.id} onClick={() => HandleUserIDcallback(userRecord.id)}>
          
          <div className="text">
            <h2>{userRecord.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserDataList;
