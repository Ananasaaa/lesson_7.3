
function getNum() {

  let num;
    
    for(let i = 0; i < 10; i++){

        num = prompt('input int...');
    
        if (num < 100) {
            continue;
        }
        else if (typeof num === 'string') {
            return console.log(num);
        } 
        else if (num >= 100) {
            return console.log(num);
        }
  
    }
    
    return console.log(num);
    
};
    
    getNum();
