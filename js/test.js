'use strict';

let tableDiv = document.getElementById('parent');
let table = document.createElement('table');
tableDiv.appendChild(table);

let form = document.getElementById('form');

let headerTitles = ['User', 'Type', 'Price', 'Condition'];

let mobiles = [];

function Mobile(name, type) {

  this.name = name;
  this.type = type;
  this.price = random(100, 500);

  mobiles.push(this);
}

//get random number for the price
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//render as table
Mobile.prototype.render = function () {
  let tableRows = document.createElement('tr');
  table.appendChild(tableRows);

  let tableCol1 = document.createElement('td');
  tableRows.appendChild(tableCol1);
  tableCol1.textContent = this.name;

  let tableCol2 = document.createElement('td');
  tableRows.appendChild(tableCol2);
  tableCol2.textContent = this.type;

  let tableCol3 = document.createElement('td');
  tableRows.appendChild(tableCol3);
  tableCol3.textContent = this.price;

  let tableCol4 = document.createElement('td');
  tableRows.appendChild(tableCol4);

  if (this.price > 200) {
    tableCol4.textContent = 'New';

  } else {
    tableCol4.textContent = 'Used';

  }

};

//make header
function header() {

  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  for (let i = 0; i < headerTitles.length; i++) {

    let headerCol = document.createElement('th');
    headerRow.appendChild(headerCol);
    headerCol.textContent = headerTitles[i];
  }


}

//form part
form.addEventListener('submit', submitter);


function submitter(event) {
  event.preventDefault;

  let name = event.target.user.value;
  let type = event.target.type.value;

  let newObj = new Mobile(name, type);
  setItem();
  newObj.render();

}

//local storage
function setItem() {
  let mobilesString = JSON.stringify(mobiles);
  localStorage.setItem('mobile', mobilesString);
}

function getData() {
  let mobileData = localStorage.getItem('mobile');
  let parseMobileData = JSON.parse(mobileData);

  if (parseMobileData) {
    for (let i = 0; i < parseMobileData.length; i++) {
      new Mobile(parseMobileData[i].name, parseMobileData[i].type, parseMobileData[i].price);

    }
  }
}

getData();

header();

for (let i = 0; i < mobiles.length; i++) {
  mobiles[i].render();

}
