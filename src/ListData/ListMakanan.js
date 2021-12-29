import React, { Component } from 'react';

class ListMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: this.props.linkgambar,
    };
  }
  render() {
    return (
      <div>
        <center>
          <img
            src={this.state.datalist}
            alt="Product Makanan"
            width="150"
          ></img>
        </center>
      </div>
    );
  }
}

export default ListMakanan;
