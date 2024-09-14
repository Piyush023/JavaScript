// const s = 'A man, a !plan,: panama122'
const s = 'tot!2121'

let tempS
tempS = s.toLocaleLowerCase().split('').filter(char => /[a-zA-Z]/.test(char)).join('')

function checkPalindrome (s){
    return s === s.split('').reverse().join('')
}

console.log(checkPalindrome(tempS))