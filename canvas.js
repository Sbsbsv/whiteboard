const navbar=document.getElementById("navbar")
const eraser=document.getElementById("erazer")
const pen=document.getElementById("pin")
const size=document.getElementById("size")
const colour=document.getElementById("colour")
const bgcolour=document.getElementById("bgcolour")
window.addEventListener('load',()=>{
console.log("hello");
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext('2d');

canvas.height=window.innerHeight*0.8;
canvas.width=window.innerWidth*0.99;
ctx.lineWidth=4;



size.addEventListener('click',()=>{
   let bsize=size.value;
   console.log(bsize);
    ctx.lineWidth=bsize;
})
colour.addEventListener('click',()=>{
   let bcolour=colour.value;
   
   ctx.strokeStyle=bcolour;

})
pen.addEventListener('click',()=>{
    // ctx.strokeStyle="black";
    // ctx.strokeStyle="black";
    let bcolour=colour.value;
   
    ctx.strokeStyle=bcolour;
})


bgcolour.addEventListener('click',()=>{
   let bggcolour=bgcolour.value;
   ctx.clearRect(0, 0, canvas.width, canvas.height); 
   canvas.style.backgroundColor=bggcolour;
   
})


eraser.addEventListener('click',()=>{
    let bggcolour=bgcolour.value;
    // ctx.strokeStyle="white";
    ctx.strokeStyle=bggcolour;


})
canvas.addEventListener('touchstart',()=>{
    let bggcolour=bgcolour.value;
    canvas.style.backgroundColor=bggcolour;  
    let bsize=size.value;
    console.log(bsize);
     ctx.lineWidth=bsize
});


let paint=false;
function start(e){
    paint=true;
    draw(e);
}
function close(){
    paint=false;
    ctx.beginPath();
}
function tclose(){
    paint=false;
    ctx.beginPath();
}
function draw(e){
    if(!paint) return;
     
    
    ctx.lineCap ="round";
    console.log(e.clintX);
    let b=navbar.offsetHeight+24;
    
    console.log(b);
    ctx.lineTo(e.clientX-3,e.clientY-b);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX-3,e.clientY-b);
      

}
function tdraw(e){
    if(!paint) return;
     
    
    ctx.lineCap ="round";
    console.log(e.clintX);
    let b=navbar.offsetHeight+24;
    
    console.log(b);
    ctx.lineTo(e.touches[0].clientX-3,e.touches[0].clientY-b);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.touches[0].clientX-3,e.touches[0].clientY-b);
      

}

canvas.addEventListener('touchstart',start);
canvas.addEventListener('mousedown',start);
canvas.addEventListener('touchend',close);
canvas.addEventListener('mouseup',close);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('touchmove',tdraw);



})

