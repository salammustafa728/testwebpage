'use strict';

// let imgArr =[ 'bag.jpg','banana.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg',
//   'scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];

// const secImg = document.getElementById('productImgSec');
// const leftImg = document.getElementById('fistImgproduct');
// const midleImg = document.getElementById('secondImgproduct');
// const rightImg = document.getElementById('thirdmgproduct');

// const liSec = document.getElementById('sec_result');
// const butSave = document.getElementById('btn_result');

// const aud = document.createElement('audio');
// aud.src='./audio/lucky-star-good-job.mp3';
// liSec.appendChild(aud);



// function randomImgNum(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let clickimg=0;
// let leftIndexImg=0;
// let middleIndexImg=0;
// let rightIndexImg=0;
// let attempsNum=25;

// function ImagesCon(name,img,imgCliks=0,imgShown=0){
//   this.name=name.split('.')[0];
//   this.img= img ? img :`./img/${name}`;
//   this.imgCliks=imgCliks;
//   this.imgShown=imgShown;
//   ImagesCon.allImg.push(this);
//   ImagesCon.allData.push(this);
// }
// ImagesCon.allImg=[];
// ImagesCon.allData=[];
// let previous=[];

// // for(let i=0;i<imgArr.length;i++){
// //     new ImagesCon(imgArr[i]);
// //   }

// function clickImgHandler(event){
//   if(clickimg<attempsNum){
//     if(event.target.id==='fistImgproduct'){
//       ImagesCon.allImg[leftIndexImg].imgCliks++;
//     }else if(event.target.id==='secondImgproduct'){
//       ImagesCon.allImg[middleIndexImg].imgCliks++;
//     }else if(event.target.id==='thirdmgproduct'){
//       ImagesCon.allImg[rightIndexImg].imgCliks++;
//     }
//     if(clickimg===attempsNum){
//       butSave.removeEventListener('click',clickImgHandler);
//     }
//     clickimg++;
//     savaData();
//     renderImg();
//   }else{
//     mychart();
//   }


// }
// function savaData(){
//   localStorage.setItem('imgclickes',JSON.stringify(ImagesCon.allData));
// }
// function renderImg(){
//   let imgleft;
//   let imgMiddle;
//   let imgRight;

//   do{
//     imgleft=randomImgNum(0,imgArr.length-1);
//   }while(previous.includes(imgleft));

//   do{
//     imgMiddle=randomImgNum(0,imgArr.length-1);
//   }while(previous.includes(imgMiddle)||imgMiddle===imgleft);

//   do{
//     imgRight=randomImgNum(0,imgArr.length-1);
//   }while(previous.includes(imgRight)||imgRight===imgleft||imgRight===imgleft);

//   leftImg.src=ImagesCon.allImg[imgleft].img;
//   midleImg.src=ImagesCon.allImg[imgMiddle].img;
//   rightImg.src=ImagesCon.allImg[imgRight].img;

//   leftIndexImg=imgleft;
//   middleIndexImg=imgMiddle;
//   rightIndexImg=imgRight;

//   ImagesCon.allImg[imgleft].imgShown++;
//   ImagesCon.allImg[imgMiddle].imgShown++;
//   ImagesCon.allImg[imgRight].imgShown++;

//   previous=[imgleft,imgMiddle,imgRight];
// }

// function resultFun(){
//   let ulEle = document.createElement('ul');
//   liSec.appendChild(ulEle);
//   for(let i=0;i<imgArr.length;i++){
//     let liData=document.createElement('li');
//     ulEle.appendChild(liData);
//     liData.textContent=`${ImagesCon.allImg[i].name} has ${ImagesCon.allImg[i].imgCliks} clicks and has shown ${ImagesCon.allImg[i].imgShown} times `;
//   }
//   //   aud.play();
//   butSave.removeEventListener('click',resultFun);
// }

// butSave.addEventListener('click',resultFun);


// function getData(){
//   let data = JSON.parse(localStorage.getItem('imgclickes'));

//   if(data){
//     for(let i=0;i<ImagesCon.allImg.length;i++){
//       new ImagesCon(ImagesCon.allImg[i].name,ImagesCon.allImg[i].img,ImagesCon.allImg[i].imgCliks,ImagesCon.allImg[i].imgShown);
//     }
//   }else{
//     for(let i=0;i<imgArr.length;i++){
//       new ImagesCon(imgArr[i]);
//     }

//   }
// }
// getData();


// function mychart(){
//   let clickVotes=[];
//   let names=[];
//   let imgShown=[];

//   for(let i=0;i<ImagesCon.allImg.length;i++){
//     clickVotes.push(ImagesCon.allImg[i].imgCliks);
//     names.push(ImagesCon.allImg[i].name);
//     imgShown.push(ImagesCon.allImg[i].imgShown);
//   }
//   let ctx = document.getElementById('myChart').getContext('2d');
//   let myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: names,
//       datasets: [{
//         label: '# of img clicks',
//         data: clickVotes,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 136, 1)',
//         ],
//         borderWidth: 1
//       },{
//         label: '# of img shown',
//         data: imgShown,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 136, 1)',
//         ],
//         borderWidth: 1
//       }],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// }

