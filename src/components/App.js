import React, { useState } from "react";
import TvMazeDataList from "./TvMazeDataList";
import "./App.css";
import UserDetails from "./UserDetails";
const App = () => {
  const [userId , setUserID] = useState("");
  const callback = (props)=>{
    setUserID(props);
  }
  console.log("tvMazeData",userId)
  return (
    <div>
      <body>{userId===""?
      <TvMazeDataList userIDcallback={callback}/>:
      <UserDetails backButton={callback} userId={userId}/>}
      </body>
    </div>
  );
};

export default App;
