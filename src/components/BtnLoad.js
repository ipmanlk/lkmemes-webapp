import React, { Component } from 'react';

class BtnLoad extends Component {
  render() {
    return (
      <button onClick={this.props.loadMore} className="btn btn-success btn-block" style={{marginTop: 10 + "px"}}> 
          Load More
      </button>
    )
  }
}

export default BtnLoad;