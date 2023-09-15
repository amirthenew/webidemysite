import React from 'react';

const Banner = () => {
    return ( 
<div className='bg-darkcolor flex '>
<div className='flex flex-col w-1/2 pr-8 mt-8'>
<h2 className='text-white'>کافیه شروع کنی! </h2>
<h2 className='text-white'>مهارت کسب کن تا به درآمد برسی</h2>
<span className='text-white'>سایت جامع آموزش برنامه نویسی و طراحی وب سایت</span>
<button className='bg-webidemy text-right w-20 text-white'>شروع کن !</button>
</div>
<div className='w-1/2'>
<img  src='../../src/assets/images/vector1.png'/>
</div>
</div>
     );
}
 
export default Banner;