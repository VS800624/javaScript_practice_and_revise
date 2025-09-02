// Q)1

let a = 10
let b = new Number(10)
let c = 10

console.log(a == b)
console.log(a === b)
console.log(b === c)


// Q)2

class Lizard {
    static colorChange (newColor) {
        this.newColor = newColor
        return this.newColor
    }
    constructor({ newColor = "orange"} = {}){
        this.newColor = newColor
    }
}

const tommy = new Lizard({newColor: "orange"})

// console.log(tommy.colorChange("blue")) // this will throw any error because static methods are not available at instance of class, they can be directly called at class. If you want this code to workable then you have to call this colorChange directly with the class. i.e tommy.colorChange("blue") will throw an error, because static methods are not available on instances, only on the class itself.
console.log(Lizard.colorChange("blue"))

// Static methods
// Defined with the static keyword.
// Belong to the class itself, not its instances.
// You can call them like Lizard.colorChange("blue"), but not like tommy.colorChange("blue").
// That’s why calling tommy.colorChange("blue") throws:
// TypeError: tommy.colorChange is not a function

// Instance methods
// Are called on objects created from the class.
// If you want tommy.colorChange("blue") to work, then colorChange should not be static