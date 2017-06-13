var assert = require('assert');

var array = [15, 47, 14, 42, 31,
81, 4, 14, 77, 82,
25, 13, 18, 14, 33,
10, 64, 43, 41, 5,
59, 31, 15, 80, 26,
66, 50, 35, 77, 46,
98, 26, 42, 8, 76,
60, 81, 78, 45, 86,
69, 37, 75, 76, 20,
32, 78, 4, 55, 8,
89, 62, 50, 13, 74,
94, 86, 51, 36, 42,
87, 17, 42, 25, 35,
90, 57, 77, 60, 29,
14, 60, 57, 81, 26,
46, 99, 47, 65, 61,
63, 15, 72, 38, 71,
67, 29, 72, 25, 33,
70, 63, 23, 33, 84,
91, 26, 31, 59, 1]

//MINIMO

function min (array){
	var min = array[0]; 
	for(i=1; i<array.length; i++){
		if(array[i] < min){
			min = array[i]
		}
	}
	return min
}

// Mínimo
var minValue = min(array);
assert.equal(minValue, 1, 'Minimo no coincide');
console.log(minValue)

//MAXIMO

function max(array){
	var max = array[0]; 
	for(i=1; i<array.length; i++){
		if(array[i] > max){
			max = array[i]
		}
	}
	return max
}

var maxValue = max(array);
assert.equal(maxValue, 99, 'Maximo no coincide');
console.log(maxValue)

//SUMA

function total(array){
	var total = 0; 
	for(i=0; i<array.length; i++){
		
		total = total+array[i] 
		
	}
	return total
}

var totalValue = total(array);
assert.equal(totalValue, 4850, 'Total no coincide');
console.log(totalValue)

//PROMEDIO

function promedio(array){
	var total = 0; 
	for(i=0; i<array.length; i++){
		
		total = total+array[i] 
		
	}
	var promedio = total/array.length
	return promedio
}

var avgValue = promedio(array);
assert.equal(avgValue, 48.50, 'Avg no coincide');
console.log(avgValue)

//VARIANZA

function varianza(array){
	var totalvar = 0; 
	for(i=0; i<array.length; i++){
		
		totalvar += Math.pow((array[i]-avgValue), 2)   
		
	}

	var variance = totalvar/array.length;

	return variance;
}

var vrnc = varianza(array);
assert.ok((vrnc - 696.55) < 0.1, 'Variance Deviation no coincide');
console.log(vrnc)

//DESVIACION

function desviacion(array){
	var totalstd = 0; 
	for(i=0; i<array.length; i++){
		
		totalstd += Math.pow((array[i]-avgValue), 2)   
		
	}

	var standard = Math.pow((totalstd/array.length), 0.5);

	return standard;
}

var stdValue = desviacion(array);
assert.ok((stdValue - 26.392233706149238) < 0.1, 'Std Deviation no coincide');
console.log(stdValue)



