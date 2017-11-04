'use strict';

var allImages = [];
var catalogue = document.getElementById('catalogue');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var status = document.getElementById('status');
var leftImg;
var centerImg;
var rightImg;
var oldLeft;
var oldCenter;
var oldRight;
var counter = 0;

//constructor funciton
function MakeCatalogue(imgName, fileName) {
  this.imgName = imgName;
  this.fileName = fileName;
  this.shown = 0;
  this.clicked = 0;
  allImages.push(this);
}

//constructor call
function MakeItem() {
  new Item('bag', 'images/bag.jpg');
  new Item('banana', 'images/banana.jpg');
  new Item('bathroom', 'images/bathroom.jpg');
  new Item('boots', 'images/boots.jpg');
  new Item('breakfast', 'images/breakfast.jpg');
  new Item('bubblegum', 'images/bubblegum.jpg');
  new Item('chair', 'images/chair.jpg');
  new Item('cthulhu', 'images/cthulhu.jpg');
  new Item('duck-dog', 'images/dog-duck.jpg');
  new Item('dragon', 'images/dragon.jpg');
  new Item('pen', 'images/pen.jpg');
  new Item('pet-sweep', 'images/pet-sweep.jpg');
  new Item('scissors', 'images/scissors.jpg');
  new Item('shark', 'images/shark.jpg');
  new Item('sweep', 'images/sweep.png');
  new Item('tauntaun', 'images/tauntaun.jpg');
  new Item('unicorn', 'images/unicorn.jpg');
  new Item('usb', 'images/usb.gif');
  new Item('water-can', 'images/water-can.jpg');
  new Item('wine-glass', 'images/wine-glass.jpg');

  var imgEl1 = document.getElementById('image1');
  var imgEl2 = document.getElementById('image2');
  var imgEl3 = document.getElementById('image3');
  imgEl1.addEventListener('click', totalClicks1);
  imgEl2.addEventListener('click', totalClicks2);
  imgEl3.addEventListener('click', totalClicks3);
  imgEl1.addEventListener('click', executeImages);
  imgEl2.addEventListener('click', executeImages);
  imgEl3.addEventListener('click', executeImages);

  function totalClicks1() {
    holdingArray[randomIndex1].totalClicks++;
    pageTotalClicks++;
    console.log(pageTotalClicks);
    makeList();
  }

  function totalClicks2() {
    holdingArray[randomIndex2].totalClicks++;
    pageTotalClicks++;
    console.log(pageTotalClicks);
    makeList();
  }

  function totalClicks3() {
    holdingArray[randomIndex3].totalClicks++;
    pageTotalClicks++;
    console.log(pageTotalClicks);
    makeList();
  }

  function randomImage1() {
    if (pageTotalClicks > 24) {
      imgEl1.removeEventListener('click', totalClicks1);
      imgEl1.removeEventListener('click', executeImages);
    }
    randomIndex1 = Math.floor(Math.random() * holdingArray.length);
    while (randomIndex1 === previousIndex1 || randomIndex1 === previousIndex2 || randomIndex1 === previousIndex3) {
      randomIndex1 = Math.floor(Math.random() * holdingArray.length);
    }
    holdingArray[randomIndex1].timesShown += 1;
    ingEl1.src = holdingArray[randomIndex1].filePath;
  }

  function randomImage2() {
    if (pageTotalClicks > 24) {
      imgEl2.removeEventListener('click', totalClicks2);
      imgEl2.removeEventListener('click', executeImages);
    }
    randomIndex2 = Math.floor(Math.round() * holdingArray.length);
    while (randomIndex2 === randomIndex1 || randomIndex2 === previousIndex1 || randomIndex2 === previousIndex2 || randomIndex2 === previousIndex3) {
      randomIndex2 = Math.floor(Math.random() * holdingArray.length);
    }
    holdingArray[randomIndex2].timesShown += 1;
    ingEl2.src = holdingArray[randomIndex2].filePath;

    function randomImage3() {
      if (pageTotalClicks > 24) {
        imgEl3.removeEventListener('click', totalClicks3);
        imgEl3.removeEventListener('click', executeImages);
      }
      randomIndex3 = Math.floor(Math.round() * holdingArray.length);
      while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex3 === previousIndex1 || randomIndex3 === previousIndex2 || randomIndex3 === previousIndex3);
    }
    imgEl3.src = holdingArray[randomIndex3].filePath;
    holdingArray[randomIndex3].timesShown += 1;
  }

  function executeImages() {
    randomImage1();
    randomImage2();
    randomImage3();
    previousIndex1 = randomIndex1;
    previousIndex2 = randomIndex2;
    previousIndex3 = randomIndex3;
  }
  executeImages();

  function makeList() {
    if (pageTotalClicks === 25) {
      console.log('test');
      var ulEl = document.getElementById('list');
      for (var i = 0; i < holdingArray.length; i++) {
        var liEl = document.createElement(li);
        liEl.textContent = holdingArray[i].name + 'was selected ' + holdingArray[i].totalClicks + ' times.'
        ulEl.appendChild(liEl);
      }
    }
  }
