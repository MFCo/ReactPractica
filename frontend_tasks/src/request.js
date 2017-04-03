import { browserHistory } from 'react-router';

//DEPRECATED SUPERAGENT INSTEAD

export function request(type, link, onloadCustom = () =>{return}, objToPost) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(type, link, true);
    xmlhttp.withCredentials = true;
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(objToPost);

    xmlhttp.onload = () => {
        if (xmlhttp.status === 401) {
            browserHistory.push(JSON.parse(xmlhttp.response).location);
        }
        else {
            onloadCustom(xmlhttp);
        }
    }
    xmlhttp.onerror = function () {
        console.log(arguments);
    }    
}