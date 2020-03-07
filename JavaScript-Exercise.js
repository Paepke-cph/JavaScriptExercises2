let names =  ["Lars", "Jan", "Peter", "Bo", "Frederik"];

// Exercise 1.A - Get a filtered list of all names including the character 'a'
console.log("Exercise 1")
var filteredNames = names.filter(name => {
    return name.includes("a");    
});
console.log(filteredNames);

// Exercise 1.B - Reverse all names in the 'names' array
var reversedNames = names.map(name => {
    return name.split("").reverse().join("");
});
console.log(reversedNames);

// Exercise 2.A - Create your own filter method.
console.log("Exercise 2")
function myFilter(array, callback) {
    var result = [];
    array.forEach(element => {
        if(callback(element)) {
            result.push(element);
        }
    });
    return result;
}
console.log(myFilter(names, e => {return e.includes("a")}));

// Exercise 2.B - Create your own map method
function myMap(array, callback) {
    var result = [];
    array.forEach(element => {
        result.push(callback(element));
    });
    return result;
}
console.log(myMap(names, e => {return e.split("").reverse().join("")}));
 
// Exercise 3.A - add a new version of filter to the Array Object.
console.log("Exercise 3")
Array.prototype.newFilter = function (callback) {
    var result = [];
    this.forEach(element => {
        if(callback(element)) {
            return result.push(element);
        }
    })
    return result;
}
var newArray = names.newFilter(e => e.includes("a"));
console.log(newArray);

// Exercise 3.B - add a new version of the map to the Array Object.
Array.prototype.newMap = function(callback) {
    var result = [];
    this.forEach(element => {
        result.push(callback(element));
    })
    return result;
}
newArray = names.newMap(e => e.split("").reverse().join(""));
console.log(newArray);

// Exercise 4.A
var numbers = [1,3,5,10,11];
console.log("Exercise 4");
var addedValues = numbers.map((element,index,numbers) => {
    return (index+1 < numbers.length) ? element+numbers[index+1] : element;
})
console.log(addedValues);

// Exercise 4.B
var mapppedAnchorNames = names.map((element,index,names) => {
    var res = `\t<a href="">${element}</a>`
    if(index == 0) {
        res = `<nav>\n`+res;
    } else if(index == names.length-1) {
        res += `\n</nav>`;
    }
    return res;
});
console.log(mapppedAnchorNames.join("\n"));

// Exercise 4.C

var jsonNames = [
    {name:"Lars",phone:"1234567"},
    {name:"Peter",phone:"67843"},
    {name:"Jan",phone:"98547"},
    {name:"Bo", phone:"79345"}
];

function mapToTable(elements) {
    var output = elements.map(element => {
        return `<tr><td>${element.name}</td><td>${element.phone}</td></tr>` 
    }).join("");
    return output;
}

// Exercise 4.D - uncomment the following piece of code and run
// index.html in a browser.
// Exercise 4.E - 
/*
function fillTable(data) {
    var tbody = document.querySelector("#tableBody");
    console.log(mapToTable(data));
    tbody.innerHTML = mapToTable(data);
}

(function(){
    fillTable(jsonNames);
    var button = document.createElement("button");
    button.innerText = "Filter";
    button.addEventListener("click", e => {
        fillTable(jsonNames.newFilter(e => e.name.includes("a")));
    });
    document.body.append(button);
})();
*/

// Exercise 5.A
console.log("Exercise 5");
var all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(","));

// Exerise 5.B
var num = [2,3,67,33];
var sum = num.reduce((acc,member,index,arr) => {
    return acc += member;
},0);
console.log(sum);

// Exercise 5.C
var members = [
    {name:"Peter",age:18},
    {name:"Jan",age:35},
    {name:"Janne",age:25},
    {name:"Martin",age:22}
]

var avg = members.reduce((acc, member, index, arr) => {
    var value = member.age + acc[index];
    if(index < arr.length-1)
        acc[index+1] = (value);
    acc[index] = (value / (index + 1));
    return acc;
},new Array(members.length).fill(0));
console.log(avg);

// Exercise 5.D
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

var stats = votes.reduce((acc,member,index,arr) => {
    acc[member] ? acc[member]++ : acc[member] = 1;
    return acc;
},{});

console.log(stats);