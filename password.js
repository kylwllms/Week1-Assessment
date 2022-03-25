const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question("Hey there, what's your name?", function(answer){
    console.log("Hello," +answer)
})