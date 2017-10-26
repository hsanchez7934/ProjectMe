import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { retrieveQuote } from '../../actions';
import { connect } from 'react-redux';

class Hero extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = store => ({
  quote: store.quote
});

const mapDispatchToProps = dispatch => ({
  retrieveQuote: () => dispatch(retrieveQuote())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
