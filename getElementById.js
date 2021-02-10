// document.getElementById();

// console.log(document.getElementById('task-title'));

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = 'green';
// taskTitle.style.color = '#002';
// taskTitle.style.padding = '20px';
// taskTitle.style.fontStyle = 'italic';

// taskTitle.textContent = 'Sup';
// taskTitle.innerText = 'My Crib';
// taskTitle.innerHTML = '<h1 style="color: white">Task List</h1>';


// document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// By Font Style Color
document.querySelector('li').style.color = 'orange';
document.querySelector('ul li').style.color = 'orange';


document.querySelector('li:last-child').style.color = 'violet';
document.querySelector('li:nth-child(3)').style.color = 'white';
document.querySelector('li:nth-child(2)').style.color = 'gray';

// By Text Content
document.querySelector('li:nth-child(2)').textContent = "Mina";
document.querySelector('li:nth-child(1)').textContent = "Nayeon";
document.querySelector('li:nth-child(3)').textContent = "Momo";
document.querySelector('li:nth-child(4)').textContent = "Sana";



// Odd & Even Color Design 
document.querySelector('li:nth-child(odd)').style.background = "black";
document.querySelector('li:nth-child(even)').style.background = "blue";
document.querySelector('li:nth-child(3)').style.background = "green";
document.querySelector('li:nth-child(4)').style.background = "yellow";