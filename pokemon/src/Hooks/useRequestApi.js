import axios from "axios";
import React from "react";

const useRequestApi = (url) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 3000,
  });
  
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await api.get(url);
      setData(res.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useRequestApi;
