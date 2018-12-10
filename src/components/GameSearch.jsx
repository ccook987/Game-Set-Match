import React from 'react';
import { fetchGameTitle } from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



function GameSearch({dispatch}){
  let input;
  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchGameTitle(input.value.trim()));
          console.log('game searched:');
          console.log(input.value.trim());
          input.value = '';
        }}>
        <input placeholder="Game Title" ref={node => {
            input = node;
          }}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.gameById.name,
    id: state.gameById.id
  };
};

GameSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(GameSearch);
