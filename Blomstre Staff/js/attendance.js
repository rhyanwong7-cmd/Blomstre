const name = localStorage.getItem("currentName");

const code = localStorage.getItem("currentCode");



document.getElementById("welcome").innerHTML =
"Welcome, " + name;

function updateTime(){

    const now = new Date();


    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };


    document.getElementById("date-time").innerHTML =
        now.toLocaleString("en-GB", options);

}



setInterval(updateTime, 1000);

updateTime();


document.getElementById("clock-in")
.addEventListener("click",()=>{


    sendAttendance(
        name,
        code,
        "CLOCK IN"
    );


    document.getElementById("message").innerHTML =
    "Successfully clocked in";


});





document.getElementById("clock-out")
.addEventListener("click",()=>{


    sendAttendance(
        name,
        code,
        "CLOCK OUT"
    );


    document.getElementById("message").innerHTML =
    "Successfully clocked out";


});