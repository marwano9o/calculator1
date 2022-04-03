let display= document.getElementById('display');
// let buttons =Array.from(document.getElementsByClassName('button'));
// let hello  =document.getElementById
// document.getElementById("demo").innerHTML = "Hellowertgfd World";
// let demo1 =document.getElementById("demo1").innerHTML= "Hello"
// document.getElementsByClassName("button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").style.backgroundColor = "red";}
const collection = document.getElementsByClassName("button");
for (let i = 0; i < collection.length; i++) {
  collection[i]addEventListener("click", myFunction);
}
