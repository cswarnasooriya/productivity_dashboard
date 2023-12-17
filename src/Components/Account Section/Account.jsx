import React from 'react'
import './account.css';
import { PiArrowSquareRightBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

//importing images
import user1 from '../../Assets/user1.png';


const Account = () => {
  return (
    <div className="account">
      <div className="icons flex">
        < PiArrowSquareRightBold className='icon'/>
        <BsThreeDots className='icon'/>
      </div>


      <div className="accountDetails">
        <div className="imageDiv">
          <img src={user1} alt="account user image" />
          <span className='name'>Sandaruwan Warnasooriya</span>
          <span className='position'>Undergraduate Student</span>
          <button className='btn flex'>
            <FaRegEdit  className='icon'/>
            Edit Profile
          </button>
        </div>


        <div className="hoursDiv">
          <span className='title'>Working Hours</span>
          <div className="hoursCard flex">

            <div className="right bg">
              <span>Working Starts</span>
              <h6>09.00 AM</h6>
            </div>

            <div className="left nobg">
              <span>Working Ends</span>
              <h6>05.00 PM</h6>
            </div>

          </div>
        </div>

      

        <h1 className='city'>Colombo North</h1>
        <span className="region">Sri Lanka GMT +8</span>
      </div>
    </div>
  )
}

export default Account
