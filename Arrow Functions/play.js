// const name = 'king';
// let age = 20;
// const hashHobbies = true;



// const summerUser =(userName,userAge,userHashHobby) =>{
//     return (
//         'Name is'+ 
//         userName +', age is'+ userAge +'and the user has hobbiles:'+
//         userHashHobby
//     );
// }

// console.log(summerUser(name,age,hashHobbies));

// const person = {
//     name:'max',
//     age:24
// }
// console.log(person)

// const person = {
//     name:'max',
//     age:24
// }
// console.log(person)

// const fetchDate = callback => {
//   setTimeout(() => {
//       callback('done!');
//   },1500);
// }

// setTimeout(() => {
//     console.log('time is done!');
//     fetchDate(text => {
//         console.log(text);
//     });
// },2000);

// console.log("hello");

// console.log("hi!");



const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
    
});

server.listen(3001);

