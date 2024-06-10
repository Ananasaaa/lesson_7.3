
function cycleFunc() {

    let num;
    
    for(let i = 0; i < 10; i++){

        num = prompt('input int...');
    
        if(num < 100) {
            continue;
        } else {
            console.log(num);
            break;
        }
    }
    }
    
    cycleFunc();




























// function loop() {

//     let n;

//     for (let i = 0; i < 10; i++) {

//         n = prompt('input integer more than hun...');

//         if(n < 100){
//             continue;
//         }else{
//             return console.log(n);
//         };
//     }
    

// }

// loop();