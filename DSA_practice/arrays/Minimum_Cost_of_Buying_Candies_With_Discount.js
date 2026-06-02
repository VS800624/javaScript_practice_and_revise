var minimumCost = function(cost) {
    let min_cost = 0
    cost = cost.sort((a,b) => b - a)
    for (let i =0; i<cost.length; i++){
        if(i%3 !== 2){
            min_cost += cost[i]
        }
    }
    return min_cost
};

res = minimumCost([6,5,7,9,2,2])
console.log(res);