(function (){
   console.log('IIEFunction - 1')
})();

(function (){
    console.log('IIEFunction - 2')
})();

(function (){
    console.log('IIEFunction - 3')
})();

// How to pass Argus to IIFE - 
(function(name){
    console.log(`${name}`)
})('ABC')