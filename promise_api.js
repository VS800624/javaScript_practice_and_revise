const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 Success"), 3000)
    setTimeout(() => reject("P1 Fail"), 3000)
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 Success"), 1000)
    setTimeout(() => reject("P2 Fail"), 1000)
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Success"), 2000)
    setTimeout(() => reject("P3 Fail"), 2000)
})


// Promise.all([p1,p2,p3]).then(res=> {
//     console.log(res)
// })
// .catch((err) => {
//     console.error(err)
// })
// Promise.allSettled([p1,p2,p3]).then(res=> {
//     console.log(res)
// })
// .catch((err) => {
//     console.error(err)
// })   
// Note: Promise.allSettled is the safest option among all the promises. Promise will return a object.

// Promise.race([p1,p2,p3]).then(res=> {
//     console.log(res)
// })
// .catch((err) => {
//     console.error(err)
// }) 

Promise.any([p1,p2,p3]).then(res=> {
    console.log(res)
})
.catch((err) => {
    console.error(err)
    console.log(err.errorsf)
}) 



// promise.all(p1,p2,p3) p1 takes 3 sec p2 takes 2sec p3 takes 2sec

//  promise.all takes an array of promises as input and makes parallel API calls, and if the promises are success i.e. promise are resolved it will give the output of array


//  as soon as any of the promise get rejected promise.all will throw an error , promise.all will also be a failure and output will be error and if p2 gets a failure it will immediately as soon as error happened it will return the error  it will not wait for the other promises so, as soon as the first promise gets rejected first time it will just quickly immediately return the result error

// So, Promise.all handles multiple promises simultaneously, returning an array of results when all promises are fulfilled, and throwing an error if any promise fails. If any promise in Promise.all fails, the entire operation fails, and an error is thrown immediately without waiting for other promises.

//  Promise.allSettled waits for all promises to settle (whether fulfilled or rejected) before returning an array of results or errors, making it suitable for scenarios where partial failures are acceptable.

// Note: Whenever you make a api call or whenever promise the created or executed you cannot cancel the promise in between it is not possible in js at this point of time

//  Promise.race returns the result of the first settled promise, whether it's success or failure, making it ideal for scenarios where the fastest response is required.

// Promise.any is similar to Promise.race but waits for the first successful promise rather than the first settled one, making it suitable for scenarios where success is prioritized over speed. If all the promises are fails it will collet all the errors and it will return aggregate error and the aggregate error will be the array of all the errors

// Promise.any returns the result of the first successful promise and ignores subsequent failures, waiting for success.
//   Promise.any collects errors if all promises fail and returns an aggregated error array.
//   Promise.all returns an array of all results when all promises succeed, waiting for all to finish.
//  🛠 Promise.allSettled waits for all promises to settle (succeed or fail) before returning results, ensuring all promises are accounted for.

//  Promise.race returns the result of the first settled promise, whether success or failure, racing to return the fastest result.
//   Promise status can be checked for rejection along with the reason for rejection, providing clarity in handling errors.
//   Promise.race returns the result of the first settled promise, whether it's a success or failure, regardless of the order in which promises are fulfilled.
//   Explaining concepts in interviews requires not only understanding but also the ability to articulate ideas clearly, which is often a stumbling block for many candidates.
//   Promise.race resolves to the value/error of the first settled promise, regardless of success or failure, emphasizing the importance of understanding terminology in the Promise world.
//  Familiarity with Promise terminology like "settled," "resolved," "rejected," "fulfilled," and "rejected" is crucial for effectively working with Promise APIs.
//   Promise.any waits for the first settled promise, and if it's a success, returns the result, ignoring subsequent rejections until a success occurs.
//   When all promises fail with Promise.any, it results in an "aggregate error," which consolidates all the errors encountered during execution.
//  Handling aggregate errors in Promise.any involves accessing the errors in an array format, allowing for comprehensive error management and analysis.

