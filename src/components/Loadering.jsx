import { Audio } from 'react-loader-spinner'

import React from 'react'

const Loadering = () => {
  return (
    <div className='mx-[50%]'><Audio
    height="200"
    width="200"
    radius="9"
    
    color="blue"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  /></div>
  )
}

export default Loadering
