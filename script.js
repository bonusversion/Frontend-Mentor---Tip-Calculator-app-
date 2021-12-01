"use strict";

// Element

const inputBill = document.querySelector(".bill-input");
const tipValue = document.querySelector(".tip-amount-value");
const totalValue = document.querySelector(".total-value");
const peopleNum = document.querySelector(".people-input");
const customTip = document.querySelector("#custom-tip");
const resetBt = document.querySelector(".reset");
let tipRatio = 0;

const calcTips = function () {
  if (!inputBill.value || !peopleNum.value) {
    return;
  }

  const average = Number(inputBill.value) / Number(peopleNum.value);
  const tip = average * tipRatio;
  const total = average + tip;

  tipValue.textContent = tip.toFixed(2);
  totalValue.textContent = total.toFixed(2);
};

document.querySelectorAll(".tip-box").forEach((tipBox) =>
  tipBox.addEventListener("click", function (event) {
    resetBt.classList.add("reset-active");
    document
      .querySelectorAll(".tip-box")
      .forEach((tipBox) => tipBox.classList.remove("tip-box-click"));
    customTip.classList.remove("custom-tip-active");
    customTip.placeholder = "Custom";
    customTip.value = "";
    event.target.classList.add("tip-box-click");
    tipRatio = parseInt(event.target.textContent) / 100;
    calcTips();
  })
);

customTip.addEventListener("click", function (event) {
  resetBt.classList.add("reset-active");
  document
    .querySelectorAll(".tip-box")
    .forEach((tipBox) => tipBox.classList.remove("tip-box-click"));
  customTip.classList.add("custom-tip-active");
  customTip.placeholder = "";
  tipRatio = Number(event.target.value) / 100;
  calcTips();
});

function isInputInt(text) {
  const number = Number(text);
  if (number.toString().length !== text.length) {
    alert("please input int number");
    return false;
  }

  return true;
}

peopleNum.addEventListener("input", function () {
  if (!isInputInt(peopleNum.value)) {
    peopleNum.value = "";
    return;
  }

  resetBt.classList.add("reset-active");
  calcTips();
});

inputBill.addEventListener("input", function () {
  if (!isInputInt(inputBill.value)) {
    inputBill.value = "";
    return;
  }

  resetBt.classList.add("reset-active");
  calcTips();
});

resetBt.addEventListener("click", function () {
  document
    .querySelectorAll(".tip-box")
    .forEach((tipBox) => tipBox.classList.remove("tip-box-click"));
  customTip.placeholder = "Custom";
  customTip.value = "";
  inputBill.value = "";
  peopleNum.value = "";
  tipValue.textContent = 0;
  totalValue.textContent = 0;
  resetBt.classList.remove("reset-active");
});
