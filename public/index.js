let balance = 1000;
const history = [];

import { time } from "./functions.js";

const addBtn = document.getElementById("add");
const domBalance = document.getElementById("balance");
const withdrawBtn = document.getElementById("withdraw");
const historyBtn = document.getElementById("history");

domBalance.innerText = balance;


function add(){

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

        if(!isNaN(amount) && amount > 0){
            balance += amount;

            const date = time();

            history.push({date: date, amount: amount, balance: balance, action: "add", balance: balance});
            domBalance.innerText = balance +'$';
            modal.remove();

            console.log(history);
        } else {
            alert("Please enter a valid number");
        }
    });

}

function withdraw(){
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

        
        if(!isNaN(amount) && amount < balance){
            balance -= amount;

            const date = time();

            history.push({date: date, amount: amount, balance: balance, action: "withdraw", balance: balance});
            domBalance.innerText = balance +'$';
            modal.remove();

            console.log(history);
        } else {
            alert("Please enter a valid number");
        }
    });

}

function showHistory(){
    const modal = document.createElement('div');
    modal.classList.add("history-modal");

    let html = "<ul>";

    for(let i=0; i < history.length; i++){
        html += `<li>Date: ${history[i].date}</li>
                <li>Action: ${history[i].action}</li>
                <li>Amount: ${history[i].amount}</li>
                <li>Balance: ${history[i].balance}</li>
                <hr/>`;
    }

    html += "</ul>";

    modal.innerHTML = html;

      // Įdedame modalą į DOM (prie body pabaigos)
  document.body.appendChild(modal);

    // uzdarymo mygtukas

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    modal.appendChild(closeBtn);

    closeBtn.addEventListener('click', function(){
        modal.remove();
    });

}


addBtn.addEventListener('click', add);
withdrawBtn.addEventListener('click', withdraw);
historyBtn.addEventListener('click', showHistory);