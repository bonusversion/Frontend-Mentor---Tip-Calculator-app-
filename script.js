"use strict";

// Element
const inputBill = document.querySelector(".bill-input");
const inputPeople = document.querySelector(".people-input");
const customTip = document.getElementById("custom-tip");
const tipValue = document.querySelector(".tip-amount-value");
const totalValue = document.querySelector(".total-value");
const resetBt = document.querySelector(".reset");
const alert = document.querySelector(".alert");

let tipRatio = 0;
let peopleNum = 0;
let billValue = 0;

const resetResult = function () {
  tipValue.textContent = 0;
  totalValue.textContent = 0;
};

const resetCustomTip = function () {
  customTip.classList.remove("custom-tip-active");
  customTip.placeholder = "Custom";
  customTip.value = "";
};

const calcResult = function (bill, people) {
  if (!bill) {
    resetResult();
    return;
  }
  if (!(people % 1 === 0) || people === 0) {
    alert.classList.remove("hidden");
    resetResult();
    console.log(tipValue.value);
  } else {
    alert.classList.add("hidden");
    let currentTipRatio = parseInt(tipRatio) / 100;
    if (bill && people) {
      const avgCost = bill / people;
      const tip = avgCost * currentTipRatio;
      const total = avgCost + tip;

      tipValue.textContent = tip.toFixed(2);
      totalValue.textContent = total.toFixed(2);
    }
  }
};

document.querySelectorAll(".tip-box").forEach((tipBox) =>
  tipBox.addEventListener("click", function (event) {
    resetBt.classList.add("reset-active");
    document
      .querySelectorAll(".tip-box")
      .forEach((tipBox) => tipBox.classList.remove("tip-box-click"));
    resetCustomTip();
    event.target.classList.add("tip-box-click");
    tipRatio = event.target.textContent;
    calcResult(billValue, peopleNum);
  })
);

customTip.addEventListener("input", function (event) {
  resetBt.classList.add("reset-active");
  document
    .querySelectorAll(".tip-box")
    .forEach((tipBox) => tipBox.classList.remove("tip-box-click"));
  customTip.classList.add("custom-tip-active");
  customTip.placeholder = "";
  tipRatio = event.target.value;
  calcResult(billValue, peopleNum);
});

inputPeople.addEventListener("input", function (event) {
  resetBt.classList.add("reset-active");
  peopleNum = Number(event.target.value);
  calcResult(billValue, peopleNum);
});

inputBill.addEventListener("input", function (event) {
  resetBt.classList.add("reset-active");
  billValue = Number(event.target.value);
  console.log(billValue);
  calcResult(billValue, peopleNum);
});

resetBt.addEventListener("click", function () {
  document
    .querySelectorAll(".tip-box")
    .forEach((tipBox) => tipBox.classList.remove("tip-box-click"));
  resetCustomTip();
  inputBill.value = "";
  inputPeople.value = "";
  resetResult();
  resetBt.classList.remove("reset-active");
  alert.classList.add("hidden");
});
