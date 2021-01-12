import React from 'react'

export default function Cards(props) {
    
    return (
        <div className = "card">
           <div className = {props.front} >
               <div className ={props.picture}>
                    &nbsp;
               </div>
               <div className =  {props.heading}>
                    The forest explorer
               </div>
               <div className = {props.details}>
                    <ul>
                        <li> 3 day tours</li>
                        <li> upto 30 people</li>
                        <li>2 tour guides</li>
                        <li> Difficulty: easy</li>
                    </ul>
               </div>
               
           </div>
           <div className = {props.back} >
               <div className ="card__cta">
                   <div className = "card__price-box">
                       <p className = "card__price-only">Only</p>
                       <p className = "card__price-value">$355</p>
                   </div>
                   <a href= "#" className = "btn btn--white btn--animated">book now</a>
               </div>
           </div>
        </div>  
    )
}
