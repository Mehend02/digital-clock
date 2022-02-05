// defining function to display current time in clock face
function showTime() {
    const currentTime = new Date()
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes()
    let second = currentTime.getSeconds()
    let period = "AM"

    // converting military time to nonmilitary time
    if (hour == 0) {
        hour = 12
    }
    // setting PM/AM 
    if (hour > 12) {
        hour = hour - 12
        period = "PM"
    }
    // adding '0' in front of single digit time to keep clock display uniform
    hour = (hour < 10) ? "0" + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second

    clock.innerText = `${hour}:${minute}:${second} ${period}`
}

// getting handle on various elements
const clock = document.querySelector("#clockDisplay")
const body = document.querySelector("body")
const orangeBtn = document.querySelector("#orange")
const greenBtn = document.querySelector("#green")
const blueBtn = document.querySelector("#blue")
const grayBtn = document.querySelector("#gray")
const blkBtn = document.querySelector("#black")
const whiteBtn = document.querySelector("#white")
const bgMtnBtn = document.querySelector("#bgMtn")
const bgOceanBtn = document.querySelector("#bgOcean")
const resetBtn = document.querySelector("#reset")

// setting the clock dipslay interval, showing current time every second
setInterval(showTime, 1000)

// code lines below add event listeners to buttons on page so when clicked, the color or background will change depending on the button clicked. As well as a reset button to go back to original style, when clicked.
orangeBtn.addEventListener("click", function () {
    clock.style.color = "orange"
})

greenBtn.addEventListener("click", function () {
    clock.style.color = "green"
})

blueBtn.addEventListener("click", function () {
    clock.style.color = "blue"
})

grayBtn.addEventListener("click", function () {
    clock.style.background = "lightgray"
})

blkBtn.addEventListener("click", function () {
    clock.style.background = "black"
})

whiteBtn.addEventListener("click", function () {
    clock.style.background = "white"
})

bgMtnBtn.addEventListener("click", function () {
    body.style.background = "url(https://images.unsplash.com/photo-1551519924-41efeb4833f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
})

bgOceanBtn.addEventListener("click", function () {
    body.style.background = "url(https://images.unsplash.com/photo-1417052800325-788e0eaf22c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
})

resetBtn.addEventListener("click", function () {
    clock.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgb(77, 75, 75) 100%)"
    clock.style.color = "#9900ff"
    body.style.background = "url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80)"
    body.style.backgroundSize = "cover"
})
