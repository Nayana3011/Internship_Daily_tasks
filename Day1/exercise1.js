// variable declarations

//using let
let a=10;
console.log(a);

//using var
var b=25;
console.log(b);

//using const
const pi=3.14;
console.lo


// different scopes
let g_var="global";
function scope()
{
    let l_var="local";
    console.log(g_var);
    console.log(l_var);
}

scope();
console.log(g_var);


// closure
function outer() {
    let message = "This is Closure";

    return function () 
    {
        console.log(message);
    };
}

const greet = outer();

greet();



// promise
const myPromise = new Promise((resolve) => {setTimeout(() => {resolve("Promise Resolved!");}, 2000);});

myPromise.then((message) => {console.log(message);});



// async/await
function fetchData() 
{

    return new Promise((resolve) => {setTimeout(() => {resolve("Data Received");}, 2000);});

}

async function getData() {

    const result = await fetchData();
    console.log(result);

}

getData();