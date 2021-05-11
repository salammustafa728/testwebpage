'use strict';

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let loc=['seatle','tokyo','dubai','paris','lima'];
let sectionUl = document.getElementById('sec-ul');
let total=0;
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  let seatle ={
      name:'seatle',
      minCus:23,
      maxCus:65,
      avgCus:6.3,
      cookiPerH:[],
    //   custumerPerH:[],
    getCustomer:function(){
        let h2Ele = document.createElement('h2');
        h2Ele.textContent='Seatle';
        sectionUl.appendChild(h2Ele);
        let ulEle=document.createElement('ul');
        ulEle.appendChild(ulEle);
        for(let i=0;i<hours.length;i++){
            let cookie=Math.floor(getRandomNum(this.minCus,this.maxCus)*this.avgCus);
            total+=cookie;
            this.cookiPerH.push(cookie);
            let liEle = document.createElement('li');
            liEle.textContent=`${hours} ${this.cookiPerH[i]} cookie`
            ulEle.appendChild(liEle);
        }
        let liEleTotal = document.createElement('li');
        ulEle.appendChild(liEleTotal);
        liEleTotal.textContent=`total cookie is ${total} cookie`
    }

  }
  seatle.getCustomer();