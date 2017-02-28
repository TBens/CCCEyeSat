/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function allowDrop(ev) {
    console.log("Can drop here");
    ev.preventDefault();
}

function drag(ev) {
    console.log("Drag begins");
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    console.log("Dropped on a view");
    window.alert("Not implemented yet.");
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
}
