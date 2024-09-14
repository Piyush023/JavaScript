// SetTimeOut and SetInterval

// SetTimeOut - 
const timeOut = setTimeout(() => {
    console.log('TimeOut After 2 sec.') // This will be printed after a delay of 2sec.
}, 2000)

clearTimeout(timeOut) // This will immediately clear the Timeout and the output will never be printed.

// SetInterval - 
const interval = setInterval(() => {
    console.log('This is output after every 1 sec until it is stopped.') // This will be printed every 1 sec until it is stopped.
}, 1000);

clearInterval(interval) // This will immediately clear the interval for the setInterval.

// TODO - Implement these 2 - 
// Usage of these 2 functions - 
// 1. Debouncing 
// 2. Throttling