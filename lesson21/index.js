// let x = 2
// let y = 0
// let operator = '/'
// if(operator === '*'){
//     console.log(x * y)
// }else if(operator === '-'){
//     console.log(x - y)
// }else if(operator === '+'){
//     console.log(x + y)
// }else if(operator === '/'){
//      if( y == 0){
//         console.log("на 0 делить нельзя")
//     }else{
//         console.log( x / y)
//     }
// }

// let a = true

// a === true ? console.log('True') : console.log('False')

// //условие ? значение если правда :  значение если ложь

// let age = 19

// age >= 18 ? console.log("Совершеннолетний") : console/log("несовершеннолетний")





// let item_kg = 6
// let delivery1 = 200
// let delivery2 = 350

// item_kg <= 5 ? console.log(`Стоимость доставки: ${delivery1} рублей`) : console.log(`Стоимость доставки: ${delivery2} рублей`)




// let day =  9


// day > 7 ? console.log('error') : day < 6 ? console.log("Work day") : console.log("Weekend")



// let done_chores = 10
// let chores_count = 100


// done_chores === chores_count ? console.log("All done") : console.log("All havent done")




let month = 12
let degrees = -20

if (month === 12 || month <= 2){
   
    // if (degrees <= -25){
    //     console.log("Зима (холодная зима)")
    // }else{
    //     console.log("Зима")
    // }
    degrees <= 25 ? console.log("Зима (холодная зима)") : console.log("Зима")

} else if(month >2 && month <=5 ){
    // if(degrees < 15){
    //     console.log("Весна (прохладная весна)")
    // }else{
    //     console.log("Весна")
    // }
    degrees < 15 ? console.log("Весна (прозладная весна)") : console.log("Весна")
} else if(month >5 && month <= 8){
    // if(degrees >= 30){
    //     console.log("Лето (жаркое лето)")
    // }else{
    //     console.log("Лето")
    // }
    degrees >= 30 ? console.log("Лето (жаркое лето)") : console.log("Лето")
}else if(month > 8 && month <= 11){
    // if(degrees < 0){
    //     console.log("Осень (прохладная осень)")
    // }else{
    //     console.log("Осень")
    // }
    degrees < 0 ? console.log("Осень (прохладная осень)") : console.log("Осень")
}

