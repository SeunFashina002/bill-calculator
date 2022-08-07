//🌟 APP: Tip Calculator

let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let perPersonTotal = document.getElementById("perPersonTotal");
let numberOfPeople = document.getElementById("numberOfPeople");
let totalTip;
const calculateBill = () => {
  let billValue = Number(billTotalInput.value);
  let tipValue = Number(tipInput.value);

  let getTip;

  if (billValue != "" && tipValue == "") {
    totalTip = billValue;
  } else {
    getTip = billValue * (tipValue / 100);
    totalTip = billValue + getTip;
  }
  perPersonTotal.innerText = `$${totalTip}`;
};

const increasePeople = () => {
  let newPerPersonTotal;
  let getPeople = Number(numberOfPeople.innerText);
  if (getPeople) {
    getPeople += 1;

    newPerPersonTotal = Math.ceil(totalTip / getPeople).toFixed(2);
  }
  numberOfPeople.innerText = getPeople;
  perPersonTotal.innerText = "$" + newPerPersonTotal;
};

const decreasePeople = () => {
  let newPerPersonTotal;
  let getPeople = Number(numberOfPeople.innerText);
  if (getPeople) {
    getPeople -= 1;
    newPerPersonTotal = Math.ceil(totalTip / getPeople).toFixed(2);
    if (getPeople < 1) {
      return;
    }
  }
  numberOfPeople.innerText = getPeople;
  perPersonTotal.innerText = "$" + newPerPersonTotal;
};
