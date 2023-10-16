
import { useState, useEffect } from "react";

const UsePostData = () => {
  const [PostApiData, setPostApiData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      ).then((response) => response.json());
      setPostApiData(response);
    })();
  }, []);
  return PostApiData;
};
export default UsePostData;