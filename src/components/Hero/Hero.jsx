import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { retrieveQuote, retrieveQuoteDB } from '../../actions';
import { connect } from 'react-redux';

class Hero extends Component {

  componentDidMount() {
    // this.props.retrieveQuote();
    this.props.retrieveQuoteDB();
  }

  render(){
    return (
      <div>
        {
          this.props.quotesDB.map(quote => {
            return (
              <div>
                <p>{quote.quote}</p>
                <p>{quote.author}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

Hero.propTypes = {
  retrieveQuote: PropTypes.func,
  retrieveQuoteDB: PropTypes.func
};

const mapStateToProps = store => ({
  quote: store.quote,
  quotesDB: store.quotesDB
});

const mapDispatchToProps = dispatch => ({
  retrieveQuote: () => dispatch(retrieveQuote()),
  retrieveQuoteDB: () => dispatch(retrieveQuoteDB())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
