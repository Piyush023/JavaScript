const date = new Date()
console.log(date.toLocaleDateString())

const d = new Date(2023, 0, 10, 5, 5, 30);

console.log(d.toLocaleDateString())
console.log(d.toLocaleString('default', { day: '2-digit' })) // We can pass any no of arguments to format the date acc to the Ou needs.
console.log(d.toLocaleTimeString())
console.log(d.getTime())
console.log(d.getFullYear())
console.log(d.getMonth() + 1) // In this Date Format the Month starts from 00 and not from 01
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())