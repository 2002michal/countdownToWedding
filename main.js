// (function () {
//     const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

//     //I'm adding this section so I don't have to keep updating this pen every year :-)
//     //remove this if you don't need it
//     let today = new Date(),
//         dd = String(today.getDate()).padStart(2, "0"),
//         mm = String(today.getMonth() + 1).padStart(2, "0"),
//         yyyy = today.getFullYear(),
//         nextYear = yyyy + 1,
//         dayMonth = "09/30/",
//         birthday = dayMonth + yyyy;

//     today = mm + "/" + dd + "/" + yyyy;
//     if (today > birthday) {
//         birthday = dayMonth + nextYear;
//     }
//     //end

//     const countDown = new Date(birthday).getTime(),
//         x = setInterval(function () {

//             const now = new Date().getTime(),
//                 distance = countDown - now;

//             document.getElementById("days").innerText = Math.floor(distance / (day)),
//                 document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//                 document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//                 document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//             //do something later when date is reached
//             if (distance < 0) {
//                 document.getElementById("headline").innerText = "It's my birthday!";
//                 document.getElementById("countdown").style.display = "none";
//                 document.getElementById("content").style.display = "block";
//                 clearInterval(x);
//             }
//             //seconds
//         }, 0)
// }());



// Date.prototype.getWeek = function() {
//     var date = new Date(this.getTime());
//     date.setHours(0, 0, 0, 0);
//     // Thursday in current week decides the year.
//     date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
//     // January 4 is always in week 1.
//     var week1 = new Date(date.getFullYear(), 0, 4);
//     // Adjust to Thursday in week 1 and count number of weeks from date to week1.
//     return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
//   }

//   function getDateRangeOfWeek(weekNo, y){
//       var d1, numOfdaysPastSinceLastMonday, rangeIsFrom, rangeIsTo;
//       d1 = new Date(''+y+'');
//       numOfdaysPastSinceLastMonday = d1.getDay() - 1;
//       d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
//       d1.setDate(d1.getDate() + (7 * (weekNo - d1.getWeek())));
//       rangeIsFrom = (d1.getMonth() + 1) + "-" + d1.getDate() + "-" + d1.getFullYear();
//       d1.setDate(d1.getDate() + 6);
//       rangeIsTo = (d1.getMonth() + 1) + "-" + d1.getDate() + "-" + d1.getFullYear() ;
//       return rangeIsFrom + " to " + rangeIsTo;
//   };

//   console.log(getDateRangeOfWeek(10, 2023)); //12-21-2015 to 12-27-2015


// (function () {
//     var timer;

//     var compareDate = new Date();
//     compareDate.setDate(compareDate.getDate() + 6); //just for this demo today + 7 days

//     timer = setInterval(function () {
//         timeBetweenDates(compareDate);
//     }, 1000);

//     function timeBetweenDates(toDate) {
//         var dateEntered = toDate;
//         var now = new Date();
//         var difference = dateEntered.getTime() - now.getTime();

//         if (difference <= 0) {

//             // Timer done
//             clearInterval(timer);

//         } else {

//             var seconds = Math.floor(difference / 1000);
//             var minutes = Math.floor(seconds / 60);
//             var hours = Math.floor(minutes / 60);
//             var days = Math.floor(hours / 24);

//             hours %= 24;
//             minutes %= 60;
//             seconds %= 60;

//             document.getElementById("days").innerText = days,
//             document.getElementById("hours").innerText = hours,
//             document.getElementById("minutes").innerText = minutes,
//             document.getElementById("seconds").innerText = seconds;

//             // $("#days").text(days);
//             // $("#hours").text(hours);
//             // $("#minutes").text(minutes);
//             // $("#seconds").text(seconds);
//         }
//     }
// }());




(function () {
//"Jan 5, 2024 15:37:25"
    var countDownDate = new Date("Nov 6, 2023 08:03:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";
        document.getElementById("days").innerText = days,
        document.getElementById("hours").innerText = hours,
        document.getElementById("minutes").innerText = minutes,
        document.getElementById("seconds").innerText = seconds;


        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerText = '0',
            document.getElementById("hours").innerText = '0',
            document.getElementById("minutes").innerText = '0',
            document.getElementById("seconds").innerText = '0';

        }
    }, 1000);
}());