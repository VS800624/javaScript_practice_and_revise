let abc = 100
if(function xyz(){}) {
    abc = abc - typeof(xyz)
}
console.log(abc)
