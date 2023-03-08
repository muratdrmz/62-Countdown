const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway=document.querySelector('.giveaway');
const deadline=document.querySelector('.deadline');
const items=document.querySelectorAll('.deadline-format h4');

let tempDate=new Date();
let tempYear=tempDate.getFullYear();
let tempMonth=tempDate.getMonth();
let tempDay=tempDate.getDate();

const futurDate=new Date(tempYear,tempMonth,tempDay+10,11,30,0)

const year=futurDate.getFullYear();
const hours=futurDate.getHours();
const minutes=futurDate.getMinutes();

let month=futurDate.getMonth();

month=months[month];

const date=futurDate.getDate();
const day=futurDate.getDay();

const weekday=weekdays[day]

giveaway.textContent=`giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}: ${minutes} am`

// future time in ms

const futureTime=futurDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  // console.log(today);
  const time = futureTime - today;
  // console.log(time);
  //  1s=1000ms
  //  1m=60s
  // 1hr=60min
  // 1d=24hr

  // values in ms

  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;

  // calculate all values

  let days = time / oneDay;
  days = Math.floor(days);
  // console.log(days);
  let hours = Math.floor((time % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  // console.log(minutes);
  let seconds = Math.floor((time % oneMinute) / 1000);
  // console.log(seconds);

  //  set values Array

  const values=[days,hours,minutes,seconds];

  // console.log(values);

  function format(item){
    if(item<10){
      return item=`0${item}`
    }
    return item
  }

  items.forEach((item,index)=>{
    item.innerHTML=format(values[index]);
  });
  if(time<0){
    clearInterval(countdown);
    deadline.innerHTML=`<h4 class="expired">sorry,this giveaway has expired</h4>`
  }
}

//  countdown
let countdown=setInterval(getRemainingTime,1000)
getRemainingTime();

