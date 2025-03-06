// const data = new Date();

// console.log(data.toISOString().split('T'));

// const dataAniversario2001 = new Date('2001-03-21 00:00');

// console.log(dataAniversario2001.toString());

// ------------------------------------------------------------------------

const date = new Date();
const brazilDate = formatedDate(date);

function formatedDate(date) {
    const day = zeroOnDate(date.getDate());
    const month = zeroOnDate(date.getMonth() + 1);
    const year = zeroOnDate(date.getFullYear());
    const hour = zeroOnDate(date.getHours());
    const minute = zeroOnDate(date.getMinutes());
    const milliSec = zeroOnDate(date.getMilliseconds());

    return `${day}/${month}/${year} - ${hour}:${minute}:${milliSec}`;
}

function zeroOnDate(number) {
    return number >= 10 ? number : `0${number}`
}

console.log(brazilDate);
