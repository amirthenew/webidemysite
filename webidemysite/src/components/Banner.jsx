import React from 'react';

const Banner = () => {
    return ( 
<div className='bg-darkcolor flex '>
<div className='flex flex-col w-1/2 pr-14 mt-24'>
<h2 className='pb-2 text-white'>کافیه شروع کنی! </h2>
<h2 className='py-2 text-white'>مهارت کسب کن تا به درآمد برسی</h2>
<span className='py-2 text-zinc-600'>سایت جامع آموزش برنامه نویسی و طراحی وب سایت</span>
<button className='text-white text-sm rounded-full p-1  my-2 bg-webidemy text-center w-20 text-white'>شروع کن !</button>
</div>
<div className='w-1/2'>
<img  src='../../src/assets/images/vector1.png'/>
</div>
</div>
     );
}
 
export default Banner;