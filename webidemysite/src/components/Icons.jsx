import React from 'react';

const Icons = (props) => {
    const {id,src,caption,description}=props

    return (

        <div className='flex flex-col justify-center w-2/6'>
        <img className='w-14  m-auto' src={src}/>
        <span className='text-white m-auto text-base'>{caption}</span>
        <div className='w-1/2 text-center m-auto'>
        <p className='text-slate-400 text-sm'>{description}</p>
        </div>
        </div>
      );
}
 
export default Icons;

