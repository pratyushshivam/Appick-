import React from 'react'
import "./Featured.css";
import './TopPicks.css'
import Button from '@material-ui/core/Button';

function TopPicks({ name1,name2 }) {
    return (
        <div className="welcome__toppicks">
               <div className="welcome__featured welcome__featured__toppicks ">
      <div className="flexchange">
      <div className="welcome__featured__header welcome__featured__header__onlyrotate acerchange">
    <h1 className="acers">{name1}</h1>
      </div>
      <div className="scrolled ace2" id="slider">
        <div className="welcome__featured__items idmain">
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

            
        </div>
        <div className="welcome__featured welcome__featured__toppicks ">
      <div className="flexchange ">
      <div className="welcome__featured__header welcome__featured__header__onlyrotate welcome__featured__header__onlyrotate_main acf">
    <h1 className="acers2">{name2}</h1>
      </div>
      <div className="scrolled ace" id="slider">
        <div className="welcome__featured__items idmain2">
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

            
        </div>
        </div>
    )
}

export default TopPicks
