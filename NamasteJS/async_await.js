
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved Value")
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved Value")
    }, 5000)
})

// By property of the async function, it will always return a promise. Ether you return a promise or a value (i.e. string, objects, etc) which is a non promise value in the async function what this function do is take this value warp it inside in the promise and return it

// async function getData() {
//     // return "Namaste";
//     return p;
// }

// const dataPromise = getData()
// // console.log(data)
// dataPromise.then(res => console.log(res))

// async and await are used to handle promises 
// await is the keyword that can only be used inside a async function 
async function handlePromise() {
    console.log("Hello world")
    // JS Engine was waiting (look like waiting but the all stack is empty and the promise is in the microqueue) for the promise to be resolved
    const val = await p1
    console.log("Namaste JS")
    console.log(val)

    const val2 = await p2
    console.log("Namaste JS 2")
    console.log(val2)
}
handlePromise()
console.log("JS not waiting")
//firstly the call stack is empty (call stack is the place where every function comes and works or it will execute , our code executed) so, what will happened is as soon as this handlePromise function is invoked (or called) and this function sees there are two promises which needs to be resolved and these promises are taking there own time and resolution so basically there are two promises p1 and p2, they will be resolved at some point of time but we do not know when it is actually resolved these async promises are registered. 
// Initially the call stack is empty as soon as we call this handlePromise function so this handlePromise function will come inside your call stack and because JS is a synchronous single threaded language it has only one thread , one call stack, so it will start executing all of code inside the function one by one first it will execute line 28 and log hello in the console now it will go to line 30 and JS engine will see there is await p1 over here and js wil not wait for anything it will not wait for the promise to be resolved and this handlePromise function execution will suspend and it will move out of call Stack , it will not block the main thread , it will not freeze your page so that if any other event are happening they can execute in call stack because JS has only one call stack . So when it sees await over here this function execution suspend for that time and it will wait (in microqueue) till p1 is resolved once the p1 is resolved then only it will move ahead this p1 is resolved after 10 sec  handlePromise will again come inside the call stack and it will again start executing form where it has left at line no 30 and it will just start form here it will log Namaste JS and log the val and it will reach to line no 34 where it will see whether the p2 is resolved or not if it is resolved it will log Namaste JS and log the val if it is not resolved it will again  suspend the handelFunction and it will move out of call stack  and once the p2 is resolved now handlePromise will come back (from the microqueue) to the call stack and it is start executing the code where it has left that means line no 34 and then it will log

// function getData(){
//     // JS Engine will not wait for the promise to be resolved
//     p.then(res => console.log(res))
//     console.log("Namaste JS")
// }
// getData()

const api_Url = "https://api.github.com/users/akshaymarch7"

async function handleFetch() {
   try {
    const data = await fetch(api_Url)   //when you call this fetch it will return a promise
    const jsonValue = await data.json()
    console.log(jsonValue)
   }
    catch (err) {
        console.log(err)
    }
   }
   handleFetch()
//    handleFetch().catch(err => console.log(err))
//    fetch().then(res => res.json()).then(res => console.log(res))

   // fetch() => response.json() => result
   // fetch  is basically a promise , when this promise is resolved it will give you a response object and this response object has a body which is a readable stream and if you have to convert this readable stream to json you to response.json() and this response.json() is also a promise and when it is resolved it will give you the result or json value

   