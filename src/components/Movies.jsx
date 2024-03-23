import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddWatchList,handleRemoveFromWatchList,watchList}) {

    const[movies,setmovies]=useState([])
    const[pageno,setpageno]=useState(1)
    
    const handlepre=()=>{
        if(pageno==1)
        {
            setpageno(1)
        }
        else{
        setpageno(pageno-1)
        }
    }

    const handlenext=()=>{
        setpageno(pageno+1)
    }


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=89350a753284c82a391def0f0ecced37&language=en-US&page=${pageno}`).then(function(res){
            setmovies(res.data.results)
        })
    },[pageno])

  return (
    <div>
    <div className='text-xl text-center p-5'>Trending Movie</div>
    <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map((movieObj)=>{
        return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} original_title={movieObj.original_title} handleAddWatchList={handleAddWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/>
        })}
    </div>
        <Pagination handlenext={handlenext} handlepre={handlepre} pageno={pageno}></Pagination>
    </div>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=89350a753284c82a391def0f0ecced37&language=en-US&page=1