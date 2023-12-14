import React from 'react';
import './top.css';

//import icons
import { RiSearchEyeLine } from "react-icons/ri";






const Top = () => {
  return (
    <div className='top'>

      <div className="topDiv flex">
        <div className="titleText">
          <span className='title'>Working Productivity</span>
          <p>Let's check your progress</p>
        </div>

        <div className="searchInput flex">
          <RiSearchEyeLine className='icon'/>
          <input type='text' placeholder='Search for anything...'/>

        </div>
      </div>

      <div className="cardDiv flex">
        <div className="cards">

          <div className="card yellowCard flex">


            
            <div className="date">
              <span>Mon</span>
              <h3>18</h3>
            </div>


            <div className="percentage">
              <span className='text'>Productive</span>
              <div className="flex">
                <span className='line'></span>
                <span className='pctg'>87%</span>
              </div>
            </div>


            <div className="time">
              <span className='text'>Productive Time</span>
              <h2>5h 12m</h2>
            </div>



            <div className="workTime">
              <span className='text'>Time at work</span>
              <h2>6h 15m</h2>
            </div>





          </div>

          <div className="card lightGreenCard flex">


            
            <div className="date">
              <span>Tue</span>
              <h3>19</h3>
            </div>


            <div className="percentage">
              <span className='text'>Productive</span>
              <div className="flex">
                <span className='line'></span>
                <span className='pctg'>74%</span>
              </div>
            </div>


            <div className="time">
              <span className='text'>Productive Time</span>
              <h2>3h 10m</h2>
            </div>



            <div className="workTime">
              <span className='text'>Time at work</span>
              <h2>4h 15m</h2>
            </div>





          </div>

          <div className="card darkGreenCard flex">


            
            <div className="date">
              <span>Wed</span>
              <h3>20</h3>
            </div>


            <div className="percentage">
              <span className='text'>Productive</span>
              <div className="flex">
                <span className='line'></span>
                <span className='pctg'>91%</span>
              </div>
            </div>


            <div className="time">
              <span className='text'>Productive Time</span>
              <h2>5h 25m</h2>
            </div>



            <div className="workTime">
              <span className='text'>Time at work</span>
              <h2>5h 45m</h2>
            </div>





          </div>


        </div>
      </div>
      
    </div>
  )
}

export default Top
