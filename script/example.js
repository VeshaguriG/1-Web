 let x = "6";
 let y = "8";
let q = "2";


if ( x > y && x > q ) {
    console.log("largestNmb x")
}else if ( y > x && y > q) { 
    console.log("largestNmb y")
} else if ( q > x && q > y) {
    console.log("largestNmb q")
}

let std1 = "70";
let std2 = "50";
let std3 = "94";
let std4 = "65";

if ( std1 < 60) {  console.log('F')}
else if ( std1 < 70 ) { 
   console.log('D')
}  else if ( std1 < 80 ) { 
   console.log('C')
}  else if ( std1 < 90 ) { 
   console.log('B')
} else if ( std1 < 100 ) { 
   console.log('A')
} 

if ( std2 < 60) {  console.log('F')}
else if ( std2 < 70 ) { 
   console.log('D')
}  else if ( std2 < 80 ) { 
   console.log('C')
}  else if ( std < 90 ) { 
   console.log('B')
} else if ( std2 < 100 ) { 
   console.log('A')
} 
if ( std3 < 60) {  console.log('F')}
else if ( std3 < 70 ) { 
   console.log('D')
}  else if ( std3 < 80 ) { 
   console.log('C')
}  else if ( std3 < 90 ) { 
   console.log('B')
} else if ( std3 < 100 ) { 
   console.log('A')
} 
if ( std4 < 60) {  console.log('F')}
else if ( std4 < 70 ) { 
   console.log('D')
}  else if ( std4 < 80 ) { 
   console.log('C')
}  else if ( std4 < 90 ) { 
   console.log('B')
} else if ( std4 < 100 ) { 
   console.log('A')
} 



//multiply tablet 

let result = ""
for (let i = 1; i < 11; i++) {
   for (let a = 1; a < 11; a++)
   {
      result += (i * a) + " " ;
   }

}result += '\n'

console.log ( result)