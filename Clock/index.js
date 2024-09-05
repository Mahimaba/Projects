var a=new Audio("./audio/tik.mp3")


setInterval(()=>{
// alert("h1ll0")
var d=new Date()
a.play();
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds()
// document.write(h);
var hours=30*h+(m/2);
var min=6*m;
var sec=6*s;

document.getElementsByClassName("hours")[0].style.transform=`rotate(${hours}deg)`
document.getElementsByClassName("minutes")[0].style.transform=`rotate(${min}deg)`

document.getElementsByClassName("seconds")[0].style.transform=`rotate(${sec}deg)`

},1000)