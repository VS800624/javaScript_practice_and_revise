const expensive = () => {
    console.log("Expensive")
}


// better expensive function


const throttle = (func,limit) => {
    let flag = true
    return function () {      // we made a closure here so that we don't re-initialize our flag here again and again
        let context = this
        args = arguments
        if(flag) {
            func.apply(context,args)
            flag = false
            setTimeout(() => {
                flag = true
            },limit)
        }
    }
}

const betterExpensive = throttle(expensive,2000)
window.addEventListener("resize",betterExpensive)

// Throttling:
// Throttling is generally used for performance optimization or rate limiting the function call or function execution. 
// eg: Suppose we have a button and onClick on this button we are making a function call ,onClick() function is called and this onClick function is expensive it fetches some data from API and return data so what happens is suppose the user is clicking the button again and again but it not a good way to make a API call at each click there would be lot of scenario we have to make a API call in each click but suppose we have to limit the rate what we can do is limit this rate by using throttling so we can use throttling on this onClick method which wil hinder the call of this on click method, if the user is making  so many click events so what will happen suppose a function call happens at the first click event so what throttling will do is throttling will delay this function call for a certain limit of time (eg: 500ms) so if a function call is happen in this click event, the next function call only happen after 500ms has passed , it is limiting the  rate of this onClick method which is being called , so that is what throttling is .
// Runs at regular intervals no matter how many times you trigger it.
// Ensures the function runs at most once every X milliseconds.
// Even if  an event happens many times (like scrolling or resizing), throttling makes sure the function runs only once every fixed time period (like once every 500ms).
// Like replying at most once every 5 seconds while they’re talking, even if they keep saying stuff.
// eg: Throttling button click me use kia jata he taki user jitne baar bhi click kare toh vo us delay ke baad hi apply ho.
// What throttling does: ensures that a function runs at most once in a fixed delay (say 2 seconds), no matter how many times the event happens in between.
// In button clicks: if the user clicks the button very fast (10 times in 2 seconds), throttling will make sure the handler runs only once every 2 seconds.

// What I noticed is we need to include an extra return statement if flag is not true.. something like following If(!flag) return;
// Otherwise it will not throttle as intended because multiple setTimeout are going to be registered and they would mess up flag value.

// function throttleOne(fn, ms) {
//   let flag = true;

//   function wrapper(){
    
//     if(!flag) return;

//     if(flag){
//       fn.apply(this, arguments);
//       flag = false;
//     }

//     setTimeout(function(){
//       flag = true;
//     }, ms);
//   }

//   return wrapper;

// }

// let betterthrottleOne = throttleOne(expensive, 3000);