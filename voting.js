
let z = document.querySelector(".container");
let y= document.getElementById("h3");

function vote(){
    let x = document.getElementById("age").value;
    if(x >= 18 && x<=100){
        y.innerHTML ="eligible for vote";
        y.style.color="green";
    }
    else if(x<=10 && x>0){
        y.innerHTML ="not eligible for vote too younger";
        y.style.color="grey";
    }
    else if(x >=10 && x<=17){
        y.innerHTML ="not eligible for vote coming soon";
        y.style.color="orange";
    }
    else if(x <= 0){
        y.innerHTML ="invalid";
        y.style.color="red";
    }
    else if (x >100){
        y.innerHTML ="eligible for vote special permission needed";
        y.style.color="brown";
    }
    else{
        y.innerHTML = "invalid";
        y.style.color="red";
    }
}