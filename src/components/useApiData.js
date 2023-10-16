
import { useState, useEffect } from "react";

const UseApiData = () => {
  const [ApiData, setApiData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      ).then((response) => response.json());
      setApiData(response);
    })();
  }, []);
  return ApiData;
};
export default UseApiData;