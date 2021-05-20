'use strict';

const formFlower = document.getElementById( 'flowerForm' );

const btnSave = document.getElementById( 'btnSave' );
const tableE= document.getElementById( 'tableE' );
const secForm = document.getElementById( 'formSec' );
let imgArr=['Alstroemerias','Gardenias','Orchids','Peonies','Roses','Sunflowers','Tulips'];
// let imgArr2=['Alstroemerias.jpeg','Gardenias.jpeg','Orchids.jpeg','Peonies.jpeg','Roses.jpeg','Sunflowers.jpeg','Tulips.jpeg'];
const selectE = document.getElementById( 'flowers' );


function Flower( img,name,season ){
  this.name=name;
  this.img=`./img2/${img}.jpeg`;
  this.season=season;
  Flower.all.push(this);
}

Flower.all=[];

for(let i=0;i<imgArr.length;i++){
  imgArr[i];
}

for( let i=0; i<imgArr.length;i++ ){
  let optionE = imgArr[i];
  let opt = document.createElement( 'option' );
  opt.textContent= optionE;
  opt.value=optionE;
  selectE.appendChild( opt );
}

let x=0;
Flower.prototype.render=function(){

  tableE.innerHTML='';
  let trE=document.createElement( 'tr' );
  tableE.appendChild( trE );
  // trE.innerHTML='';
  let tdX = document.createElement( 'td' );
  trE.appendChild( tdX );
  tdX.textContent='x';

  let tdImg = document.createElement( 'td' );
  trE.appendChild( tdImg );
  tdImg.textContent=this.img;

  let tdName = document.createElement( 'td' );
  trE.appendChild( tdName );
  tdName.textContent=this.name;

  let tdSeason = document.createElement( 'td' );
  trE.appendChild( tdSeason );
  tdSeason.textContent=this.season;
  sdata();

};
function sdata(){
  localStorage.setItem( 'form',JSON.stringify( Flower.all ) );
}

function formHandler( event ){
  event.preventDefault();

  let imgE = event.target;
  let f= document.getElementById( 'flowers' ).innerHTML=imgE.flowers;

  let flowerName = event.target;
  let fN= document.getElementById( 'flowerName' ).innerHTML=flowerName.flowerName;
  
  let seas= event.target;
  let s = document.getElementById( 'season' ).innerHTML=seas.season;

  let newflower = new Flower( f,fN,s );

  newflower.render();

}


function removFlower( event ){

  let removeFlo = event.target.id;
  for( let i=0;i<Flower.all.length;i++ ){
    if( Flower.all[i]===removeFlo ){
      Flower.all[i].splice( removeFlo,1 );
    }

  }
  sdata();
  render();
}
function clearD(){
  localStorage.clear();
}

function get(){
  let data = JSON.parse( localStorage.getItem( 'form' ) );
  if( data ){
    for( let i=0;i<data.length;i++ ){
      new Flower( data[i].name,data[i].img,data[i].season );
    }

  }
}
get();
btnSave.addEventListener( 'click',formHandler );
removFlower();
clearD();


// 'use strict';

// const formSele = document.getElementById('formS');
// const mainS = document.getElementById('mainSec');
// const btnsave = document.getElementById('btnSave');

// const selectE = document.getElementById('flowers');
// // const imgE = document.getElementById('imgFlower');

// const tableF = document.getElementById('tableFlower');

// function Flower(name,img,season){
//   this.name=name;
//   this.img=`./img2/${img}.jpeg`;
//   this.season=season;
//   Flower.allfolwer.push(this);
// }

// Flower.allfolwer=[];


// Flower.prototype.render=function(){
//   // let tableS = document.createElement('table');
//   // mainS.appendChild(tableS);

//   let trE = document.createElement('tr');
//   tableF.appendChild(trE);

//   for(let i=0;i<Flower.allfolwer.length;i++){
//     let tdImg = document.createElement('td');
//     let imgE = document.createElement('img');
//     imgE.src = Flower.allfolwer[i].img;
//     tdImg.appendChild(imgE);
//     trE.appendChild(tdImg);
//     tdImg.textContent = imgE.src;

//     let tdName = document.createElement('td');
//     trE.appendChild(tdName);
//     tdName.textContent = Flower.allfolwer[i].name;

//     let tdSeason = document.createElement('td');
//     trE.appendChild(tdSeason);
//     tdSeason.textContent = Flower.allfolwer[i].season;
//   }
// };

// let imgArr=['Alstroemerias','Gardenias','Orchids','Peonies','Roses','Sunflowers','Tulips'];

// for(let i=0; i<imgArr.length;i++){
//   let optionE = imgArr[i];
//   let opt = document.createElement('option');

//   opt.textContent= optionE;
//   opt.value=optionE;
//   selectE.appendChild(opt);

// }



// btnsave.addEventListener('click',imghandler);


// function imghandler(e){
//   e.preventDefault();


//   const name = e.target.nameImg.value;
//   const season = e.target.season.value;

//   let newFlower = new Flower(name,img,season);

//   newFlower.render();

// }
// const FlowerImgPath= function(name,path){
// this.name=name;
// this.path=path;

// };
// FlowerImgPath.allpath=[];
// function generateFlower(){

// }


// 'use strict';

// const formFlower = document.getElementById( 'flowerForm' );

// const btnSave = document.getElementById( 'btnSave' );
// const tableE= document.getElementById( 'tableE' );
// const secForm = document.getElementById( 'formSec' );
// let imgArr=['Alstroemerias','Gardenias','Orchids','Peonies','Roses','Sunflowers','Tulips'];
// let imgArr2=['Alstroemerias.jpeg','Gardenias.jpeg','Orchids.jpeg','Peonies.jpeg','Roses.jpeg','Sunflowers.jpeg','Tulips.jpeg'];
// const selectE = document.getElementById( 'flowers' );
// let cart;

