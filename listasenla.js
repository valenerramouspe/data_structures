var assert = require('assert');

class Node{
    constructor(data){
    this.data = data;
    this.next = null;
	}
}


class Lista{
	
	constructor(){
		
		this.head = null;
		this._length= 0;
	}

	insert(value){
    	var node = new Node(value);
		var current = this.head;
	
		if (current===null) {
			this.head = node;
			this._length++;
			return this;
		}
		else{
		while(current.next){
			current=current.next;
			this._length++
		}
		console.log(current.data);
		current.next=node
		}
	};

	/////////////////////////////////////
	pop(){
		var pepe = this.head;
		this.head= this.head.next;
		this._length --;
		return pepe.data
		
	}
	getAll(){
		var current = this.head;
		var i =0;
		while(current.next){
			console.log('getAll:', current.data);
			current=current.next;
			i++
			
		}
		console.log("getAll:",current.data)
	}
	///////////////////////////////
	get(){
		var current = this.head
		while(current.next.next) {
			/*return this._length*/
			current = current.next;
		}
		var data = current.next.data;
		console.log(data)
		current.next = null;
		return data;
	}
	getSpecific(index){
		var current = this.head;
		for(var i = 0; i<index; i++){
			current=current.next
		}
		return current.data;
	}
	find(value){
		var current = this.head; 
		while(current){
			if(current.data == value){
				console.log(current.data);
				return current.data;
			};
			current=current.next;
		}
		return null
	}

}

var lista = new Lista();

lista.insert(1);
lista.insert(2);
lista.insert(3);
lista.insert(4);

lista.getAll() // 1, 2, 3, 4


assert.equal(lista.getSpecific(0), 1, 'No encontró el primer elemento');
assert.equal(lista.getSpecific(3), 4, 'No encontró el ultimo elemento');

assert.equal(lista.get(), 4, 'No sacó bien el primero');

assert.equal(lista.pop(), 1, 'No sacó bien el último');

assert.equal(lista.find(2), 2, 'No busca bien');
assert.equal(lista.find(4), null, 'No busca bien');