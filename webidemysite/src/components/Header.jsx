import React from 'react';

const Header = () => {
    return (

        <div className='flex  w-full p-3   bg-darkcolor'> 
        <div className='flex w-full justify-between'>
        
<div>
<img className=' w-14 ' src='../../src/assets/images/WEBIDEMI.png'/>
</div>
        <div>
        <ul className='flex py-5  px-1  text-webidemy'>
        <li className='px-2'>صفحه اصلی</li>
        <li className='px-2'>تماس با ما</li>
        <li className='px-2'>دوره ها</li>
        <li className='px-2'>درباره ما</li>
        <li className='px-2'>بلاگ</li>
        </ul>
        </div>
        <div>
        <button className=' p-2 w-28 rounded-full bg-webidemy'>
        ثبت نام
        </button>
        </div>

        </div>
        </div>
      );
}
 
export default Header;