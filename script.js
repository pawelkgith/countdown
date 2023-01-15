function realTime() {
    const date = new Date();
    let hours = date.getHours(),
    minutes = date.getMinutes();

    let time = document.querySelector(".hour");
    if(hours < 10) {
        hours = `0${hours}`;
    }

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    time.innerText = `${hours}:${minutes}`;
}

document.querySelector(".restart").onclick = () => {
    window.location.reload();
}

function getDate() {
    setInterval(function() {
        let date = document.querySelector(".dateInput").value.split("."),
        seconds = 1000,
        minutes = seconds * 60,
        hours = minutes * 60;
        days = hours * 24;

        switch(Number(date[1])) {
            case 1: date[1] = "Jan"; break;
            case 3: date[1] = "Feb"; break;
            case 4: date[1] = "Mar"; break;
            case 5: date[1] = "Apr"; break;
            case 6: date[1] = "May"; break;
            case 7: date[1] = "Jun"; break;
            case 8: date[1] = "Jul"; break;
            case 9: date[1] = "Sep"; break;
            case 10: date[1] = "Oct"; break;
            case 11: date[1] = "Nov"; break;
            case 12: date[1] = "Dec"; break;
        }
        
        const expectedDate = new Date(`${date[1]}, ${date[0]}, ${date[2]}, 00:00:00`).getTime(),
        currentDate = new Date().getTime(),
        timeLeft = expectedDate - currentDate;
        let daysLeft = Math.floor(timeLeft / days),
        hoursLeft = Math.floor((timeLeft % days) / hours);
        minutesLeft = Math.floor((timeLeft % hours) / minutes),
        secondsLeft = Math.floor((timeLeft % minutes) / seconds), 
        arr = [hoursLeft, minutesLeft, secondsLeft];
        
        arr = arr.map(el => String(el));

        for(let i=0; i<arr.length; i++) {
            if(arr[i] < 10) {
                arr[i] = `0${arr[i]}`;
            }
        }

        document.querySelector(".days").innerText = daysLeft;
        document.querySelector(".hours").innerText = arr[0];
        document.querySelector(".minutes").innerText = arr[1];
        document.querySelector(".seconds").innerText = arr[2];
    }, 1000);
}

realTime();
setInterval(realTime, 1000);
document.querySelector(".start").onclick = getDate;