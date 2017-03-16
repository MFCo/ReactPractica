import React, { Component } from 'react';

class Count extends React.Component{
      constructor(props) {
    super(props);
    this.state = {
      data: -1,
    };
  }
  componentDidMount(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET",'http://localhost:5000/tasks',  true);

    xmlhttp.onload = () => {
          var obj = JSON.parse(xmlhttp.response);
          this.setState({data: Object.keys(obj).length});
    };
    xmlhttp.send(null);
  }
    render() {
    return (
      <h2> {this.state.data} </h2>
    );
  }
}

export default Count;