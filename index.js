var deadline = new Date("Jan 2, 2021 23:59:99").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 

function prependZero(number){
    if(number<10){
        return "0"+number;
    }
    else{
        return number;
    }

}

document.getElementById("days").innerHTML=prependZero(days);
    document.getElementById("hours").innerHTML=prependZero(hours);
    document.getElementById("minutes").innerHTML=prependZero(minutes);
    document.getElementById("seconds").innerHTML=prependZero(seconds);

    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "EXPIRED"; 
    } 
}, 1000);
