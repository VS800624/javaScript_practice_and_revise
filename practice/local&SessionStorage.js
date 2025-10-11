
// localStorage.setItem("hello","world")
// console.log(localStorage.getItem("hello"))
// localStorage.removeItem("hello1")
// localStorage.clear()

// const user = {name: "Akshay"}
// localStorage.setItem("user-copy", JSON.stringify(user))
// JSON.parse(localStorage.getItem("user-copy"))

function setObjectLocalStorage(key,value,operation){
    if(operation==="set")
    localStorage.setItem(JSON.stringify(key,value));
    else if(operation==="get")
    localStorage.getItem(JSON.parse(key));
    else if(operation==="remove")
    localStorage.removeItem(key);
    else if(operation==="clear")
    localStorage.clear();
    else
    console.log("invalid operation");
}
// local storage is stored on the window object (global object) of the browser

// Same-Origin Policy for Local Storage:

// Local Storage in the browser follows the same-origin policy.
// That means:
// A web page can only access the localStorage data that was saved under the same origin.
// Origin = Protocol + Domain + Port

// Example:
// https://example.com:443 and https://example.com → ✅ same origin
// http://example.com and https://example.com → ❌ different (protocol mismatch)
// https://example.com and https://sub.example.com → ❌ different (domain mismatch)

// What it means in practice
// If you store something in localStorage on https://myshop.com, only pages from https://myshop.com can read it.
// A different site like https://other.com cannot read/write that data.

// Why?
// This prevents cross-site attacks (like one website stealing data from another website’s localStorage).
// So each website gets its own separate storage space.