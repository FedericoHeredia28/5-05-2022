let arr = ['elefante', 1, true]; // un array, arreglo, vector, etc.
console.log(document.body.children[1]);

alert(location.href);
if (confirm("Ir a brasil?")) {
  location.href = "https://www.google.com/search?q=sos+re+puto&tbm=isch&ved=2ahUKEwiJ7bb8uMj3AhVBu5UCHUeAB0AQ2-cCegQIABAA&oq=sos+re+puto&gs_lcp=CgNpbWcQAzoFCAAQgAQ6BAgAEEM6CwgAEIAEELEDEIMBOggIABCxAxCDAToICAAQgAQQsQM6BAgAEAM6BAgAEB46BggAEAUQHjoGCAAQCBAeUN0TWP8oYKQraAFwAHgAgAGCBIgB-hWSAQs0LjUuMS4wLjEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=XM5zYonPCcH21sQPx4CegAQ";
}

console.log(arr[2]);
console.log(arr[1]);
console.log(arr[0]);

function addList() {
  let lista = document.createElement('ul');
  let li1 = document.createElement('li');
  li1.textContent = 'Item 1';
  let li2 = document.createElement('li');
  li2.textContent = 'Item 2';
  let li3 = document.createElement('li');
  li3.textContent = 'Item 3';
  lista.append(li1);
  lista.append(li2);
  lista.append(li3);
  document.body.appendd(lista);
}

let todosLosParrafos =document.querySelectorAll('ul');
for (let p of todosLosParrafos) {
  p.classList('dark');
}

console.log(document.getElementById('form'));
console.log(document.querySelectorAll('.cambia'));

let parrafos = document.querySelectorAll('.cambia');
for (let p of parrafos) {
  p.textContent = "Me cambiaron";
}
