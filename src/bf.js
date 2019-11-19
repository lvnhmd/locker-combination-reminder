function subsetsum(a, n) {
    var r = [];
    for (var i = parseInt(a.map(function() { return 1 }).join(''), 2); i; i--) {
        var b = i.toString(2).split('').reverse().map(function(v, i) {
            return Number(v) * a[i]
        }).filter(Boolean);
        if (eval(b.join('+')) == n) r.push(b);
    }
    return r;
}

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var n = 26;
console.log(subsetsum(a, n)); // -> [[3, 11, 2], [5, 3, 8], [5, 11]]
