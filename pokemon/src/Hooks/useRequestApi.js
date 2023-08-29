import axios from "axios";
import React from "react";

const useRequestApi = () => {
  const [loading, setLoading] = React.useState(false);
  /* Data Fetch */
  const [dataPokedex, setDataPokedex] = React.useState(null);
  const [dataRegion, setDataRegion] = React.useState(null);
  const [dataPk, setPk] = React.useState(null);
  const [dataPkName, setDataPkName] = React.useState(null);

  /* Data Fetch */

  const api = axios.create({
    // baseURL: "https://pokeapi.co/api/v2/",
    // timeout: 3000,
  });

  const fetchDataList = async (url) => {
    setLoading(true);
    try {
      const res = await api.get(url);
      setDataPokedex(res.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPkRegionItems = async (url) => {
    setLoading(true);
    try {
      const res = await api.get(url);
      const resPokedex = await api.get(res.data.pokedexes[0].url);
      localStorage.setItem("RegionName", res.data.name);
      if (res.status === 200 && resPokedex.status === 200) {
        setDataRegion(resPokedex.data.pokemon_entries);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchPkData = async (url) => {
    setLoading(true);
    try {
      const filterUrl = url.replace("pokemon-species", "pokemon");
      const res = await api.get(filterUrl);
      setPk(res.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    dataPokedex,
    dataRegion,
    dataPk,
    loading,
    fetchDataList,
    fetchPkRegionItems,
    fetchPkData,
  };
};

export default useRequestApi;
