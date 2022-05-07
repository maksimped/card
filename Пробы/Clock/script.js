
setInterval(function(){
const clock = document.querySelector('.display')
let time = new Date();
let sec = time.getSeconds();
let min = time.getMinutes();
let hr  = time.getHours();
if(min < 10){
  min = '0' + min;
}

if(sec < 10){
  sec = '0' + sec;
}

clock.textContent = hr + ' : ' + min + ' : ' + sec;

});
