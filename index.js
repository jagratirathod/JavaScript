
var number1 = 34
var number2 = 20
console.log(number1 + number2)

str1 = "hello"
str2 = 'Hii'
console.log(str2)

num = 10
console.log(num)

var marks = {
    ravi: 34,
    subh: 20,
    harry: 10
}
console.log(marks)

var a = true
var b = false
console.log(a, b)

// var und=undefined
var und
console.log(und)

var n = null
console.log(n)

arr = [11, 22, 33, 44, 55]


var a = 40
var b = 20
console.log("addition:", a + b)


var c = b
c += 2
console.log(c)

var c = b
c *= 2
console.log(c)



x = 10
y = 20
console.log(x == y)
console.log(x >= y)
console.log(x <= y)

console.log(true && true)
console.log(false && true)
console.log(true && false)

console.log("india:", true || true)
console.log(false || true)
console.log(true || false)


// functions-----
function avg(a, b) {
    return (a + b) / 2
}

c1 = avg(4, 6)
c2 = avg(8, 4)
console.log(c1, c2)

// age=7
// if(age>18)
// {
//     console.log('you are adult')
// }
// else
// {
//     console.log("you are kid")
// }

// if else ladder

age = 2
if (age > 32) {
    console.log('you are a kid')
}
else if (age > 26) {
    console.log('baccha nai rha')
}
else if (age > 22) {
    console.log('yes bacha nai rahe')
}
else {
    console.log('end of ladder')

}
console.log("hii")

// for loop --
// arr=[1,2,3,4,5,6,7]
// console.log(arr)
// for(i=1;i<arr.length;i++)
// {
//     console.log(arr[i])
// }


// forEach loop ---
// arr=[1,2,3,4,5,6,7]
// arr.forEach(function(element)
// {
//     console.log(element)
// }
// )

// while loop --
// arr=[1,2,3,4,5,6,7]
// let i=0
// while(i<arr.length)
// {
//     console.log(arr[i])
//     i++
// }

// do while loop --
// i=0
// arr=[1,2,3,4,5,6,7]
// do{
//     console.log(arr[i])
//     i++
// }
// while(i<arr.length)


// break --
// arr = [1, 2, 3, 4, 5, 6, 7]
// for (i = 0; i < arr.length; i++) 
// {
//     if (i==2)
//     break
//     console.log(arr[i])

// } 


// continue --
// arr = [1, 2, 3, 4, 5, 6, 7]
// for (i = 0; i < arr.length; i++) 
// {
//     if (i==3)
//     continue
//     console.log(arr[i])

// } 

// pop --
// arr = [1, 2, 3, 4, 5, 6, 7]
// arr.pop()
// console.log(arr)


// arr = [1, 2, 3, 4, 5, 6, 7]
// arr.push("harry")
// console.log(arr)

// arr = [1, 2, 3, 4, 5, 6, 7]
// arr.shift()
// console.log(arr)


// arr = [1, 2, 3, 4, 5, 6, 7]
// arr.unshift("hii")
// console.log(arr) 

// arr = ["hii", "hello", "riya",null,true]
// arr.toString()
// console.log(arr) 


// sort --
// arr=[88,66.75,11,66,77]
// arr.sort()
// console.log(arr) 

// length,index,last index --
// z="harry is a good boy"
// console.log(z.length)
// console.log(z.indexOf("good"))
// console.log(z.lastIndexOf("good"))

// slicing --
// console.log(z.slice(0,3))

// replace --
// d=z.replace("harry","rohan")
// console.log(d)

// date --
mydate=new Date()
console.log(mydate)
// console.log(mydate.getTime())
// console.log(mydate.getFullYear())
// console.log(mydate.getDay())
// console.log(mydate.getMinutes())
// console.log(mydate.getHours()) 

// let elem=document.getElementById('click')
// console.log(elem)

let elem=document.getElementsByClassName('container')
// console.log(elem)
// elem[0].style.background='yellow'
// elem[0].classList.add("bg-primary")
// elem[0].classList.remove("bg-primary")


console.log(elem[0].innerHTML)
console.log(elem[0].innerText)

t=document.getElementsByTagName('div')
console.log(t)

