import React from 'react';
import { useState, useEffect } from 'react';

 const TextChange = () => {
    const texts = ["Hi ' I am  SANJANA  a Full Stack Developer "]
    const[currentText, setcurrentText] = useState("");
    const[endValue, setendValue] = useState(true);
    const[IsForword, setIsForword] = useState(true);
    const[Index, setIndex ] = useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setcurrentText(texts[Index].substring(0,endValue));
            if(IsForword){
                setendValue((prev)=> prev + 1);
            }else{
                setendValue((prev)=> prev - 1);
            }
            if(endValue > texts[Index].length + 10){
                setIsForword(false)

            }  if(endValue < 2.1){
                setIsForword(true);
                setIndex((prev)=> prev & texts.length)
            }
        }, 20);
        return () =>clearInterval(intervalId);

        
    }, [endValue, IsForword, Index, texts]);


  return (
    <div className='transition ease duration-300 '>
        {currentText}

    </div>
  )
}
export default TextChange;


