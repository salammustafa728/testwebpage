'use strict';

const formSele = document.getElementById('formS');
const mainS = document.getElementById('mainSec');
const btnsave = document.getElementById('btnSave');

const selectE = document.getElementById('flowers');
// const imgE = document.getElementById('imgFlower');

const tableF = document.getElementById('tableFlower');

function Flower(name,img,season){
  this.name=name;
  this.img=`./img2/${img}.jpeg`;
  this.season=season;
  Flower.allfolwer.push(this);
}

Flower.allfolwer=[];


Flower.prototype.render=function(){
  // let tableS = document.createElement('table');
  // mainS.appendChild(tableS);

  let trE = document.createElement('tr');
  tableF.appendChild(trE);

  for(let i=0;i<Flower.allfolwer.length;i++){
    let tdImg = document.createElement('td');
    let imgE = document.createElement('img');
    imgE.src = Flower.allfolwer[i].img;
    tdImg.appendChild(imgE);
    trE.appendChild(tdImg);
    tdImg.textContent = imgE.src;

    let tdName = document.createElement('td');
    trE.appendChild(tdName);
    tdName.textContent = Flower.allfolwer[i].name;

    let tdSeason = document.createElement('td');
    trE.appendChild(tdSeason);
    tdSeason.textContent = Flower.allfolwer[i].season;
  }
};

let imgArr=['Alstroemerias','Gardenias','Orchids','Peonies','Roses','Sunflowers','Tulips'];

for(let i=0; i<imgArr.length;i++){
  let optionE = imgArr[i];
  let opt = document.createElement('option');
 
  opt.textContent= optionE;
  opt.value=optionE;
  selectE.appendChild(opt);

}



btnsave.addEventListener('click',imghandler);


function imghandler(e){
  e.preventDefault();

  
  const name = e.target.nameImg.value;
  const season = e.target.season.value;

  let newFlower = new Flower(name,img,season);

  newFlower.render();

}
// const FlowerImgPath= function(name,path){
// this.name=name;
// this.path=path;

// };
// FlowerImgPath.allpath=[];
// function generateFlower(){

// }
