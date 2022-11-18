// class Worker{
//     name = '';
//     surname = '';
//     rate;
//     days = 0;

//     constructor(name,surname,days, rate ) {
//         this.name = name;
//         this.surname = surname;
//         this.days = days;
//         this.rate = rate;
//     }

//     getFullname() {
//         return this.name + ' '+ this.surname
//     }
//     getSalary() {
//         return this.days * this.rate
//     }
// }

// const worker = new Worker('Liza', 'Cherevko',15, 20);
// console.log(worker.name)
// console.log(worker.getFullname())
// console.log(worker.getSalary())


// class Worker {
//     #name = '';
//     #surname = '';
//     #rate;
//     #days = 0;
//         constructor(name,surname, rate, days) {
//         this.#name = name;
//         this.#surname = surname;
//         this.#rate = rate;
//         this.#days = days;
//     }
//     get name() { return this.#name }
//     get name() { return this.#name }
//     get days() { return this.#days }
//     get rate() { return this.#rate}

//     get fullName() {
//         return `${this.#name }  ${this.#surname}`
//     }
//     set fullName(value) {
//         if (value.length < 4) {
//             alert('Введите значение содержащее больше 4 символов')
//         }
//         const newName = value.split(' ')
//        return  this.#name = newName[0],
//                this.#surname = newName[1];
      
//     }

//    get getSalary() {
//    return this.#rate * this.#days
//     }
// }

// const user = new Worker('Liza', 'Cherevko',20,15)
// console.log(user.fullName)


// class String {
//     #str = '';
    
//     constructor(val,) {
//         this.#str = val;
//     }

//     get getReverse() {
//         return [...this.#str].reverse().join('')
//     }

//     get ucFirst() {
//         let str = this.getReverse;
//         let splitStr = str.split('');
//         let first = splitStr[0].toUpperCase();
//         const res = [...splitStr];
//         res.splice(0, 1)
//        const result = [first, ...res].join('')
//        return result
//     }

//     get ucWords() {
//         const newStr = this.#str.split('')
//         const first = newStr[0].toUpperCase()
//         const newArr = [...newStr]
//         newArr.splice(0, 1)
//         const  newResStr = [first, ...newArr].join('')
//        return newResStr
//     }

// }

// const newStr = new String('tpircsavaj')
// console.log(newStr.getReverse)
// console.log(newStr.ucFirst)
// console.log(newStr.ucWords)

// Преобразование массива в строку

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
// //  return [...arr]
//     return arr.slice()
// }
// let newVegatables = arrayClone(vegetables);

// function str(arr) {
//     return arr.join(' ')
// }
// let newStr = str(vegetables)

// console.log(newStr)


// Двоеточие между нечётными числами
// const num = prompt('Введите число', 55639217)

// function colonOdd(num) {
//     let str = num.toString();
//     let result = [str[0]]
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i - 1] % 2 !== 0) && (str[i] % 2 !== 0)) {
//             result.push(':', str[i])
//         } else {
//             result.push(str[i])
//         }

//     }
//     return result.join('')
// }

// document.writeln(colonOdd(num))

// Удалить лишний элемент из массива

// let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];

// function removeDuplicates(array) {
//     return array.filter((el, id)=> arr.indexOf(el)===id)
// }
// let newArr = removeDuplicates(arr)
// console.log(newArr)


//  Найдите високосные годы

// function chooseYears(start, end) {

//     let newAr = [];
//     for (let i = start; i <= end; i++) {
//         newAr.push(i)
//     }
//     let resultArr = [];
//     newAr.forEach((year) => getLeapYear(year) ? resultArr.push(year) : null)
//     console.log(resultArr)
//     return resultArr
// }
    
// function getLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//         return year;
//      } else {
//         return false;
//        }
//   }

// const newYear = chooseYears(2000, 2022)
// console.log(newYear)


// let arr = newArr()

// function newArr() {
//     let num = [];
//     for (let i = 0; i <= 10; i++) {
//       num.push('x')
//     }
//     return num
// }
// console.log(arr)

let hibtn = document.querySelector('#btn')

// hibtn.addEventListener('click', (e) => {
//     inp = document.querySelector('#input');
//     inp.value = '!!!'
// })

// hibtn.addEventListener('click', (e) => {
//     inp = document.querySelector('#input');
//     alert(inp.value = '!!!')
// })

// hibtn.addEventListener('click', (e) => {
//    let inp = document.querySelector('#input');
//     let num = +inp.value
//     let res = num * num
//     alert(res)
// })

const applicantForm = document.querySelector('#form');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const submitEl = document.querySelector('#submit');
const textFormEl = document.querySelector('#textForm');
const submitBtn = document.querySelector('#btn');

applicantForm.addEventListener('submit', handleFormSubmit);
submitBtn.addEventListener('click', onAbtnSubmit)

function handleFormSubmit(e) { 
    e.preventDefault()
 
}

function onAbtnSubmit() { 
    const newForm = getFormValue()
    resetForm()
    console.log(newForm)
}

function getFormValue() { 
    return {
        name: nameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        submit: submitEl.value,
        textForm: textFormEl.value,
    }
}

function resetForm() { 
    nameEl.value = '';
    emailEl.value = '';
    passwordEl.value = '';
    submitEl.value = '';
    textFormEl.value = '';
    
}