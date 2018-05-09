/**
 * reverseObject()
 *
 * Write a function called reverseObject(). It should take as input an object,
 * and it should output a new object where the keys and values are reversed.
 *
 * reverseObject({ shoe: 'Nike', type: 'soccer' })
 *  => {
 *   Nike: 'shoe',
 *   soccer: 'type'
 * }
 *
**/

function reverseObject(obj){
	//console.log(obj);
	var nobj = { };
	var prop = [ ];
	var val = [ ];

	for(var pro in obj){
		//console.log("Property :", pro);
		//console.log("value :", obj[pro]);
		prop.push(pro);
		val.push(obj[pro]);
		//nobj.push({val: prop});
	}
	for(var i; i < val.length; i++){
		var va = val[i];
		var pr = prop[i];//for(var j; j< prop.length; j++){
			nobj = {va: pr};
		//}
	}
	//nobj.push(val: prop);
	//console.log(prop);
	//console.log(val);
	//console.log(nobj);
	return nobj;
}

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var object1 = {
	 occupants: 4,
	 apartmentNo: "2b",
	 structuralIntegrity: "failing",
	 name: 'Oakridge'
}

var object2 = {
	name: "Abby",
	gender: "female",
	description: "dog",
}

var object3 = {
	make: "Ford",
	model: "Model-T",
	year: "1921",
	license: 'N89LP2'
}

var reversedObj1 = reverseObject(object1)
var reversedObj2 = reverseObject(object2)
var reversedObj3 = reverseObject(object3)

console.assert( reversedObj1.Oakridge === 'name' )
console.assert( reversedObj1['2b'] === 'apartmentNo' )
console.assert( reversedObj1.failing === 'structuralIntegrity' )
//-----------------------------
console.assert( reversedObj2.dog === 'description')
console.assert( reversedObj2.female === 'gender')
console.assert( reversedObj2.Abby === 'name')
//-----------------------------
console.assert( reversedObj3.Ford === 'make')
console.assert( reversedObj3['N89LP2'] === 'license')
console.assert( reversedObj3['1921'] === 'year')
