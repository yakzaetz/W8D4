// class Clock {
//     constructor(){
//         this.date = new Date();
//         this.hh = this.date.getHours();
//         this.mm = this.date.getMinutes();
//         this.ss = this.date.getSeconds();
//         // this.hh = 23;
//         // this.mm = 59;
//         // this.ss = 50;
        
//         // printTime()
//         // setTimeout(() => {
//         //     console.log(printTime())
//         // }, 1000);
//     }    

//     printTime() {
//         console.log(`The time is ${this.hh}:${this.mm}:${this.ss}`)
//     }

//     _tick() {  
//         // setInterval(() => {
//         //     debugger
//         //     this.printTime()
//         // }, 1000);
//         let that = this;
//         setInterval(function(){
//             //parseInt
//             if (parseInt(that.ss) < 59) {
//                 that.ss++;
//                 that.ss = that.ss < 10 ? "0" + that.ss : that.ss
//             } else {
//                 that.ss = '00';
//                 that.mm++;
//                 that.mm = that.mm < 10 ? "0" + that.mm : that.mm
//                 if (parseInt(that.mm) >= 59) {
//                     that.mm = '00'
//                     that.hh++;
//                     that.hh = that.hh < 10 ? "0" + that.hh : that.hh
//                     if (parseInt(that.hh) >= 23) {
//                         that.hh = '00'
//                     }   
//                 }
//             }
//             // if (parseInt(that.mm) < 59){
//             //     that.mm++;
//             // } else {
//             //     that.mm = '00';
//             //     that.hh++;
//             // }
//             that.printTime();
//         }, 1000)
//     }

//     // _methodName indicates it a private method
// }
// const clock = new Clock();
// clock._tick();

// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback){
//     if (numsLeft === 0) {
//         console.log("hello")
//         completionCallback(sum);
//         return
//     }
//     if (numsLeft > 0){
//         console.log("hi")
//         reader.question("Enter a number", function(input){
//             sum += (parseInt(input))
//             // console.log(sum += parseInt(input))
//             addNumbers(sum, (numsLeft - 1), completionCallback)
//         })
//     }
//     // numsLeft -= 1
//      // 3 => numsleft = numsleft - 1
// }

// addNumbers(0, 3, sum => {
//     console.log(`Total Sum: ${sum}`)
//     reader.close()
// });



