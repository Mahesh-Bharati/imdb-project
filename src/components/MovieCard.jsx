import React from 'react'

function MovieCard({poster_path,original_title,handleAddWatchList,movieObj,handleRemoveFromWatchList,watchList}) {

  function doesContains(movieObj){
    for(let i=0;i<watchList.length;i++)
    {
      if(watchList[i].id==movieObj.id)
      {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
        <div className='h-[40vh] w-[175px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover-cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
       {doesContains(movieObj)?
       <div onClick={()=>(handleRemoveFromWatchList(movieObj))} className='m-4 flex justify-center rounded-sm h-6vh w-6vh bg-gray-900'>&#10060;</div>
       :
        <div onClick={()=>(handleAddWatchList(movieObj))} className='m-4 flex justify-center rounded-sm h-6vh w-6vh bg-gray-900'>&#128525;</div>
      }
        <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>{original_title}</div>
        </div>
        
    </div>
  )
}

export default MovieCard