/**
 * countTheHoles()
 *
 * Write a `countTheHoles` function that takes an intenteger and counts the
 * number of holes for each number.
 *
 * For example: the number 8042 would have 4 holes:
 *  - 2 holes in the 8
 *  - 1 hole in the 0, 4, 6, 9
 *
 *
**/




var countTheHoles = function(num){
  //console.log(num);
  //console.log(typeof(num));
  var nu = num.toString();
  //console.log(typeof(nu));
  var coun = 0;
  var aux = 0;
  for(var i = 0; i < nu.length; i++){
    //console.log(typeof(nu[i]));
    var n = parseInt(nu[i]);
    //console.log(typeof(n));
    //console.log(n);
    if(n === 8){
      aux = 2;
    }else if(n === 0 || n === 4 || n === 6 || n === 9){
      aux = 1;
    }else{
      aux = 0;
    }
    coun = coun + aux;
    //console.log(aux);

  }
  //console.log(coun);
  return coun;
}


//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.assert(  countTheHoles(301923) === 2  )
console.assert(  countTheHoles(880216) === 6  )
console.assert(  countTheHoles(40442) === 4 )
console.assert(  countTheHoles(808) === 5  )
