import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { upVoting, downVoting, deleteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  upVoting={this.props.upVoting}
                  downVoting={this.props.downVoting}
                  deleteQuote={this.props.deleteQuote}
                  quote={quote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upVoting: id => dispatch(upVoting(id)),
    downVoting: id => dispatch(downVoting(id)),
    deleteQuote: id => dispatch(deleteQuote(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
