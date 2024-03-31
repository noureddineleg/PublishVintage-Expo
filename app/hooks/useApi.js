import { useState } from "react";
import logger from "../utility/logger";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    logger.log(response.data);

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};
