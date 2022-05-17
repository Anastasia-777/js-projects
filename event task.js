// Задача 1. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку alert выводился ее src. 

<img src = '#'></img>
<img src = '#'></img>
<img src = '#'></img>

<script>
let eventClick = document.getElementsByTagName('img');

for (i = 0; i < eventClick.length; i++) {
  eventClick[i].onclick = buttonClick;
}

function buttonClick () {
  alert (this.getAttribute('src'));
}
</script>

// Задача 2. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст. 

<a href='#'>Ссылка</a>
<a href='#'>Ссылка</a>
<a href='#'>Ссылка</a>

<script>
let elem = document.getElementsByTagName('a');

for (i = 0; i < elem.length; i++) {
  elem[i].addEventListener('mouseover', func)
}

function func() {
  elem[i].setAttribute
}
</script>