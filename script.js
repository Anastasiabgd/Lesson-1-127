let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
}

console.log(user.studentstatus);

            // Or //

console.log(user['studentstatus']);


/////////////////////////////////////////

let fruits = ['bananas', 'apple', 'pear', 'peach', 'grapes'];

for(let x=0; x<5; x++) {
    console.log(fruits[x]);
}

            //Or//

for(let x=0; x<=4; x++) {
    console.log(fruits[x]);
}

            //Or//

for(let x=0; x < fruits.length; x++) {
    console.log(fruits[x]);
}

           //Or//

for(let element of fruits) {
    console.log(element);
}          

          //Or//


let x=0;
while (x < fruits.length) {
    console.log(fruits[x]);
    x++;
    
}          

///////////////////////////////////////////


let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for(let a = 0; a < numbers.length; a++) {
if(numbers[a] > 5) {
    console.log(numbers[a]);
}
    
}

                 //Or//

for(let elements of numbers) {
    if(elements > 5) {
        console.log(elements);
    }
}                 



//////////////////////////////////////////////




// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// }




//////////////////////////////////////////



// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

 



