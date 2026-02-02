const clock = document.querySelector("span");

setInterval(function(){//it runs all time we given
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)
