import React from 'react'
import Overview from './Images/Overview.svg';
import Stats from './Images/Stats.svg';
import Project from './Images/Project.svg';
import Chat from './Images/Chat.svg';
import Calendar from './Images/Calendar.svg';
import Setting from './Images/Setting.svg';
import Logout from './Images/Logout.svg';
import { useNavigate } from 'react-router-dom';
import "../App.css";
function Sidebar() {
  const navigate = useNavigate();
  const handleClick = () =>{
    localStorage.removeItem("Auth Token");
    navigate("/login");
  }
  return (
    <div className='d-flex flex-column position-fixed'>
        <h4 className='pt-5 ps-4'>.taskez</h4>
        <div className='pt-5 ps-4'>
        <h6> <img alt="x" src={Overview}/> Overview</h6>
        <h6> <img alt="x" src={Stats}/> Stats</h6>
        <h6 style={{color:'#212121'}}> <img alt="x" src={Project}/> Projects</h6>
        <h6> <img alt="x" src={Chat}/> Chats</h6>
        <h6> <img alt="x" src={Calendar}/> Calendar</h6>
        </div>
        <div className='pt-5 ps-4 footer'>
            <h6><img alt="x" src={Setting}/> Setting</h6>
            <button className='buttons' onClick={handleClick}><h6><img alt="x" src={Logout}/> Logout</h6> </button>
        </div>
    </div>
  )
}

export default Sidebar