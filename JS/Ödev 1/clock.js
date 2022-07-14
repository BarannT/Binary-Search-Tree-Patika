let userName = document.querySelector("#myName");
userName.innerHTML=prompt("Enter your name:","Write Here");
console.log(userName);

function showTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    minute=addZero(minute);
    let second = date.getSeconds();
    second=addZero(second);
    let day = date.getDay();

    switch(day){
    case 1:
        day="Pazartesi";
        break;
    case 2:
        day="Salı";
        break;
    case 3:
        day="Çarşamba";
        break;
    case 4:
        day="Perşembe";
        break;
    case 5:
        day="Cuma";
        break;
    case 6:
        day="Cumartesi";
        break;
    case 7:
        day="Pazar";
        break;
    }
    document.getElementById('myClock').innerHTML =  hour+":"+minute+":"+second+day;
    setTimeout(showTime, 1000);
}

function addZero(time) {
    if (time<10){
        time="0"+time;
    }
    return time;
}

showTime()