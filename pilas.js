
var assert = require('assert');

class Node{
    constructor(data){
    this.data = data;
    this.next = null;
	}
}

class Pila{
	
	constructor(){
		
		this.head = null;
		this._length= 0;
	}

	insert(value){
    	var node = new Node(value);
		var current = this.head;
	
		if (!current) {
			this.head = node;
			this._length++;
			return this;
		}
		node.next=this.head;
		this.head=node;
		this._length++;
	};
	pop(){
		var pepe = this.head;
		this.head= this.head.next;
		this._length --;
		return pepe.data;
		console.log(pepe)
		
	}
	getAll(){
		var conejo = this.head;
		for(i=0; i<this._length; i++){
			
			conejo=conejo.next
		}
	}
	len(){
		return this._length
	}
}

var stack = new Pila();


/*stack.insert(1);
assert.equal(stack.pop(), 1, 'No funciona Pop');
assert.equal(stack.len(), 0, 'No cuenta bien los elementos');

stack.insert(1);
stack.insert(2);
stack.insert(3);
assert.equal(stack.len(), 3, 'No cuenta bien los elementos');*/

var array = [1, 2, 3, 4]


function invertir(array){
	var p = array.length; 
	for(i=0; i<p; i++){
		var x = array.shift();
		console.log('esta es la x', x)
		stack.insert(x)
	}
		var t = stack._length
	for(i=0; i<t; i++){
		var y = stack.pop();
		console.log('esta es la y', y)
		array.push(y)
	}
	return array
console.log(array)
}



inversedArray = invertir(array);
assert.deepEqual(inversedArray, [ 4, 3, 2, 1 ], 'No invierte bien.');



//Insertar nuevo nodo, que nuevo nodo sea nuevo header, y que nuevo modo apunte a viejo nodo*/



