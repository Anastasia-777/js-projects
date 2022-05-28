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

// Задача 3. Напишите функцию которая показывает координаты курсора мыши

<div id='block'>Координата x: 0  Координата y: 0</div>


<script>

window.addEventListener('mousemove', find);

function find(event) {
  document.getElementById('block').innerHTML = 'Координата x: ' + event.clientX + ' Координата y: ' + event.clientY;
}

</script>

// Задача 4. Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.

<p>2</p>
<p>3</p>
<p>4</p>

<script>

let count = document.getElementsByTagName('p');
for (let i = 0; i < count.length; i++) {
  count[i].addEventListener('click', sum);
}

function sum() {
  this.innerHTML = this.innerHTML * this.innerHTML;
}

</script>