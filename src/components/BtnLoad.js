import React, { Component } from 'react';

class BtnLoad extends Component {
  render() {
    const {loadMore, theme} = this.props;
    return (
      <button onClick={loadMore} className={theme.btnLoad} style={{marginTop: 10 + "px"}}> 
          Load More
      </button>
    )
  }
}

export default BtnLoad;