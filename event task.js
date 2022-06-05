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

// Задача 5. Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона.

<div>1</div>
<div>2</div>
<div>3</div>

<script>

let elem = document.getElementsByTagName('div');
for (let i = 0; i < elem.length; i++) {
	elem[i].addEventListener('click', colorRed);
}

function colorRed() {
	this.style.background = 'red';
	this.removeEventListener('click', colorRed);
	this.addEventListener('click', colorGreen);
}

function colorGreen() {
	this.style.background = 'green';
	this.removeEventListener('click', colorGreen);
	this.addEventListener('click', colorRed);
}

</script>

// Задача 6. Написать функцию, которая считывает значения с инпутов и выводит в блок <div> их сумму.

<input type="text" id="num1"/>
<input type="text" id="num2"/>
<div id="answer"></div>
<button type="button" onclick="sum()">Посчитать</button>

<script>

function sum() {
  const num1 = +document.querySelector('#number1').value;
  const num2 = +document.querySelector('#number2').value;
  const sum = num1 + num2;
  document.querySelector('#answer').textContent = sum;
}

</script>

// Задача 7. По клику на кнопку скрывать текст в инпуте : 

<input type="button" id="but" value="Нажмите, чтобы спрятать текст"/>
<div id="hide">Скрыть этот текст</div>

<script>

document.getElementById('but').onclick = () => {
  document.getElementById('hide').style.display = 'none';
}

</script>

// Задача 8. Создайте кнопку, при клике на которую, она будет скрывать сама себя. Решение задачи заключается в использовании this в обработчике.

<input type="button" onclick="this.style.display='none'" value="Нажми, чтобы скрыть"/>