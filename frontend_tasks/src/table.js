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
    console.log("asdasd");
    super(props);
    this.state = {
      data:["LOADING"],
    };
  }

  componentDidMount(){
    var xmlhttp = new XMLHttpRequest();
    console.log("qwe");

    xmlhttp.open("GET",'http://localhost:5000/tasks',  true);

    xmlhttp.onload = () => {
          var obj = JSON.parse(xmlhttp.response);
          this.setState({data: obj});
    };
    xmlhttp.send(null);
  }

  render() {
    return (
      <table>
        <TableRow data={this.state.data} />
      </table>
    );
  }
}

export default Table;
