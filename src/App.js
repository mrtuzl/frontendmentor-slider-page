import React, { useState, useEffect } from 'react';
import './App.css';
import Testimonial from './Testimonial';
import tanya from './image-tanya.jpg';
import john from './image-john.jpg';

function App() {

  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', onKeySlider, true)
  }, [])

  function onKeySlider(e) {
    if (e.key === "ArrowRight") {
      setNumber(1);
    }
     else if(e.key === "ArrowLeft") {
      setNumber(0);
    }
    }

    function onClickPrev() {
      setNumber(0)
    }

    function onClickNext() {
      setNumber(1)
    }
    
      if (number === 0) {
  return (
    <div className="App" onKeyDown={onKeySlider}>
          <main className='container'> 
          <section> 
            
            <Testimonial 
            name="Tanya Sinclair"
            department="UX Engineer"
            text="“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”"
            image={tanya}
            eventback={onClickPrev}
            eventforward={onClickNext}
            />

          </section>
          </main>
    </div>
  );
}
else if (number === 1) {
  return (
    <div className="App" onKeyDown={onKeySlider}>
          <main className='container'> 
          <section> 
            
            <Testimonial 
            name="John Tarkpor"
            department="Junior Front-end Developer"
            text="“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”"
            image={john}
            eventback={onClickPrev}
            eventforward={onClickNext}
            />
          </section>
          </main>
    </div>
  );
}
}

export default App;
