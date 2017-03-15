import React from 'react';
import ReactDOM from 'react-dom';
import Table from './App';

var req = new XMLHttpRequest();
req.open("POST",'http://localhost:5000/tasks',  true);
var n = {name:'lelel', user:'mgmg',status:'todo',start:new Date(2017, 9)};
req.setRequestHeader("Content-Type", "application/json");
req.send("asdasd");
req.onload = function(){
  console.log(req.status);
}

req.onerror = function(){
  console.log("ERROR");
}

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET",'http://localhost:5000/tasks',  true);

xmlhttp.onload = function() {
      var obj = JSON.parse(xmlhttp.response);
      console.log(obj);
      ReactDOM.render(<Table data={obj} />, document.getElementById("root"));
}

xmlhttp.send(null);