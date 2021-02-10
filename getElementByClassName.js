//document.getElementsByClassName const items = document.getElementsByClassName('collection-item');
 console.log(items);

console.log(items[0]);
items[0].style.color = 'blue';
items[0].textContent = "UNO";

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//document.getElementByTagName();
 let minas = document.getElementsByTagName('li');
 console.log(minas);
 console.log(minas[0]);
 minas[0].style.color = 'orange';
 minas[0].textContent = 'greed';

// Convert HTML Collection to Array
minas = Array.from(minas);
minas.reverse();
minas.forEach(function(mina, index){
  console.log(mina.className);
  mina.textContent = `${index}: MINAYEON`;
});


console.log(minas);

// document.querySelectorAll()
const nayeons = document.querySelectorAll('ul.collection li.collection-item');

console.log(nayeons);

nayeons.forEach(function(nayeon, index){
    nayeon.textContent = `${index}: NAYEONIZED`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li){
  li.style.background = 'yellow';
  li.style.color = '#ccc';
})

for(let a = 0; a < liEven.length; a++) {
    liEven[a].style.background = 'orange'
}