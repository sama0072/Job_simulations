function Calculate() {
    const income = document.getElementById("income");
    const price = document.getElementById("price");
    const years = document.getElementById("years");
    const finalValue = document.getElementById("finalValue");

    const button = document.getElementById("calcButton");

    button.addEventListener("click", function () {
        const incomeInt = parseInt(income.value);
        const priceInt = parseInt(price.value);
        const yearsInt = parseInt(years.value);

        const value = priceInt / yearsInt;
        finalValue.textContent = "Your annual mortgage payment is £" + value;
    });
}
