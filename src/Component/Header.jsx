import React from 'react';
// import './Header.css'
import './header.scss';
import MunuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';


function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
      <div className="header__left">
        <IconButton>
          <MunuIcon />
        </IconButton>
        <img src="https://huawei.xda-developers.com/wp-content/uploads/2021/02/Screenshot-2021-02-08-at-18.20.31.png" alt="" />
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input type="text" className='header__inputCaret' placeholder='Search mail' />
        <ArrowDropDownIcon />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar 
          style={{cursor: 'pointer'}}
          onClick={signOut} 
          src={user?.photoUrl} />
      </div>
    </div>
  )
}

export default Header;
