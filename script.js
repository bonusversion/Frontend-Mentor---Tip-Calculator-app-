'use strict';

// Element

const inputBill = document.querySelector(".bill-input");
const tipValue = document.querySelector(".tip-amount-value");
const totalValue = document.querySelector(".total-value");
const peopleNum = document.querySelector(".people-input");
const customTip = document.querySelector("#custom-tip");
const resetBt = document.querySelector('.reset');


const calcTips = function(tipRatio) {
    let currentTipRatio = parseInt(tipRatio) / 100;
    if (!inputBill.value !== true && !peopleNum !== true) {
        const tip = inputBill.value * currentTipRatio / Number(peopleNum.value)
        const total = tip + inputBill.value / Number(peopleNum.value);
        tipValue.textContent = tip.toFixed(2);
        totalValue.textContent = total.toFixed(2);
    }
}

document.querySelectorAll('.tip-box').forEach((tipBox => tipBox.addEventListener('click', function(event) {
    resetBt.classList.add('reset-active')
    document.querySelectorAll('.tip-box').forEach(tipBox => tipBox.classList.remove('tip-box-click'));
    customTip.classList.remove('custom-tip-active');
    customTip.placeholder = 'Custom';
    customTip.value = '';
    event.target.classList.add('tip-box-click');
    if (!Number(peopleNum.value)) {
        document.querySelector('.alert').classList.remove('hidden');
    } else {
        document.querySelector('.alert').classList.add('hidden');
        calcTips(event.target.value);
    }
})));


customTip.addEventListener('click', function(event) {
    resetBt.classList.add('reset-active')
    document.querySelectorAll('.tip-box').forEach(tipBox => tipBox.classList.remove('tip-box-click'));
    customTip.classList.add('custom-tip-active');
    customTip.placeholder = '';
    if (!Number(peopleNum.value)) {
        document.querySelector('.alert').classList.remove('hidden');
    } else {
        document.querySelector('.alert').classList.add('hidden');
        calcTips(event.target.value);
    }
});


peopleNum.addEventListener('input', function() {
    resetBt.classList.add('reset-active');
})

inputBill.addEventListener('input', function() {
    resetBt.classList.add('reset-active');
})

resetBt.addEventListener('click', function() {
    document.querySelectorAll('.tip-box').forEach(tipBox => tipBox.classList.remove('tip-box-click'));
    customTip.placeholder = 'Custom';
    customTip.value = '';
    inputBill.value = '';
    peopleNum.value = '';
    tipValue.textContent = 0;
    totalValue.textContent = 0;
    resetBt.classList.remove('reset-active');
})