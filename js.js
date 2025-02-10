document.addEventListener('DOMContentLoaded', function(){

let count = 0;

const but = document.getElementById("but");
const countinc = document.getElementById("countinc");

but.addEventListener("click", function(){
  count += 1;
  countinc.textContent = count;
  // .textContent - для изменения текстового содержимого элемента

  if(count>= 15){
    but.disabled = true;
    //.disabled = true -  блокировка кнопки, в данном случае после числа 15 кнопка перестает быть активной
  }
});



// таймер с определенным интервалом
let co = 0;
const timer = document.getElementById("timer");
// getElementById("timer") это мы нашли в html документе этот id "timer" и сейчас будем добавлять действия к ней

//setInterval - позволяет вызывать функцию регулярно, повторяя вызов через опр интервал времени
const interval = setInterval(function(){
 co += 1;
 timer.textContent = co;

if(co >= 10){
  clearInterval(interval);
}
//clearInterval очищает значение указанное, в данном после цифры 10 очищает

},1000); // 1000 это 1 секунда, чем меньше значение, тем быстрее будет работать счетчик





// Второй таймер
let ct = 0;
let intervalic;

const ourtext = document.getElementById("timer2")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

// теперь добавляем действия к кнопочкам start, stop, reset

start.addEventListener("click", function(){
if(!intervalic){// !означает "не", мы проверяем не запущен ли таймер с помощью intervalic
intervalic = setInterval(function(){
  ct++ // увеличиваем счетчик
  ourtext.textContent = ct;
},1000) // 1000 это 1 секунда, чем меньше значение, тем быстрее будет работать счетчик
} 
});

stop.addEventListener("click", function(){
  clearInterval(intervalic);
  // clearInterval останавливает интервал, отменяет регулярное выполнение функции, то есть останавливает таймер на данном этапе
  intervalic = null;
});

reset.addEventListener("click", function(){
  clearInterval(intervalic);
  // clearInterval останавливает интервал, отменяет регулярное выполнение функции, то есть останавливает таймер на данном этапе
  intervalic = null;

  ct = 0;
  ourtext.textContent = ct; // textContent чтобы в текст добавлялось значение
});

});