import React from 'react'

function Pagination({handlepre,handlenext,pageno}) {
  return (
    <div className='bg-blue-400 p-4 mt-8 flex justify-center'>
    <div onClick={handlepre} className="px-8"><i class="fa-solid fa-arrow-left"></i></div>
    <div className='font-bold'>{pageno}</div>
    <div onClick={handlenext} className="px-8"><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination