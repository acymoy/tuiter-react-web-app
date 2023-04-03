import React from "react";
import '../../index.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];

  const selectedOption = {backgroundColor: '#e6e7e7'};

  return (
    <div className='d-flex justify-content-start py-3 ps-0'>
      <div className='col-xs-3 col-lg-12 ps-3'>
        <i className="fa-brands fa-twitter fa-3x" style={{color: '#0d9bf0'}}></i>
        <br />
        <br />
        <ul className='list-group py-3'>
          <Link to = '/tuiter/home' className='list-group-item container-fluid border-0 py-4 rounded-pill' style = {active === 'home' || active === '' ? selectedOption : {}}>
            <div className='container-fluid row p-0 ps-1 d-flex'>
              <div className='col-2 p-0'>
                <i className="fa-solid fa-house fa-xl"></i>
              </div>
              <div className='col-5 p-0 m-0 ps-2 d-none d-xl-block'>
                <span className='text-secondary h5 align-top ps-1'>Home</span>
              </div>
            </div>
          </Link>
          <Link to = '/tuiter/explore' className='list-group-item container-fluid border-0 py-4 rounded-pill' style = {active === 'explore' ? selectedOption : {}}>
            <div className='container-fluid row p-0 ps-1 d-flex'>
              <div className='col-2 p-0'>
                <i className="fa-solid fa-hashtag fa-xl"></i>
              </div>
              <div className='col-5 p-0 m-0 ps-2 d-none d-xl-block'>
                <span className='text-secondary h5 align-top ps-1'>Explore</span>
              </div>
            </div>
          </Link>
          <li className='list-group-item container-fluid border-0 py-4 rounded-pill' style = {active === 'notifications' ? selectedOption : {}}>
            <div className='container-fluid row p-0 ps-1 d-flex'>
              <div className='col-2 p-0'>
                <i className="fa-solid fa-bell fa-xl"></i>
              </div>
              <div className='col-5 p-0 m-0 ps-2 d-none d-xl-block'>
                <span className='text-secondary h5 align-top ps-1'>Notifications</span>
              </div>
            </div>
          </li>
          <li className='list-group-item container-fluid border-0 py-4 rounded-pill' style = {active === 'messages' ? selectedOption : {}}>
            <div className='container-fluid row p-0 ps-1 d-flex'>
              <div className='col-2 p-0'>
                <i className="fa-solid fa-envelope fa-xl"></i>
              </div>
              <div className='col-5 p-0 m-0 ps-2 d-none d-xl-block'>
                <span className='text-secondary h5 align-top ps-1'>Messages</span>
              </div>
            </div>
          </li>
          <li className='list-group-item container-fluid border-0 py-4 rounded-pill' style = {active === 'bookmarks' ? selectedOption : {}}>
            <div className='container-fluid row p-0 ps-1 d-flex'>
              <div className='col-2 p-0'>
                <i className="fa-solid fa-bookmark fa-xl"></i>
              </div>
              <div className='col-5 p-0 m-0 ps-2 d-none d-xl-block'>
                <span className='text-secondary h5 align-top ps-1'>Bookmarks</span>
              </div>
            </div>
          </li>
          <li className='list-group-item container-fluid border-0 py-4 rounded-pill' style = {active === 'toparticles' ? selectedOption : {}}>
            <div className='container-fluid row p-0 ps-1 d-flex'>
              <div className='col-2 p-0'>
                <i className="fa-solid fa-fire fa-xl"></i>
              </div>
              <div className='col-6 p-0 m-0 ps-2 d-none d-xl-block'>
                <span className='text-secondary h5 align-top ps-1 text-nowrap'>Top Articles</span>
              </div>
            </div>
          </li>
          <Link to = '/tuiter/profile' className='list-group-item container-fluid border-0 py-4 rounded-pill' style = {active === 'profile' || active === 'edit-profile' ? selectedOption : {}}>
            <div className='container-fluid row p-0 ps-1 d-flex'>
              <div className='col-2 p-0'>
                <i className="fa-solid fa-user fa-xl"></i>
              </div>
              <div className='col-5 p-0 m-0 ps-2 d-none d-xl-block'>
                <span className='text-secondary h5 align-top ps-1'>Profile</span>
              </div>
            </div>
          </Link>
          <li className='list-group-item container-fluid border-0 py-4 rounded-pill' style = {active === 'more' ? selectedOption : {}}>
            <div className='container-fluid row p-0 ps-1 d-flex'>
              <div className='col-2 p-0'>
                <i className="fa-solid fa-ellipsis fa-xl"></i>
              </div>
              <div className='col-5 p-0 m-0 ps-2 d-none d-xl-block'>
                <span className='text-secondary h5 align-top ps-1'>More</span>
              </div>
            </div>
          </li>
        </ul>
        <div className='d-grid'>
          <button type='button' className='btn btn-lg rounded-pill twitter-color'><span className='fw-bold text-white'>Tweet</span></button>
        </div>
      </div>
    </div>
  )
  /*
  return (
   <div className="list-group">
     <a className="list-group-item"><i className = "fa-brands fa-twitter fa-xl"></i> Tuiter</a>
     <Link to="/tuiter/home" className={`list-group-item ${active === 'home' || active === ''?'active':''}`}>
       <i className="fa-solid fa-house"></i> Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
      <i className = "fa-solid fa-hashtag"></i>Explore
     </Link>
     <Link to="/" className="list-group-item">
       Labs
     </Link>

      <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
        <i className ="fa-solid fa-bell"></i> Notifications
      </a>
      <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
         <i className ="fa-solid fa-envelope"></i> Messages
      </a>
      <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
        <i className ="fa-solid fa-bookmark"></i> Bookmarks
      </a>
      <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
        <i className ="fa-solid fa-list"></i> Lists
      </a>
      <Link to ='/tuiter/profile' className={`list-group-item ${active === 'profile' || active === 'edit-profile'? 'active' : ''}`}>
        <i className ="fa-solid fa-user"></i> Profile
      </Link>
      <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
        <i className ="fa-solid fa-ellipsis"></i> More
      </a>
    </div>
  ); */


};
export default NavigationSidebar;