// let timerId=setTimeout(a,x);

let y=document.getElementById("x");
let inputnum=0;
let t;
// let startTime;
// y.addEventListener("input" ,function v(){ inputnum=y.value;
//     console.log(inputnum);
//     return(inputnum);
    
// });

document.getElementById("d").addEventListener("click" ,()=>{
    inputnum=parseInt(y.value);
    
});

// setTimeout(()=>console.log(inputnum),inputnum);

document.getElementById("d").addEventListener("click", l);
function l()
{
  
setInterval (function a (){
    

    console.log(inputnum);
    // console.log(y.value);
    console.log("in function");
    let b=document.createElement("p");
    b.innerHTML="sagar";

    document.body.appendChild(b);
    
},parseInt(y.value) );}
document.getElementById("g").addEventListener("click", o)
function o()
{
    clearInterval(t)
}