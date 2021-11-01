// let timerId=setTimeout(a,x);

let y=document.getElementById("x");
let numb=0;
// y.addEventListener("input" ,function v(){ numb=y.value;
//     console.log(numb);
//     return(numb);
    
// });

document.getElementById("d").addEventListener("click",()=>{numb=y.value;console.log(numb);});

document.getElementById("d").addEventListener("click", setTimeout.bind(null,a,numb));

function a (){
    console.log(numb);
    console.log(y.value);
    console.log("in function");
    let b=document.createElement("p");
b.innerHTML="sagar";

document.body.appendChild(b);
}