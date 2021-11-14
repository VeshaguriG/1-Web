let s = 'string'

String.prototype.customString = function() {
   console.log('my custom string is: string')
}
s.customString()

function Person ( name , lastName) {
   this.name = name;
   this.lastName = lastName;
}

let person = new Person ('gaga', 'veshaguri');
console.log( person.name + ' ' + person.lastName)



let obj1 = { name: 'name' }; 
let obj2 = {lastname: 'lastname'}
obj2.__proto__ = obj1
console.log(obj2.name)

let com = {
   name:"ford",
   type:'sport',
   model:'mustang',
   realese: 1995
}

for (let key in com) { 
 console.log(key , com[key])
}

let matrix1 = [ [1,2,3,4], [5,6,7,8], [9, 10, 11,12] ]
let matrix2 = [ [13, 14, 15,16], [17, 18,19,20], [21,22,23,24] ]

for ( let i = 0; i < matrix1.length; i++){
   for(let x = 0; x < matrix1[i].length; x++){
      let matrix3 = matrix1[i][x] + matrix2[i][x]  
      console.log(matrix3)

   }
} 
