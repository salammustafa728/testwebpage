'use strict';

// let bodyEle = document.getElementById('body');
// let sect = document.getElementById('sec');
let tableEle = document.getElementById('tableEle');
let formLoc = document.getElementById('Loc-form');

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

Place.prototype.getCustomer=function(){
  for(let i=0;i<hours.length;i++){
    let cooki=Math.ceil(getRandomNum(this.minCus,this.maxCus)*this.avgCus);
    this.cookiePerH.push(cooki);
    this.total+=cooki;
    console.log(`${hours[i]}  ${this.cookiePerH[i]} cookie `);
  }

};

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
  this.getCustomer();

  let trEle = document.createElement('tr');
  tableEle.appendChild(trEle);

  let tdEle = document.createElement('td');
  trEle.appendChild(tdEle);
  tdEle.textContent=this.name;

  for(let i =0;i<hours.length;i++){
    let tdEle = document.createElement('td');
    trEle.appendChild(tdEle);
    tdEle.textContent=this.cookiePerH[i];
  }
  let tdTotal = document.createElement('td');
  trEle.appendChild(tdTotal);
  tdTotal.textContent=this.total;

};
headRow();


new Place('Seatle',23,65,6.3);
new Place('Tokyo',3,24,1.2);
new Place('Dubai',29,60,2.3);
new Place('Paris',20,35,8.3);
new Place('Lima',30,65,7.3);
// seatle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
// render();


function tfootEle(){
  let trfoot = document.createElement('tr');
  tableEle.appendChild(trfoot);

  let tfootEle = document.createElement('th');
  trfoot.appendChild(tfootEle);
  tfootEle.textContent='Total';

  let totalOfTotal=0;
  for(let i=0;i<hours.length;i++){
    let thEle = document.createElement('th');
    let hourlyTotal=0;
    for(let j=0;j<Place.allPlace.length;j++){
      hourlyTotal+=Place.allPlace[j].cookiePerH[i];
      totalOfTotal+=Place.allPlace[j].cookiePerH[i];
    }
    thEle.textContent=hourlyTotal;
    trfoot.appendChild(thEle);

  }

  let thEle2 = document.createElement('th');
  thEle2.textContent=totalOfTotal;
  trfoot.appendChild(thEle2);
}




// tfootEle();

formLoc.addEventListener('submit',renerEvent);
function renerEvent(e){
  e.preventDefault();

  const loc = e.target.LocName.value;
  const minCus = e.target.num.value;
  const maxCus= e.target.max.value;
  const avgCus = e.target.avg.value;

  let newLoc = new Place(loc,minCus,maxCus,avgCus);
  let rowTable = tableEle.rows.length;
  tableEle.deleteRow(rowTable-1);
  newLoc.getCustomer();
  newLoc.cookiePerH;
  newLoc.render();
  tfootEle();
  console.log(loc,minCus,maxCus,avgCus);
  console.log(e);
  // render();
}
function render(){
  for(let i=0;Place.allPlace.length;i++){
    Place.allPlace[i].render();
  }
}


render();
tfootEle();
