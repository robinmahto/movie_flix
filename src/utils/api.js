import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const headers = {
    Authorization : `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmRlN2ZjMGMzZDAyMTU2YWE5NWNjMTE2OTJhZTZkNyIsInN1YiI6IjY0MTc1NWFiMGQ1ZDg1MDBlMGU2YjJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z51-bX55tjLKl0-CUlDA4SSf-NBxM2ScyPurtiqZgBg`
}

export const fetchDataFromApi = async(url, params)=> {
      try {
        const {data} = await axios.get(url, {headers, params});
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }  
}