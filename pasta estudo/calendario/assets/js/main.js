const divInfo = document.querySelector('.container h1')
const newDate = new Date();
// const options = {
//   dateStyle: 'full',
//   timeStyle: 'short'
// }

// divInfo.innerHTML = newDate.toLocaleString('pt-BR', options);

// ⬇ - utilizando da forma longa, ⬆ - utilizando a documentação para deixar em uma forma reduzida 

// function textDayWeek(diaSemana) {

//   let diaSemanaTexto;

//   switch (diaSemana) {
//     default:
//       diaSemanaTexto = '';
//       break
//     case 0:
//       diaSemanaTexto = 'Domingo';
//       break
//     case 1:
//       diaSemanaTexto = 'Segunda-Feira';
//       break
//     case 2:
//       diaSemanaTexto = 'Terça-Feira';
//       break
//     case 3:
//       diaSemanaTexto = 'Quarta-Feira';
//       break
//     case 4:
//       diaSemanaTexto = 'Quinta-Feira';
//       break
//     case 5:
//       diaSemanaTexto = 'Sexta-Feira';
//       break
//     case 6:
//       diaSemanaTexto = 'Sabado';
//   }
//   return diaSemanaTexto;
// }

// function returnDate() {
//   const day = zeroLeft(newDate.getDate());
//   const month = zeroLeft(newDate.getMonth() + 1);
//   const year = zeroLeft(newDate.getFullYear());
//   const hour = zeroLeft(newDate.getHours());
//   const minutes = zeroLeft(newDate.getMinutes());
//   return `${day}/${month}/${year} ${hour}:${minutes}`;
// }

// function zeroLeft(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// divInfo.innerHTML = `${textDayWeek(newDate.getDay())}, ${returnDate()}`

// outra forma de fazer o mesmo código acima ⬆

function textDayWeeks(weekDay) {
  const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];
  return diasSemana[weekDay];
}

function textMonths(month) {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return months[month];
}

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}


function returnDate(date) {
  const getMonthNum = date.getMonth();
  const textMonths = textMonths(getMonthNum);
  const day = zeroLeft(date.getDate());
  const year = zeroLeft(date.getFullYear());
  const hour = zeroLeft(date.getHours());
  const minutes = zeroLeft(date.getMinutes());
  return `${day} de ${textMonths} de ${year} ${hour}:${minutes}`;
}

function returnInnerHtml(data) {
  const daysWeek = textDayWeeks(data.getDay());
  const date = returnDate(data);
  return `${daysWeek}, ${date}`;
}

divInfo.innerHTML = returnInnerHtml(newDate);