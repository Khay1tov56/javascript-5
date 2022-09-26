var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input")
var elBtn = elForm.querySelector(".js-button")
var elFizz = document.querySelector(".js-fizz")
var elBuzz = document.querySelector(".js-buzz")
var elFizzBuzz = document.querySelector(".js-fizzbuzz")
var elResalt = document.querySelector(".js-result")
var elNta = document.querySelector(".js-nta")
var result = document.querySelector(".result")

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
        elNta.textContent = fizzbuzz.length;

    } else if (elInputValue % 3 == 0) {
        fizz.push(elInputValue);
        elFizz.textContent = fizz;
        elNta.textContent = fizz.length;
    } else if (elInputValue % 5 == 0) {
        buzz.push(elInputValue);
        elBuzz.textContent = buzz;
        elNta.textContent = buzz.length;
    } else {
        elResult.push(elInputValue);
        elResalt.textContent = elResult;
        elNta.textContent = elResult.length;
    }


    elInput.value = "";
})