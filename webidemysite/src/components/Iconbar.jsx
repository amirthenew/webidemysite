import React from 'react';
import Icons from './Icons';

const Iconbar = () => {

    const iconArray = [{id:1,src:'../../src/assets/images/learn.png',caption:'همه جا یادبگیر',description:'فرقی نداره با چه دستگاهی هستی یا کجا هستی وقتی با ما باشی یاد میگیری'}
,{id:1,src:'../../src/assets/images/icon.png',caption:'مدرسین کاربلد',description:'هر تخصص رو از متخصصش یادبگیر'},
{id:1,src:'../../src/assets/images/icons.svg',caption:'دسترسی نامحدود',description:'یکبار بخر همیشه دسترسی داشته باش'}]
    
return (<div className='flex justify-between bg-darkcolor mt-8 p-4'>
    
    {iconArray.map(item=><Icons
        src={item.src}
        caption={item.caption}
        description={item.description}
        />)}
    
    </div>  );
}
 
export default Iconbar;