import React from 'react'

function Banner() {
  return (
    <div className='h-[75vh] bg-center bg-cover flex items-end'  style={{backgroundImage : `URL(https://alchetron.com/cdn/mitwaa-c4445fdc-892b-4fd9-b7e6-ac70f361436-resize-750.jpg)`}}>
        <div className='text-white text-xl text-center w-full bg-blue-900/60 p-4'>Mitwaa</div>
    </div>
  )
}

export default Banner