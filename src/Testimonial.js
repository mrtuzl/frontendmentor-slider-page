import React from 'react';
import './Testimonial.css';
import next from './icon-next.svg';
import prev from './icon-prev.svg';


function Testimonial(props) {
  return (
    <div className='testimonial-container'> 
    <div className='box'> 
        <div className='content'> 
            <p> {props.text} </p>
            <div className='s'> <span>  {props.name} </span> <span>  {props.department}</span></div>
        </div>
        <div className='picture'> 
        <img className="person" src={props.image} alt='testimonial-person'/>
        <div className='btn'> 
        <button  className="prev" onClick={props.eventback}> <img src={prev} alt="icon-prev"/> </button> 
       <button className="next" onClick={props.eventforward}> <img src={next} alt="icon-next"/> </button>
       </div>
       
        </div>
        </div>
    </div>
   
  );
}

export default Testimonial;
