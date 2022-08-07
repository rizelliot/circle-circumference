const input = document.querySelector('.num-input');
const para = document.querySelector('.result');
let r;


input.addEventListener('change', () => {
    r = input.value;
    let circ = 2 * Math.PI * r; 
    para.textContent = `circumference is ${Math.floor(circ)};`
   })

 


// notes, ignore 

// const zamiast let

// przypisywanie na starcie strony