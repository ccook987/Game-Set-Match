import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUserLogin, newUserLogout } from './../actions';

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

  return(
    <div>

      <button onClick={handleNewLogin}>Login Here Please</button>
      <button onClick={handleLogout}>Logout Here Please</button>
    </div>
  );
}



export default connect()(Header);
