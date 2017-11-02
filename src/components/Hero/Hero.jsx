import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { retrieveQuote, retrieveQuoteDB } from '../../actions';
import { connect } from 'react-redux';

class Hero extends Component {

  componentDidMount() {
    // this.props.retrieveQuote();
  }

  render(){
    return (
      <div>
        {
        }
      </div>
    );
  }
}

Hero.propTypes = {
  retrieveQuote: PropTypes.func
};

const mapStateToProps = store => ({
  quote: store.quote
});

const mapDispatchToProps = dispatch => ({
  retrieveQuote: () => dispatch(retrieveQuote())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
