'use strict';

let bodyEle = document.getElementById('body');
let sect = document.getElementById('sec');
let tableEle = document.getElementById('tableEle');

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Place(name,minCus,maxCus,avgCus){
  this.name=name;
  this.minCus=minCus;
  this.maxCus=maxCus;
  this.avgCus=avgCus;
  this.cookiePerH=[];
  this.total=0;
  Place.allPlace.push(this);
}
Place.allPlace=[];

function headRow(){
  let trEle = document.createElement('tr');
  tableEle.appendChild(trEle);

  let thEle = document.createElement('th');
  thEle.textContent='';
  trEle.appendChild(thEle);

  for(let i=0;i<hours.length;i++){
    let thEle = document.createElement('th');
    thEle.textContent=hours[i];
    trEle.appendChild(thEle);
  }
  let thEle2 = document.createElement('th');
  thEle2.textContent='Total Daily Location';
  trEle.appendChild(thEle2);
}


Place.prototype.render=function(){
  let trEle = document.createElement('tr');
  tableEle.appendChild(trEle);4;

  for(let i =0;i<hours.length;i++){
    let cooki=Math.ceil(getRandomNum(this.minCus,this.maxCus)*this.avgCus);
    this.cookiePerH.push(cooki);
    this.total+=cooki;
    let tdEle = document.createElement('td');
    tableEle.appendChild(tdEle);
    tdEle.textContent=cooki;
  }


};
headRow();
new Place('Seatle',23,65,6.3);

function tfootEle(){
  let trEle = document.createElement('tr');
  tableEle.appendChild(trEle);

  let tfootEle = document.createElement('tfoot');
  tableEle.appendChild(tfootEle);
  tfootEle.textContent='';
  for(let i=0;i<hours.length;i++){
    let thEle = document.createElement('tfoot');
    
    trEle.appendChild(thEle);
  }
  let thEle2 = document.createElement('tfoot');
  
  trEle.appendChild(thEle2);
}



// render();
tfootEle();


