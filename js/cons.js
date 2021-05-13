// 'use strict';

// // let bodyEle = document.getElementById('body');
// // let sect = document.getElementById('sec');
// let tableEle = document.getElementById('tableEle');
// let formLoc = document.getElementById('Loc-form');

// function getRandomNum(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// function Place(name,minCus,maxCus,avgCus){
//   this.name=name;
//   this.minCus=minCus;
//   this.maxCus=maxCus;
//   this.avgCus=avgCus;
//   this.cookiePerH=[];
//   this.total=0;
//   Place.allPlace.push(this);
// }
// Place.allPlace=[];

// Place.prototype.getCustomer=function(){
//   for(let i=0;i<hours.length;i++){
//     let cooki=Math.ceil(getRandomNum(this.minCus,this.maxCus)*this.avgCus);
//     this.cookiePerH.push(cooki);
//     this.total+=cooki;
//     console.log(`${hours[i]}  ${this.cookiePerH[i]} cookie `);
//   }

// };


// Place.prototype.render=function(){
//   this.getCustomer();

//   let trEle = document.createElement('tr');
//   tableEle.appendChild(trEle);

//   let tdEle = document.createElement('td');
//   trEle.appendChild(tdEle);
//   tdEle.textContent=this.name;

//   for(let i =0;i<hours.length;i++){
//     let tdEle = document.createElement('td');
//     trEle.appendChild(tdEle);
//     tdEle.textContent=this.cookiePerH[i];
//   }
//   let tdTotal = document.createElement('td');
//   trEle.appendChild(tdTotal);
//   tdTotal.textContent=this.total;

// };

// function headRow(){
//   let trEle = document.createElement('tr');
//   tableEle.appendChild(trEle);

//   let thEle = document.createElement('th');
//   thEle.textContent='';
//   trEle.appendChild(thEle);

//   for(let i=0;i<hours.length;i++){
//     let thEle = document.createElement('th');
//     thEle.textContent=hours[i];
//     trEle.appendChild(thEle);
//   }
//   let thEle2 = document.createElement('th');
//   thEle2.textContent='Total Daily Location';
//   trEle.appendChild(thEle2);
// }

// headRow();


// function tfootEle(){
//   let trfoot = document.createElement('tr');
//   tableEle.appendChild(trfoot);

//   let tfootEle = document.createElement('th');
//   trfoot.appendChild(tfootEle);
//   tfootEle.textContent='Total';

//   let totalOfTotal=0;
//   for(let i=0;i<hours.length;i++){
//     let thEle = document.createElement('th');
//     let hourlyTotal=0;
//     for(let j=0;j<Place.allPlace.length;j++){
//       hourlyTotal+=Place.allPlace[j].cookiePerH[i];
//       totalOfTotal+=Place.allPlace[j].cookiePerH[i];
//     }
//     thEle.textContent=hourlyTotal;
//     trfoot.appendChild(thEle);

//   }

//   let thEle2 = document.createElement('th');
//   thEle2.textContent=totalOfTotal;
//   trfoot.appendChild(thEle2);
// }

// let seatle= new Place('Seatle',23,65,6.3);
// let tokyo= new Place('Tokyo',3,24,1.2);
// let dubai= new Place('Dubai',29,60,2.3);
// let paris= new Place('Paris',20,35,8.3);
// let lima= new Place('Lima',30,65,7.3);



// seatle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();





// // tfootEle();

// formLoc.addEventListener('submit',renerEvent);
// function renerEvent(e){
//   e.preventDefault();

//   const loc = e.target.LocName.value;
//   const minCus = e.target.num.value;
//   const maxCus= e.target.max.value;
//   const avgCus = e.target.avg.value;

