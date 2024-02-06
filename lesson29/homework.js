const text = document.getElementById("hide")
const caption = document.getElementById("aboutcats")
text.onclick = function () {
    caption.style.display = 'none'
}

const button = document.getElementById("show")
button.onclick = function () {
    caption.style.display = 'block'
    
}
console.log(button)


