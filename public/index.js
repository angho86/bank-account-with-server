let balance = 0;
const history = [];

import { time } from "./functions.js";

const addBtn = document.getElementById("add");

function add(){
    const domBalance = document.getElementById("balance");

    domBalance.innerText = balance;

    const modal = document.createElement('div');
    modal.classList.add("add-modal");


    // ivesties laukas
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Amount";
    input.id = "input-amount";
    modal.appendChild(input);

    // mygtukas patvirtinimui

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.disabled = false;
    modal.appendChild(submitBtn);

      // Įdedame modalą į DOM (prie body pabaigos)
  document.body.appendChild(modal);

    // uzdarymo mygtukas

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    modal.appendChild(closeBtn);

    closeBtn.addEventListener('click', function(){
        modal.remove();
    });



    // patvirtinimo mygtuko funkcionalumas

    submitBtn.addEventListener('click', function(){
        const amount = parseFloat(input.value); // paimama ivesta reiksme

        
        if(!isNaN(amount)){
            balance += amount;

            const date = time();

            history.push({date: date, amount: amount, balance: balance});
            domBalance.innerText = balance +'$';
            modal.remove();

            console.log(history);
        } else {
            alert("Please enter a valid number");
        }
    });

}

addBtn.addEventListener('click', add);