//   let newLoc = new Place(loc,minCus,maxCus,avgCus);
//   let rowTable = tableEle.rows.length;
//   tableEle.deleteRow(rowTable-1);
//   newLoc.getCustomer();
//   newLoc.cookiePerH;
//   newLoc.render();
//   tfootEle();
//   console.log(loc,minCus,maxCus,avgCus);
//   console.log(e);
//   // render();
// }
// // function render(){
// //   for(let i=0;Place.allPlace.length;i++){
// //     Place.allPlace[i].render();
// //   }
// // }


// // render();
// tfootEle();


'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let CookieTable = document.getElementById('CookieTable');
let cookiForm = document.getElementById('cookiForm');

function Cookie(name, mincust, maxcust, avgCus) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgCus = avgCus;
  this.cookiesPerHour = [];
  this.customerPerHour = [];
  this.total = 0;
  Cookie.allCity.push(this);
}

Cookie.allCity = [];

Cookie.prototype.gitCustNumber = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiee = Math.ceil(getRandomValue(this.mincust, this.maxcust) * this.avgCus);
    this.cookiesPerHour.push(cookiee);
    this.total += cookiee;
    console.log(`${hours[i]} : ${this.cookiesPerHour[i]}`);
  }
};


Cookie.prototype.render = function () {
  this.gitCustNumber();

  const tr = document.createElement('tr');
  CookieTable.appendChild(tr);

  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.name;

  for(let i = 0; i < hours.length; i++) {
    let tContent = document.createElement('td');
    tr.appendChild(tContent);
    tContent.textContent = this.cookiesPerHour[i];
  }

  let tdTotal = document.createElement('td');
  tr.appendChild(tdTotal);
  tdTotal.textContent = this.total;
};


function heading() {
  let thead = document.createElement('tr');
  CookieTable.appendChild(thead);

  let thEle = document.createElement('th');
  thead.appendChild(thEle);
  thEle.textContent = '';

  for (let i = 0; i < hours.length; i++) {
    let thEle = document.createElement('th');
    thead.appendChild(thEle);
    thEle.textContent = hours[i];
  }

  let th1Ele = document.createElement('th');
  thead.appendChild(th1Ele);
  th1Ele.textContent = 'Total Daily Location';
}

function footers() {
  let tfoot = document.createElement('tr');
  CookieTable.appendChild(tfoot);

  let thEle = document.createElement('th');
  tfoot.appendChild(thEle);
  thEle.textContent = 'Total';

  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let thEle = document.createElement('th');
    let hourlyTotal = 0;
    for(let j = 0; j < Cookie.allCity.length; j++) {
      hourlyTotal += Cookie.allCity[j].cookiesPerHour[i];
      totalOfTotals += Cookie.allCity[j].cookiesPerHour[i];
    }
    thEle.textContent = hourlyTotal;
    tfoot.appendChild(thEle);
  }

  let th1Ele = document.createElement('th');
  tfoot.appendChild(th1Ele);
  th1Ele.textContent = totalOfTotals;
}
// let test =0;
new Cookie('Seattle', '23', '65', '6.3');
new Cookie('Tokyo', '3', '24', '1.2');
new Cookie('Dubai', '11	', '38', '3.7');
new Cookie('Paris', '20', '38', '2.3');
new Cookie('Lima', '2', '16', '4.6');



heading();


function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(Cookie.allCity);




cookiForm.addEventListener('submit',eventSave);

function eventSave(event){
  event.preventDefault();
  const locName = event.target.Lname.value;
  const minCus = event.target.miCus.value;
  const maxCus = event.target.maxCus.value;
  const avgCUs = event.target.AvgCook.value;

  let newLocation = new Cookie(locName,minCus,maxCus,avgCUs);
  let rowsTable = CookieTable.rows.length;
  CookieTable.deleteRow(rowsTable-1);
  newLocation.cookiesPerHour;
  newLocation.render();
  footers();
  console.log(locName,minCus,maxCus,avgCUs);
  console.log(event);

}

function render() {
  for(let i = 0; i < Cookie.allCity.length; i++){
    Cookie.allCity[i].render();
  }
}



render();
footers();