// secImg.addEventListener('click',clickImgHandler);
// renderImg();










let imgeArr=[
  'bag.jpg','banana.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg',
  'scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'
];
const imgeSection = document.getElementById('productImgSec');
const imgeFrist = document.getElementById('fistImgproduct');
const imgeSecond = document.getElementById('secondImgproduct');
const imgeThird = document.getElementById('thirdmgproduct');

const resultSection = document.getElementById('sec_result');
const btnResult = document.getElementById('btn_result');

// const getSec = document.getElementById('getSec');

let imgClikcsNum = 0;
let imgeFristIndex = 0;
let imgeSecondIndex = 0;
let imgeThirdIndex = 0;
let attempsClick=25;

function ProductImge(name,img,imgClikcs=0,imgShown=0){
  this.name=name.split('.')[0];
  this.img= img ? img :`./img/${name}`;
  this.imgClikcs = imgClikcs;
  this.imgShown = imgShown;
  ProductImge.all.push(this);
  ProductImge.data.push(this);

}

ProductImge.all=[];
ProductImge.data=[];
let previosIndex=[];

function dataSave(){

  localStorage.setItem('imgs',JSON.stringify(ProductImge.data));

}



// console.log(ProductImge.all);

function clickImgHadler(e){

  if(imgClikcsNum<attempsClick){
    if(e.target.id === 'fistImgproduct' ){
      ProductImge.all[imgeFristIndex].imgClikcs++;
    }else if(e.target.id === 'secondImgproduct'){
      ProductImge.all[imgeSecondIndex].imgClikcs++;
    }else if(e.target.id === 'thirdmgproduct'){
      ProductImge.all[imgeThirdIndex].imgClikcs++;
    }

    if(imgClikcsNum===attempsClick){
      btnResult.removeEventListener('click',clickImgHadler);
    }
    imgClikcsNum++;
    dataSave();

    // console.log(ProductImge.all);
    renderImgeProducr();
  }else{
    chartImg();
  }

  // dataSave();
  console.log(ProductImge.all);
  console.log(imgClikcsNum);
}

function result(){

  let ulEle = document.createElement('ul');
  resultSection.appendChild(ulEle);

  for(let i=0;i<imgeArr.length;i++){
    let liEle = document.createElement('li');
    ulEle.appendChild(liEle);

    liEle.textContent=ProductImge.all[i].name + ' had a '+ ProductImge.all[i].imgClikcs +' votes and had seen a  '+ProductImge.all[i].imgShown;
  }
  btnResult.removeEventListener('click',result);
}

btnResult.addEventListener('click',result);




function renderImgeProducr(){
  console.log(ProductImge.all);
  let imgNum1;
  let imgNum2;
  let imgNum3;

  do{
    imgNum1 = randomImgNum(0,imgeArr.length-1);
  }while(previosIndex.includes(imgNum1));
  do{
    imgNum2 = randomImgNum(0,imgeArr.length-1);
  }while(previosIndex.includes(imgNum2)|| imgNum2 === imgNum1);
  do{
    imgNum3 = randomImgNum(0,imgeArr.length-1);
  }while(previosIndex.includes(imgNum3)|| imgNum3 === imgNum1 || imgNum2 === imgNum3);

  imgeFrist.src = ProductImge.all[imgNum1].img;
  imgeSecond.src = ProductImge.all[imgNum2].img;
  imgeThird.src = ProductImge.all[imgNum3].img;

  imgeFristIndex=imgNum1;
  imgeSecondIndex=imgNum2;
  imgeThirdIndex=imgNum3;

  ProductImge.all[imgNum1].imgShown++;
  ProductImge.all[imgNum2].imgShown++;
  ProductImge.all[imgNum3].imgShown++;
  previosIndex=[imgeFristIndex,imgeSecondIndex,imgeThirdIndex];
  // dataSave();

}

function getData(){

  let dataImgs = JSON.parse(localStorage.getItem('imgs'));
  if(dataImgs){
    // ProductImge.all=[];
    for( let i = 0; i < dataImgs.length; i++ ) {
      // dataImgs=`${ProductImge.all[i].imgClikcs} ${ProductImge.all[i].imgShown}`;
      new ProductImge(dataImgs[i].name,dataImgs[i].img,dataImgs[i].imgClikcs,dataImgs[i].imgShown);
    }
    // renderImgeProducr();
  }
  else{
    for(let i = 0; i<imgeArr.length;i++){
      new ProductImge(imgeArr[i]);
    }
  }
}
getData();

function chartImg(){
  let clicksVotes=[];
  let names =[];
  let shownImg =[];
  for(let i = 0;i<ProductImge.all.length;i++){
    clicksVotes.push(ProductImge.all[i].imgClikcs);
    names.push(ProductImge.all[i].name);
    shownImg.push(ProductImge.all[i].imgShown);
  }

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes cliks',
        data: clicksVotes,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },{
        label: '# of image has been shown',
        data: shownImg,
        backgroundColor: 'rgba(255, 99, 200, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}


function randomImgNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

imgeSection.addEventListener('click',clickImgHadler);
renderImgeProducr();

