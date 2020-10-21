import React from "react";
// import ReactDOM from 'react-dom'
import "./Featured.css";
import Button from '@material-ui/core/Button';



function Featured() {




 
  return (
    <div className="welcome__featured">
      <div className="flexchange">
      <div className="welcome__featured__header welcome__featured__header__onlyrotate">
        <h1>Featured</h1>
      </div>
      <div className="scrolled move" id="slider">
        <div className="welcome__featured__items move">
          <div className="welcome__featured__items__main">
            {/* designing the item content */}
            <div className="welcome__featured__items__main__top">
              <div className="welcome__featured__items__main__top__rect"></div>
              <div className="welcome__featured__items__main__top__circle"></div>
            </div>
            <div className="welcome__featured__items__main__bottom"></div>
          </div>
          <div className="welcome__featured__items__main">
            <div className="welcome__featured__items__main__top">
              <div className="welcome__featured__items__main__top__rect"></div>
              <div className="welcome__featured__items__main__top__circle"></div>
            </div>
            <div className="welcome__featured__items__main__bottom"></div>
          </div>
          <div className="welcome__featured__items__main">
            <div className="welcome__featured__items__main__top">
              <div className="welcome__featured__items__main__top__rect"></div>
              <div className="welcome__featured__items__main__top__circle"></div>
            </div>
            <div className="welcome__featured__items__main__bottom"></div>
          </div>
          <div className="welcome__featured__items__main">
            <div className="welcome__featured__items__main__top">
              <div className="welcome__featured__items__main__top__rect"></div>
              <div className="welcome__featured__items__main__top__circle"></div>
            </div>
            <div className="welcome__featured__items__main__bottom"></div>
          </div>
          <div className="welcome__featured__items__main">
            <div className="welcome__featured__items__main__top">
              <div className="welcome__featured__items__main__top__rect"></div>
              <div className="welcome__featured__items__main__top__circle"></div>
            </div>
            <div className="welcome__featured__items__main__bottom"></div>
          </div>
          <div className="welcome__featured__items__main">
            <div className="welcome__featured__items__main__top">
              <div className="welcome__featured__items__main__top__rect"></div>
              <div className="welcome__featured__items__main__top__circle"></div>
            </div>
            <div className="welcome__featured__items__main__bottom"></div>
          </div>
          <div className="welcome__featured__items__main">
            <div className="welcome__featured__items__main__top">
              <div className="welcome__featured__items__main__top__rect"></div>
              <div className="welcome__featured__items__main__top__circle"></div>
            </div>
            <div className="welcome__featured__items__main__bottom"></div>
          </div>
        </div>
      </div>
      </div>
      <div className="welcome__featured__button">
      <Button className="welcome__body__main__middle__buttons__buttonstore buttonanother" variant="contained" color="primary" >View all</Button>
        


      </div>






      {/* AGAIN */}









      <div className="welcome__featured__header">
        <h1>Categories</h1>
      </div>
      <div className="welcome__featured__header__para">
        <p>Explore curated lists of top streaming, networking digital platforms.</p>
      </div>
      <div className="scrolled scrolleddown">
        <div className="welcome__featured__items modifyDiv">
          <div className="welcome__featured__items__main mod1 ">
            {/* designing the item content */}
            <h1>Entertainment</h1>
        
          </div>
          <div className="welcome__featured__items__main mod1">
          <h1>Music</h1>
     
          </div>
          <div className="welcome__featured__items__main mod1">
          <h1>Social Networking</h1>
          
        
          </div>
          <div className="welcome__featured__items__main mod1">
          <h1>Productivity</h1>
           
      
          </div>
          <div className="welcome__featured__items__main mod1">
          <h1>Online Streaming</h1>
            
            
          </div>
          <div className="welcome__featured__items__main mod1">
          <h1>Coming Soon</h1>
            
            
          </div>
          <div className="welcome__featured__items__main mod1">
          <h1>Coming Soon</h1>
            
            
          </div>
          
        </div>
      </div>
      <div className="welcome__featured__button">
      <Button className="welcome__body__main__middle__buttons__buttonstore buttonanother " variant="contained" color="primary" >View all</Button>
        


      </div>
      
    </div>
  );
}

// window.onload=function(){
//   document.addEventListener('DOMContentLoaded', function () {
      
// const slider = document.querySelector('.scrolled');
// let isDown = false;
// let startX;
// let scrollLeft;



// ReactDOM.findDOMNode.slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//   });
//   slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });
//   slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });





// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });
   
// });


// }

export default Featured;

