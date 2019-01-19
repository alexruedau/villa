var z;

for (var i=0; i<10; i++) {
  z = myRandom(10,20);
  document.write(z + ", ");
}


function myRandom(min, max) {
  var myResult;
  myResult = Math.floor(Math.random() * (max - min + 1)) + min;
  return myResult;
}
