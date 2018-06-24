/*console.log(document);
console.log(document.documentElement); // <html></html> + content
console.log(document.head);
*/

// console.log(document.body);
//1- element, 3 - text, 8 - comment, 9 -document

// NODES, NODE types
/*console.log(document.body.childNodes); // collection of child nodes
console.log(document.body.childNodes[1].nodeType); //1 - element
console.log(document.body.childNodes[3].nodeType);
console.log(document.body.childNodes[5].nodeType); //8 - comment
console.log(document.body.childNodes[0].nodeType); //3 - text
console.log(document.nodeType); // 9 - document
*/
/*console.log(document.body.childNodes);*/
// console.log(document.body.childNodes[3].previousSibling);
// console.log(document.body.childNodes[3].nextSibling);
// console.log(document.body.childNodes[3].parentNode);
// console.log(document.body.childNodes[3].firstChild);
// console.log(document.body.childNodes[3].lastChild);
/*var elems = [];
for (var i = 0; i < document.body.childNodes.length; i++) {
	if (document.body.childNodes[i].nodeType != 1) {
		continue;
	}
	elems.push(document.body.childNodes[i]);
}
console.log(elems);*/

//______________________________________________________
//Elements

console.log(document.body.children[3]);
console.log(document.body.children[3].tBodies);
console.log(document.body.children[3].rows);
console.log(document.body.children[3].rows[0].cells);
document.body.children[3].rows[0].cells[0].innerHTML = 'innerHTML';
console.log(document.body.children[3].rows[0].cells[1].innerHTML);
// console.log(document.body.children); //HTMLCollection !== ARRAY
/*document.body.children.forEach(function(el) {
	console.log(el);
});*/

/*console.log(document.body.children[3].previousElementSibling);
console.log(document.body.children[3].nextElementSibling);
console.log(document.body.children[3].parentElement);
console.log(document.body.children[3].firstChild);
console.log(document.body.children[3].lastChild);
// MASSIVE
var arr = Array.prototype.slice.call(document.body.children, 0, document.body.children.length);
console.log(arr);
*/

//document methods to get elements
// one element by id
/*var header = document.getElementById('header');
console.log(header);
// console.log(secondHeader); NOT valid!

//!!!S
var listItems = document.getElementsByTagName('li');
console.log(listItems);

var names = document.getElementsByName('names');
console.log(names);

var newItems = document.getElementsByClassName('new');
console.log(newItems);

//document, element
var list = document.getElementById('list');
var selectedElement = list.querySelectorAll('#el');
console.log(selectedElement);


*/

var newItems = document.getElementsByClassName('new');
//
console.log(newItems[0].innerHTML);
// console.log(newItems[1].textContent);
console.log(newItems[1].innerText);
newItems[2].innerHTML = '<h3>Hello</h3>';
newItems[3].innerText = '<h3>Hello2</h3>';
