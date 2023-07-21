const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minute");
const secondEl=document.getElementById("second");
const ampmEl=document.getElementById("ampm");


function addz(i){
if(i<10){  i="0" +i; }
return i; 
}
function updateclock(){

const d = new Date();
let h = addz(d.getHours());
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampm="AM";

if(h>=12){

    ampm="PM";
}
hourEl.innerText = h;
minuteEl.innerText=m;
secondEl.innerText = s;
ampmEl.innerText = ampm;



setTimeout(()=>{
    updateclock()
},1000);
}


updateclock();
