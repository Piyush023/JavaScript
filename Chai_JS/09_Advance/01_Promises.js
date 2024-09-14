// Promises - 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is a Promise Doing some Async Task')
        resolve()
    }, 2000)
})

p1.then(() => {
    console.log("This is the Then of the Promise P1")
})


// Promises - 
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (error) {
            reject({ message: 'Error in this Call' })
        }
        console.log('This is a Promise Doing some Async Task and passing value to the .then')
        resolve({ message: 'Hello World' })
    }, 2000)
})

p2.then((data) => {
    console.log(`This is the Then of the Promise P2 and the message: ${data.message}`)
}).catch((err) => { console.log(`This is the Catch of the Promise P2 and the message: ${err.message}`) })


const getGitStats = fetch('https://api.github.com/users/Piyush023')
    .then((res) => { return res.json() }).then((data)=>{
        console.log(data)
    })
    .catch((e) => { console.log('e', e) })

getGitStats