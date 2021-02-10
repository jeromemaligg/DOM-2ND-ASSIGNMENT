let value;

const list = document.querySelector('ul.collection');
const listItems = document.querySelector('li.collection-item:first-child');

value = listItems
value = list;

// Get Child Nodes
value = list.childNodes;
value = list.childNodes[1];
value = list.childNodes[4].nodeType;
value = list.childNodes[5].nodeName;

// Get Children Element Nodes
value = list.children;
value = list.children[0];
list.children[0].textContent = 'Jerome Malig'




console.log(value);