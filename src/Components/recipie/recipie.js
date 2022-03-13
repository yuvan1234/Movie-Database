import React, { useEffect } from 'react'
import { useState } from 'react';

import './recipie.css';



const Recipie = () => {

    const [endPoint,setEndPoints]=useState('')

    const [container, setContainer]=useState([]);

    const [finalPoint, setFinalPoint]=useState('');
   
    useEffect(()=>{
        fetchMe()
    },[finalPoint])
    
   
    const fetchMe = () => {

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, {
	"method": "GET",
	"headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "0dd42e1441msh1b55f1860896a62p1992b5jsndf960c3b11df"
	}
})
.then(response => {
	return response.json();
})
.then(data =>{
    setContainer(data.d)
})
.catch(err => {
	console.error(err);
});
}

const onChangeHandler =(e)=>{
    setEndPoints(e.target.value)
}

const onSubmitHandler =(e)=>{
   e.preventDefault()
   setFinalPoint(endPoint)
}



  return (
    <div>
        Movie Database
    <form onSubmit={onSubmitHandler}>

        <input type="text" value={endPoint} onChange={onChangeHandler}/>
        <button type='submit'>Submit</button>

    </form>
<div className='element'>

    {container.map((item,index) =>{
        return (
       
            <div key={index} className='element-div'>
                <img src={item.i.imageUrl}/>
                <p>{item.l}</p>
            </div>
     
    
        )

    })}

    </div>
    </div>
  );
}

export default Recipie