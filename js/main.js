var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elBtn = elForm.querySelector(".js-button");
var elFizz = document.querySelector(".js-fizz");
var elBuzz = document.querySelector(".js-buzz");
var elFizzBuzz = document.querySelector(".js-fizzbuzz");
var elResalt = document.querySelector(".js-result");
var elNta1 = document.querySelector(".js-nta1");
var elNta2 = document.querySelector(".js-nta2");
var elNta3 = document.querySelector(".js-nta3");
var elNta4 = document.querySelector(".js-nta4");
var result = document.querySelector(".result");

var fizzbuzz = [];
var fizz = [];
var buzz = [];
var elResult = [];

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var elInputValue = Number(elInput.value);

    if (isNaN(elInputValue) || elInputValue === 0) {
        result.textContent = "Son kiriting"
    } else if (elInputValue % 3 == 0 && elInputValue % 5 == 0) {
        fizzbuzz.push(elInputValue);
        elFizzBuzz.textContent = fizzbuzz;
        elNta3.textContent = fizzbuzz.length;

    } else if (elInputValue % 3 == 0) {
        fizz.push(elInputValue);
        elFizz.textContent = fizz;
        elNta1.textContent = fizz.length;

    } else if (elInputValue % 5 == 0) {
        buzz.push(elInputValue);
        elBuzz.textContent = buzz;
        elNta2.textContent = buzz.length;

    } else {
        elResult.push(elInputValue);
        elResalt.textContent = elResult;
        elNta4.textContent = elResult.length;
    }


    elInput.value = "";
})