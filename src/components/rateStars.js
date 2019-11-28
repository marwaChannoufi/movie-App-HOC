import React from 'react';

const RateStars=(props)=>{

		 let tabStar=[];
        for (let i=0;i<5;i++){
            props.rate>i? 
            tabStar.push(<span onClick={()=>props.handelStars(i!==0?i+1:i)}>&#9733;</span>):
            tabStar.push(<span onClick={()=>props.handelStars(i+1)}>&#9734;</span>)

  }
        return(
           <div>{tabStar}</div>
        )
}
export default RateStars;