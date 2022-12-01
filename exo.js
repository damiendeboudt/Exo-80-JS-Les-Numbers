let numb = document.getElementById("is-integer").innerText;
console.log(numb)
//exo1 ok
if (Number.isInteger(numb)) {
    document.getElementById("is-integer").innerHTML = numb + " ===> est un nombre entier."
} else {
    document.getElementById("is-integer").innerHTML = numb + " ===> n'est pas un nombre entier."
}

//exo2 ok
let numb2 = document.getElementById("is-nan").innerText;
console.log(numb2)

if (isNaN(numb2)) {
    document.getElementById('is-nan').innerHTML = numb2 + " ===> est NaN ( Not a Number )"
}
else {
    document.getElementById('is-nan').innerHTML = numb2 + " ===> est un nombre"
}

//exo3 ok
const numb3 = document.getElementById("parse-float").innerText
console.log(numb3)
let age = Number.parseFloat(numb3) * 31
console.log(age)
let numb31 = numb3.replace("52.563", age)
document.getElementById("parse-float").innerHTML = numb31

//exo4 ok
const numb4 = document.getElementById("parse-int").innerText;
let age2 = Number.parseInt(numb4) / 31
let newResult = Number.parseInt(age2)
console.log(newResult)
let numb41 = numb4.replace(65, newResult);
document.getElementById("parse-int").innerHTML = numb41

//exo5 ok
let numb5 = document.getElementById("to-fixed").innerText;
numb5 = Number.parseFloat(numb5).toFixed(2)
document.getElementById("to-fixed").innerHTML = numb5
console.log(numb5)