// // tableE.addEventListener('click', removeItemFromCart);
// function Flower( imgArray ){
//   // this.name=name;
//   // this.img=`./img/${img}.jpeg`;
//   // this.season=season;
//   this.imgArray=imgArray;

// }

// Flower.all=[];

// Flower.prototype.items=function(name,img,season){
//   let newFlo = new Flower(name,img,season);
//   this.imgArray.push(newFlo);
// };

// Flower.prototype.removeImg= function( item ){
//   this.imgArray.splice(item,1);};

// const FlowerImg=function(name,img,season){
//   this.name=name;
//   this.img=img;
//   this.season=season;
//   FlowerImg.all.push(this);
// };
// FlowerImg.all=[];
// const Imgs = function(filePath, name) {
//   this.filePath = filePath;
//   this.name = name;
//   Imgs.allImgs.push(this);
// };
// Imgs.allImgs=[];

// function generateCatalog() {
//   new Imgs('img2/Alstroemerias.jpeg', 'Alstroemerias');
//   new Imgs('img2/Gardenias.jpeg', 'Gardenias');
//   new Imgs('img2/Peonies.jpeg', 'Peonies');
//   new Imgs('img2/Roses.jpeg', 'Roses');
//   new Imgs('img2/Sunflowers.jpeg', 'Sunflowers');
//   new Imgs('img2/Tulips.jpeg', 'Tulips');

// }
// generateCatalog();
// function clearD(){
//   localStorage.clear();
// }

// function get(){
//   const flowerItem = JSON.parse( localStorage.getItem( 'form' ) )|| [];
//   cart=new Flower(flowerItem);}

// get();

// function render(){
//   get();
//   clearD();
//   showCart();
// }
// function showCart(){
//   for (let i = 0; i < cart.imgArray.length; i++) {
//     let trData = document.createElement('tr');
//     tableE.appendChild(trData);
//     let tdE = document.createElement('td');
//     trData.appendChild(tdE);
//     tdE.textContent = ' x ';

//     let data2 = document.createElement('td');
//     trData.appendChild(data2);
//     data2.textContent = cart.items[i].name;

//     let data3 = document.createElement('td');
//     trData.appendChild(data3);
//     data3.textContent = cart.items[i].img;

//     let data4 = document.createElement('td');
//     trData.appendChild(data4);
//     data4.textContent = cart.items[i].season;
//   }
// }
// btnSave.addEventListener( 'click',handleSubmit );
// // removFlower();
// // clearD();

// let cart2 = new Flower([]);
// let sesa= document.getElementById('season');
// let nameFlower=document.getElementById('flowerName');
// let contentSec=document.getElementById('cartCont');

// function handleSubmit(event) {
//   event.preventDefault();
//   contentSec.innerHTML='';
//   addItemToTable();
//   cart2.sdata();

// }

// function addItemToTable(){
//   let name=nameFlower.value;
//   let sel=selectE.value;
//   let ses=sesa.value;
//   cart.items(name,sel,ses);
// }
// function updateCartPreview() {
//   // TODO: Get the item and quantity from the form
//   // TODO: Add a new element to the cartContents div with that information
//     for (let i = 0; i < FlowerImg.all.length; i++) {
//     let liE = document.createElement('td');
//     contentSec.appendChild(liE);
//     liE.textContent =  `${FlowerImg.all[i].name} ${FlowerImg.all[i].img} `;
//     }
//   }

// render();
// for(let i=0;i<imgArr2.length;i++){
//   imgArr2[i];
// }

// for( let i=0; i<imgArr.length;i++ ){
//   let optionE = imgArr[i];
//   let opt = document.createElement( 'option' );
//   opt.textContent= optionE;
//   opt.value=optionE;
//   selectE.appendChild( opt );
// }

// let x=0;
// Flower.prototype.render=function(){

//   tableE.innerHTML='';
//   let trE=document.createElement( 'tr' );
//   tableE.appendChild( trE );
//   // trE.innerHTML='';
//   let tdX = document.createElement( 'td' );
//   trE.appendChild( tdX );
//   tdX.textContent='x';

//   let tdName = document.createElement( 'td' );
//   trE.appendChild( tdName );
//   tdName.textContent=this.name;

//   let tdImg = document.createElement( 'td' );
//   trE.appendChild( tdImg );
//   tdImg.textContent=this.img;
//   x++;
//   if(x===7){
//     btnSave.removeEventListener('click',formHandler);
//   }

//   let tdSeason = document.createElement( 'td' );
//   trE.appendChild( tdSeason );
//   tdSeason.textContent=this.season;
//   sdata();

// };
// Flower.prototype.sdata= function(){
//   localStorage.setItem( 'form',JSON.stringify( this.imgArray ));
// };

// function formHandler( event ){
//   event.preventDefault();

//   let flowerName = event.target;
//   document.getElementById( 'flowerName' ).innerHTML=flowerName.flowerName;
//   let imgE = event.target;
//   document.getElementById( 'flowers' ).innerHTML=imgE.flowers;
//   let seas= event.target;
//   document.getElementById( 'season' ).innerHTML=seas.season;

//   let newflower = new Flower( flowerName,imgE,seas );

//   newflower.render();

// }



// let removeFlo = event.target.id;
// for( let i=0;i<Flower.all.length;i++ ){
//   if( Flower.all[i]===removeFlo ){
//     Flower.all[i].splice( removeFlo,1 );
//   }

// }
// sdata();
// render();
//};


// let data = JSON.parse( localStorage.getItem( 'form' ) );
// if( data ){
//   for( let i=0;i<data.length;i++ ){
//     new Flower( data[i].name,data[i].img,data[i].season );
//   }

// }



