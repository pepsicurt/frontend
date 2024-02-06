//history
//navigator
//location

//window.history.go(+1)

// document.querySelector("selector")

// document.getElementById("hi")

// document.getElementsByClassName('div')

// document.getElementById('btn').onclick = function (){
//     alert("Ouch! Dont click here")
// }


// document.getElementById('back').onclick = function () {
//     window.history.go(-2) 
// }




const btn = document.getElementById('hideBtn')
const text = document.getElementById("hide")

btn.onclick = function () {
    text.style.display = 'block'
}