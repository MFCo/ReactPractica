import React, { Component } from 'react';
import Count from './count';
import NameForm from './form';
import withSubscription from './subscriptor';


class TableRow extends React.Component {  
  render() {
    const {data} = this.props;
    {console.log(data)}
    const row = data.map((data) =>
    <tr key={data._id}>
      <td>{data.name}</td>
      <td>{data.user}</td>
      <td>{data.status}</td>
      <td>{data.start}</td>
    </tr>
    )
    return (
      <h3>{row}</h3>
    );
  }
}

class Table extends React.Component {  
  constructor(props) {
    super(props);
    this.newTast = this.newTask.bind(this);
    this.state = {
      data:[],
    };
  }

  newTask(t){
    console.log("ENTRO ACA A NEWTASK");
    var newData = this.state.data.slice();
    newData.push(t);
    console.log(newData);
    this.setState({data:newData});
  }

  componentDidMount(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",'http://localhost:5000/tasks',  true);

    xmlhttp.onload = () => {
          var obj = JSON.parse(xmlhttp.response);
          console.log(obj);
          this.setState({data: obj});
    };
    xmlhttp.send(null);
  }

renderChildren(props) {
  return React.Children.map(props.children, child => {
    if (child.type === NameForm)
      return React.cloneElement(child, {
        newTask: this.newTask.bind(this)
      })
    else
      return child
  })
}

  render() {
    return (
      <table>
        <TableRow data={this.state.data} />
        {this.renderChildren(this.props)}
        <Count />
      </table>
    );
  }
}

const TableWithSubscription = withSubscription(
  Table,
  (DataSource) => DataSource.getInput()
);

export default Table;
