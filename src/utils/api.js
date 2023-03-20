import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.TMDB_TOKEN;

const headers = {
    Authorization : `bearer ${TMDB_TOKEN}`
}

export const fetchDataFromApi = async(url, body)=> {
      try {
        const {data} = await axios.get(url, {headers, body});
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }  
}