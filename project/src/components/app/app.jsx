import React from 'react';
import IndexPage from '../index-page';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <IndexPage cards={props.cards} />
  );
}

App.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default App;
