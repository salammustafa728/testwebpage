'use strict';

const formSele = document.getElementById('formS');
const mainS = document.getElementById('mainSec');

function Flower(name,img,season){
  this.name=name;
  this.img=`./img2/${img}.jpeg`;
  this.season=season;
  Flower.allfolwer.push(this);
}

Flower.allfolwer=[];


Flower.prototype.render=function(){
    let tableS = document.createElement('table');
    mainS.appendChild(tableS);

    let trE = document.createElement('tr');
    tableS.appendChild(trE);

    
};


// const FlowerImgPath= function(name,path){
// this.name=name;
// this.path=path;

// };
// FlowerImgPath.allpath=[];
// function generateFlower(){

// }
