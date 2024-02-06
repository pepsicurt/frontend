




//1

// let num = 1
// let i = 1
// while( i <= 5){
//     num = num * i;
//     console.log(num)
//     i++
// }



//2

// let i = 10
// while(i >= 1){
//     console.log(i)
//     i--
// }



// let a = 0
// for(let i = 1; i <= 8; i++){
//     a = a + i ** 2
//     console.log(a)
// }



// let massive = []
// for(let i = 1; i <= 10; i++) {
//     massive.push(i)
//     console.log(massive)
// }


// let nums = [0,2,3,6]
// nums[0] = 3
// console.log(nums)

// nums[0] //получение элемент по индексу
// nums[0] = 3 //меняем массив
// nums.push(9) //добавляем число 9 в массив


// let massive = [3, 7, 1, 9, 2]
// for (let i = 0; i < massive.length; i++) {
//     massive[i] = massive[i] * 2
// }
// console.log(massive)




// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }




// let massive = [1,2,3,4,5]
// for(let i = 1; i < massive.length; i++) { 
//     massive[i] ** 2
//    console.log(massive[i] ** 2)
// }


// let mass = [] 
// for(let i = 1; i <= 20; i++){
//     mass.push(i)
// }
// console.log(mass)
// let i = 0
// let num = 20
// while(i < 20){
//     mass[i]
//     console.log(mass[i])
//     if(mass[i] %2 == 0){
//         console.log("четн")
//     }else{
//         console.log("нечет")
//     }
//     i++
    




// while(i %2 == 0){
//     console.log()
   
// }












//3

// let mass = [1, 2, 3, 4, 5] //это массив и внутри него задаем цифры
// for (let i = 0; i < mass.length; i++) { //цикл
//     mass[i] = mass[i] * 3  //каждую цуфру в массиве умножаем на 3
// }
// console.log(mass) //выводим результат




//1

// let num = 0
// for(let i = 1;i <= 5; i++){ //цикл будет выполняться от 1 до 5
//     num = num + i //прибавляем I на каждой итерации, это является арифметической прогрессией
// }
// console.log(num) //выводим в конс






//2

// let number = 10 //введем число
// if(number %2 == 0){ //проверяем четное или нет
//     console.log('четн') //если данное число делиться на 2 то четное
// }else{ 
//     console.log('нечет')
// }




//4
// let facNum = 1;
// for(let i = 1; i <= 4; i++){ //цикл 
//     facNum = facNum * i //на каждой итерации умножаем на i
// }
// console.log(facNum) //выводим

// let a = 0
// let mass = [1,2,3]
// for(let i = 0; i < mass.length; i++){
//   console.log(mass[i])
//   a  = a + mass[i]
//   //0 = 0 + 1
//   // 1 = 1 + 2
//   //3 = 3 + 3
// }
// a = a / mass.length
// console.log(a)



// let a = 0
// let nums = [3, 6 ,4 ,7 ,8, 1]
// for(let i = 0; i < nums.length; i++){
//     // console.log(nums[i] * 2)
//     a = nums[i] * 2
//     console.log(a)
// }

// console.log(nums)


// let a = 0
// let m = 10
// for(let i = 1; i <= 10; i++){
//    a = a + i **2
// }
// console.log(a)


// let a = 0
// let num1 = 2
// for(let i = 1; i <= 10; i++){
//    a = i * num1
// console.log(`${i} * ${num1} = ${i * num1}`)
// }






// function sum(a, b) { //Объявление функции
//     console.log(a + b)
// }
// sum(3, 5)

// const privet = (name) => { //Стрелочная функция
//     console.log(`Privet ${name}`)
// }
// privet('Shahzoda')




// function reverseString(mass) {
//     let massive = []
//     for(let i = 0; i < mass.length; i++){
//         massive.push(mass[i])
        
//     }
//     massive.reverse()
//     let result = ""
    
//    for(let a = 0; a < massive.length; a++){
    
//     result = result + massive[a] 
//     console.log(result)
//    }
//    return result
// }

// let mass = 'Hello'
// reverseString(mass)








// function sum(a, b){
//     return a + b ** a + b
//     console.log('rhhgh')
// }
// let result = sum(5, 6)
// console.log(result)








// function sum(massive) {
//     let a = 0
//     for(let i = 0; i < massive.length; i++){
//         if(massive[i] % 1 === 0){
//         a = a + massive[i] 
//         }
        
//     } return a
// }
// let massive = [1, 2, 3, 1.12]
// console.log(sum(massive))






// a = 3.3
// if( a < 1){
//     console.log(`${a} меньше 1`)
// } else if( a % 1 === 0){
//     console.log(a)
// }



// let products = [ 'Milk', 'Bread', 'Apples']
// console.log(products.length)
// products[1] = 'Bananas'
// console.log(products)


// let prods = ['Bread']
// let prodsLength = prods.push('Apple', 'Bananas')
// console.log(prodsLength)

// console.log(prods)

// prods.unshift('Milk', 'Coke')
// console.log(prods)


// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr1Arr2 = arr1.concat(arr2)
// console.log(arr1Arr2)

// let arrSplice = [9,3,5,6,3]
// arrSplice.splice(2)
// console.log(arrSplice)


// let arr = [ 'Milk', 'Bread', 'Bananas']
// let arrP = arr.pop()
// console.log(arrP, arr) 

// arrP = arr.shift()
// console.log(arrP, arr)

// let arr3 = [ 'Milk', 'Bread', 'Bananas']
// arr3.splice(1, 1)
// console.log(arr3)


// delete arr3[1]
// console.log(arr3)


// let arr =[ 'Milk', 'Milk', 'Bread', 'Bananas', 'Milk']
// console.log(arr)
// console.log(arr.indexOf('Milk'))
// console.log(arr.lastIndexOf('Milk'))

// let nums = [2,4,5,1,3,  'Milk', 'Milk', 'Bread', 'Bananas', 'Milk']
// nums.sort()
// console.log(nums)

// num = [2,4,5,1,3]
// let b = num.find(e => e === 5)
// console.log(b)


// let arr =[ 'Milk', 'Milk', 'Bread', 'Bananas', 'Milk']
// let f = arr.find(e => e === 'Bread')
// console.log(f)








// let prods = ['Cucumber', 'Orange', 'Pepsi', 'Coke']
// prods.push('Milk', 'Bread', 'Eggs', 'Apples')
// prods[5] = 'Bananas'
// // prods = prods.pop()

// // prods.sort()

// console.log(prods.indexOf('Milk'))
// prods.push('Carrots', 'Lettuce')
// // console.log(prods)

// let prods2 = ['Juice', 'Pop']
// let prodsProds2 = prods.concat(prods2)
// console.log(prodsProds2)
// console.log(prodsProds2.lastIndexOf('Pop'))

