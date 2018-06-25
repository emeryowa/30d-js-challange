const hourPointer = document.querySelector('.hours-pointer');
const minutePointer = document.querySelector('.minutes-pointer');
const secondsPointer = document.querySelector('.seconds-pointer');

setInterval(function(){
    this.setTime();
}, 1000);

/** 
 *  Get current time and calculate degrees to set clock pointers.
 */
function setTime() {
    let now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    hourPointer.style.transform = `rotate(${hoursDegrees}deg)`;
    minutePointer.style.transform = `rotate(${minutesDegrees}deg)`;
    secondsPointer.style.transform = `rotate(${secondsDegrees}deg)`;
}

setTime();
