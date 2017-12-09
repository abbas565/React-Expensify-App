// console.log('destructuring');

// const person = {
//     name: 'Abbas',
//     age: 47,
//     location: {
//         city: 'vancouver',
//         temp: 19
//     }
// };
// const { name : firstname = 'Anonymous', age } = person;

// console.log(`${firstname} is ${age}.`);

//    const{ city, temp:temprature }=person.location; 
//     if(city && temprature){
//         console.log(`it's ${temprature} in ${city}.`);
//     }

    // if(person.location.city && person.location.temp){
    //     console.log(`it's ${person.location.temp} in ${person.location.city}.`);
    // }

// const address = ['408 holdom', 'burnaby', 'BC', 'V5B3T9'];
// const [,city,state='Ontario',zip]=address;
// console.log(`I live in ${city} ${state}`);

const item=['cofee(hot)','$2','$2.5','$2.75'];
const[cofee,smallP,mediumP,largP]=item;


console.log(`The medium ${cofee} is ${mediumP} `);