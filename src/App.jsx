import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const {results} = useSelector((state)=> state.home.url)
  const fetchData = async() => {
   const result = await fetchDataFromApi('/movie/popular')
   dispatch(getApiConfiguration(result))
  }
  useEffect(()=>{
    fetchData();
  }, [])
  return (
    <>
    {
      results?.map((data)=>{
        return <div key={data.id}>
          <p>{data.original_title}</p>
          <p>{data.overview}</p>
        </div>
      })
    }
    </>
  )
}

export default App
