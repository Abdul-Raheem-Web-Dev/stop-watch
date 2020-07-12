var hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
var hrs = document.getElementById("hours");
var mins = document.getElementById("minutes");
var secs = document.getElementById("seconds");
var millisecs = document.getElementById("milliseconds");
var interval;

/* function for stop watch timer */
function timer()
{
    milliseconds++;
    millisecs.innerHTML = milliseconds;

    if (milliseconds == 100)
        {
            milliseconds = 0;
            seconds++;
            secs.innerHTML = seconds;
        }
    else if (seconds == 59)
        {
            seconds = 0;
            minutes++;
            mins.innerHTML = minutes;
        }
    else if (minutes > 59)
        {
            minutes = 0;
            mins.innerHTML = 0;
            hours++;
            hrs.innerHTML = hours;
        }
}

/* function for start button */
function start()
{
    interval = setInterval(timer,10);
}

/* function for stop button */
function stop()
{
    clearInterval(interval);
}

/* function for reset button */
function reset()
{
    hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
    hrs.innerHTML = hours;
    mins.innerHTML = minutes;
    secs.innerHTML = seconds;
    millisecs.innerHTML = milliseconds;
    stop();
}