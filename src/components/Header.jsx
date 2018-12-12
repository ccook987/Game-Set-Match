import React, { Component } from 'react';
import { signIn, signOut } from '../actions/index';
import { logoutUsers } from '../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push('/');
    }
  }
   render() {
    return (
      <div>
        <button onClick={this.props.signIn}>Log In</button>
      </div>
    )
  }
};

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, { signIn })(Header);

// <button onClick={e => {e.preventDefault();
//   this.props.dispatch(signOut())}}>Log Out</button>
// <button onClick={e => {e.preventDefault();
//   this.props.dispatch(signIn())}}>Log In</button>
