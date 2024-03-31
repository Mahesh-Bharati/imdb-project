import './App.css'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes,Route} from 'react-router-dom'
import WatchList from './components/WatchList'
import Banner from './components/Banner'
import { useEffect, useState } from 'react'

function App() {
  
let[watchList,SetWatchList]=useState([])

let handleAddWatchList = (movieObj)=>{
  let newWatchList = [...watchList,movieObj]
  localStorage.setItem('movieApp',JSON.stringify(newWatchList))
  SetWatchList(newWatchList)
  console.log(newWatchList)
}

useEffect(()=>{
  let moviesFromLocalStorage = localStorage.getItem('movieApp')
  if(!moviesFromLocalStorage)
  {
    return
  }
  SetWatchList(JSON.parse(moviesFromLocalStorage))
},[])

let handleRemoveFromWatchList = (movieObj)=>{
  let filterWatchList = watchList.filter((movie)=>{
    return movie.id != movieObj.id
  })
  localStorage.setItem('movieApp',JSON.stringify(filterWatchList))
  SetWatchList(filterWatchList)
  console.log(filterWatchList)
}
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<><Banner/><Movies watchList={watchList} handleAddWatchList={handleAddWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/></>}></Route>
      <Route path='/watchlist' element={<><WatchList watchList={watchList} SetWatchList={SetWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} /></>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
