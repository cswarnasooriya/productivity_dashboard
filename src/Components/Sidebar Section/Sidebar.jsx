import React from 'react';
import './sidebar.css';

//images
import logo from '../../Assets/newlogo.png';




//icons 
import {AiOutlinePieChart} from 'react-icons/ai';
import { SlCalender } from "react-icons/sl";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { FiBatteryCharging } from "react-icons/fi";
import { BsChatSquareDots } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { VscSettings } from "react-icons/vsc";




const Sidebar = () => {
  return (
    <div className="sideBar">
        <div className="logoDiv flex">
            <img src={logo} alt='Logo Image'/>
        </div>

        <div className="menu">
            <ul className='navItem'>
                <li className='navList'>
                    <AiOutlinePieChart className='icon'/>
                </li>

                <li className='navList'>
                    <SlCalender className='icon'/>
                </li>
 
                <li className='navList'>
                    <MdOutlineDriveFolderUpload  className='icon'/>
                </li>


                 <li className='navList'>
                    <FiBatteryCharging  className='icon'/>
                </li>

                <li className='navList'>
                    <BsChatSquareDots className='icon'/>
                </li> 


                <li className='navList'>
                    <GiComputerFan className='icon'/>
                </li>


                <li className='navList'>
                    <VscSettings className='icon'/>
                </li> 

            </ul>
        </div>
    </div>
  )
}

export default Sidebar
