// const decrementButton = document.querySelector('button[data-action="decrement"]');


// const incrementButton = document.querySelector('button[data-action="increment"]');

// const counterValue = document.querySelector('span');


// const counter = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     }
// }

// decrementButton.addEventListener('click', function () { 
//     counter.decrement();

//     counterValue.textContent = counter.value;
// });

// incrementButton.addEventListener('click', function () { 
//     counter.increment();
//     counterValue.textContent = counter.value;
// });


const decrementButton = document.querySelector('button[data-action="decrement"]');


const incrementButton = document.querySelector('button[data-action="increment"]');

const counterDisplayElem = document.querySelector('#value');

let counterValue = 0;

updateDisplay();

 decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateDisplay();
});

 incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateDisplay();
})



function updateDisplay() {
    counterDisplayElem.innerHTML = counterValue;
};


