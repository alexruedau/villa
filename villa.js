var myVilla = document.getElementById("villa");
var paper = myVilla.getContext("2d");

var myBG = {
  url: "tile.png",
  loadOK: false
}

var cow = {
  url: "vaca.png",
  loadOK: false
}

var pig = {
  url: "cerdo.png",
  loadOK: false
}

var chicken = {
  url: "pollo.png",
  loadOK: false
}

var quantity = myRandom(0,10);

myBG.img = new Image();
myBG.img.src = myBG.url;
myBG.img.addEventListener("load", loadBG);

cow.img = new Image();
cow.img.src = cow.url;
cow.img.addEventListener("load", loadCows);

pig.img = new Image();
pig.img.src = pig.url;
pig.img.addEventListener("load", loadPigs);

chicken.img = new Image();
chicken.img.src = chicken.url;
chicken.img.addEventListener("load", loadChickens);


function loadBG() {
  myBG.loadOK = true;
  drawIt();
}

function loadCows() {
  cow.loadOK = true;
  drawIt();
}

function loadPigs() {
  pig.loadOK = true;
  drawIt();
}

function loadChickens() {
  chicken.loadOK = true;
  drawIt();
}

function drawIt() {

  if (myBG.loadOK) {
    paper.drawImage(myBG.img, 0, 0);
  }
  if (cow.loadOK) {
    console.log(quantity);
    for(var c=0;c < quantity; c ++) {
      var x = myRandom(0,7);
      var y = myRandom(0,7);
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(cow.img, x, y);
    }

  }
  if (pig.loadOK) {
    console.log(quantity);
    for(var c=0;c < quantity; c ++) {
      var x = myRandom(0,7);
      var y = myRandom(0,7);
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(pig.img, x, y);
    }

  }
  if (chicken.loadOK) {
    console.log(quantity);
    for(var c=0;c < quantity; c ++) {
      var x = myRandom(0,7);
      var y = myRandom(0,7);
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(chicken.img, x, y);
    }

  }
}


function myRandom(min, max) {
  var myResult;
  myResult = Math.floor(Math.random() * (max - min + 1)) + min;
  return myResult;
}
