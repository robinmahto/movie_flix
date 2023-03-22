import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';

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
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:mediaType/:id' element={<Details/>} />
      <Route path='/search/:query' element={<SearchResult/>} />
      <Route path='/explore/:mediaType' element={<Explore/>} />
      <Route path='*' element={<PageNotFound/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
