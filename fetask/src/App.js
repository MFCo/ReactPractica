import React, { Component } from 'react';

class TableRow extends React.Component {  
  render() {
    const {data} = this.props;

    const row = data.map((data) =>
    <tr key={data._id}>
      <td>{data.name}</td>
      <td>{data.user}</td>
      <td>{data.status}</td>
      <td>{data.start}</td>
    </tr>
    );
    return (
      <span>{row}</span>
    );
  }
}

class Table extends React.Component {  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <TableRow data={this.props.data} />
      </table>
    );
  }
}

export default Table;
