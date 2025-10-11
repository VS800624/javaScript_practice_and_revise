

// Sometimes our functions is called lot of times we attack a function to event listener and is just calling repeatedly unnecessary so we could limit the rate of that execution and optimize the performance of our web app so, that's what we do with debouncing and throttling.

// Eg: Suppose we have search bar in our website and we are searching for samsung note  it give us certain suggestion and if we type just s and stop it will give show us the search related queries started with s (wether it could be sony,samsung, smart watch, or anything starting from s ) suppose we have getResults() API method, this method what it will do is go on the network makes an API call and get back the data and we just render it to the UI and we attack this method at the keypress event , on the keypress event on each and every key press this getResults() API call is made but there are cons in this approach  if on each and every key press event we will trigger this API call getResults() so what will happen is we type "samsung note" is 11 key stroke events, in each and every key stroke event if we fire this getResults() that means after this query search we have made API calls and this is a lot (eg suppose thinks of it if  millions of users are searching in this website we are making millions of API call which will effect the performance of the website) so , instead of making API call for each and every keypress event we could limit the rate of API calls. We could do it by two ways:
// 1)Debouncing
// 1)Throttling


// Debouncing:
// Debouncing says that only make an API call if the difference between two keypress event are greater than the certain limit. So, if suppose we are typing "samsung" and only if the difference between two keypress stroke events is greater than let's say 300ms tan only make an API call (or function call) and get us the results. So, by doing this  we are saving lots of API calls (i.e. we are not making this function calls after each and every key stroke) in this scenario instead of making 11 API calls we are making 2 or 3 API calls. 
// Debouncing is if the difference between the key stroke events is certain time (eg: 300ms) then only make the function call. 
// Debouncing delays the execution of a function until there's a pause, typically after a certain period of inactivity.
// Debouncing is used to limit how often a function runs, by making it wait until the user stops triggering it for a given time.
// it ensures that the function only runs after a certain period of inactivity following the last event.
// Debouncing makes sure a function runs only after a certain period of inactivity.If the event keeps firing, the timer resets.


// Throttling:
// Throttling says that if there are lots of API calls is happening suppose the user is typing "samsung" so what will happen is only make the API call  (ot function call) after the certain limit of time (eg: 300ms) , suppose the function call was made at keypress event at pressing  "s" and get the results all starting with "s" then wait until certain period of time let's say 300ms so upto 300ms it ignores all the keypress events  and only make the function call after 300ms. 
// Throttling if the difference between the last function call and latest function call is a certain time (eg: 300ms) then only make a function call.
// Throttling limits the rate at which a function can be called, ensuring it's not executed too frequently.
//  Runs at regular intervals no matter how many times you trigger it.
// Ensures the function runs at most once every X milliseconds.
// Even if  an event happens many times (like scrolling or resizing), throttling makes sure the function runs only once every fixed time period (like once every 500ms).
// Like replying at most once every 5 seconds while they’re talking, even if they keep saying stuff.
// Throttling makes sure a function runs at most once in a given time interval, no matter how many times the event fires.

// Scenarios where Debouncing is useful:

// 1) Search Box Auto-Suggestions:
// When a user types in a search bar, you don’t want to call the API on every keystroke.
// Debounce waits until the user pauses typing (say 500ms) before making the API call.

// 2) Window Resize:
// When resizing the browser, many resize events fire rapidly.
// Debounce ensures layout recalculation happens only once after resizing stops.

// 3) Form Validation:
// Validate input fields (like email) only after the user stops typing.

// Scenarios where Throttling is useful:

// 1) Scroll Events (Infinite Scrolling / Lazy Loading)
// scroll fires continuously when scrolling.
// Throttle ensures the function (e.g., loading more data or checking position) runs only once every X milliseconds.

// 2) Button Click Spam
// Prevents multiple API calls when a user rapidly clicks a button.
// Mouse Move Events (e.g., Dragging, Drawing on Canvas)

// 3) Mouse events fire very frequently.
// Throttle ensures smooth performance without overwhelming the browser.

// 4) Game Controls / Key Presses
// Throttling ensures actions trigger at controlled intervals instead of firing endlessly when a key is held down.

// Q) Which one is better debouncing or throttling ? 
// It totally depends upon the use case and the scenario where you applying these concepts.Sometimes using debouncing is makes more sense or sometimes using throttling makes moe sense

// It’s not about one being better than the other. Debounce is best when you want the action to run after the user has finished (like typing). Throttle is best when you want the action to run at controlled intervals while the event keeps firing (like scrolling). So, the choice depends on the use case