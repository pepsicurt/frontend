// DOM - это спрособ отображения структуры html документа в виде логической структуры 
// const btn = document.getElementById("btn")
// const handleClick = () => {
//     console.log('clicked')
// }
// btn.addEventListener('click', handleClick)



// const man = document.getElementById("man")
// const text1 = document.getElementById("text1")
// const text2 = document.getElementById("text2")
// const text3 = document.getElementById("text3")

// let count = 0

// function handleClick() {
//     count += 1
//     if(count === 1){
//         text1.style.display = 'block'
//     }else if(count === 2){
//         text2.style.display = 'block'
//     }else if(count === 3) {
//         text1.style.display = 'none'
//         text2.style.display = 'none'
//         text3.style.display = 'block'
//     }



// man.addEventListener('Click', handleClick)







const man = document.getElementById("man")
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")


let count = 0

function handleClick() {
    count += 1
    switch (count){
        case 1:
            text1.style.display = 'block'
            break
        case 2:
            text2.style.display = 'block'
            break
        case 3:
            text1.style.display = 'none'
            text2.style.display = 'none'
            text3.style.display = 'block'
            
    }
}
man.addEventListener('click, handleClick')