import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUserLogin, newUserLogout } from './../actions';
import logo from '../assets/images/gsm-logo-white-nobg-10.png';

function Header(props, { dispatch }) { //dispatch is coming thru

  function handleNewLogin(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(newUserLogin());
  };

  function handleLogout(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(newUserLogout());
  };

  const buttonStyles = {
    textAlign: 'right',
    paddingTop: '35px',
    paddingBottom: '30px',
    marginRight: '40px'
  }

  const loginStyles = {
    marginRight: '15px'
  }

  const logoStyles = {
    width: '375px',
    marginTop: '150px',
    marginBottom: '15px'
  }

  return(
    <div>
      <div style={buttonStyles}>
        <button className='loginLogout' style={loginStyles} onClick={handleNewLogin}>Login</button>
        <button className='loginLogout' onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <img style={logoStyles} src={logo}></img>
      </div>
    </div>
  );
}



export default connect()(Header);
