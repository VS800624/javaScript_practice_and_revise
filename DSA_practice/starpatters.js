// let n = 4
// for (i=0; i<n; i++){  
//     let row = ""
//     for (j=0; j<n; j++){
//         row = row + "* ";
//     }
//     console.log(row)
// }

// let n = 4
// for (i= 0 ; i<n; i++){
//     let row = ""
//     for(j=0; j<=i; j++){
//         row = row + "* "
//     }
//     console.log(row)
// }

// or 

// let n = 4
// for (i=0; i<n; i++){
//     let row = ""
//     for (j=0; j< i+1; j++){
//         row = row + "* "
//     } 
//     console.log(row)
// }

// let n = 5
// for (i=0; i<n; i++){
//     let row = ""
//     for (j=0; j<=i; j++){
//         row = row + (j+1) + " "
//     }
//     console.log(row)
// }

// or 

// let n = 5
// for (i=0; i<n; i++){
//     let row = ""
//     for (j=1; j<=i; j++){
//         row = row + j + " "
//     }
//     console.log(row)
// }

// let n = 5
// for (i=0; i<n; i++){
//     let row = ""
//     for (j=0; j<=i; j++){
//         row = row + (i+1) + " "
//     }
//     console.log(row)
// }

//  or
// let n = 5
// for (i=1; i<=n; i++){
//     row = ""
//     for (j=1; j<=i; j++){
//         row = row + (i)
//     }
//     console.log(row)
// }

let n = 5
// for (i=0; i<n; i++){
//     row = ""
//     for (j=0; j<n-i; j++){
//         row = row + (j+1) + " "
//     }
//     console.log(row)
// }

// for (i=0 ; i<n; i++){
//    let row = ""
//    for (j=0; j<n-i; j++){
//     row = row + "*" 
//    }
//    console.log(row)
// }

for (i=0; i<n; i++){
    let row = ""
    // j loop is adding empty spaces or dots
    for (j=0; j<n-(i+1); j++){
        row = row + " ";
    }
    // k loop is adding stars
    for (k=0; k<i+1; k++){
        row = row + "*" 
    }
    console.log(row)
}

 for (i=0; i<=n; i++){
    let row = "";
    let  toggle = 1;
    for (j=0; j<i+1; j++){
        row = row + toggle + " "
        // switch the toggle form 0 to 1 or 1 to 0
        if (toggle ==  1){
            toggle = 0
        } else {
            toggle = 1
        }
    }
    console.log(row)
 }

 let toggle = 1
 for (i=0; i<n; i++){
    row = ""
    for (j=0; j<=i; j++){
        row = row + toggle + " "
        if (toggle == 1) {
            toggle = 0
        } else {
            toggle = 1
        }
    }
    console.log(row)
 }