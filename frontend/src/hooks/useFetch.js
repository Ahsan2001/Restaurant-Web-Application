// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [apiData, setApiData] = useState(null);
//   const [serverError, setServerError] = useState(null);

//   const fetchData = async (url, method, fetching) => {
//     setIsLoading(true);
//     try {
//       const response = await axios({ url, method, fetching });
//       const data = response?.fetching;
//       setApiData(data);
//       setIsLoading(false);
//     } catch (error) {
//       setServerError(error);
//       setIsLoading(false);
//     }
//   };

//   return { isLoading, apiData, serverError, fetchData };
// };

// export default useFetch;
