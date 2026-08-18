const Form = document.querySelector("form");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  const Height = parseInt(document.querySelector("#height").value);
  const Weight = parseInt(document.querySelector("#weight").value);
  const Results = document.querySelector("#results");
  const Guide = document.querySelector("#weight-guide");

  if (
    Height === "" ||
    Height < 0 ||
    isNaN(Height) ||
    Weight === "" ||
    Weight < 0 ||
    isNaN(Weight)
  ) {
    Results.innerHTML = `Please give valid values <br>Height - ${Height}, Weight - ${Weight}`;
  } else {
    const Bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);

    Results.innerHTML = `<span>${Bmi}</span>`;
    if (Bmi < 18.6) {
      Guide.insertAdjacentHTML(
        "beforeend",
        `<h2>Body weight is underweight - ${Bmi}</h2>`
      );
    } else if (Bmi >= 18.6 && Bmi <= 24.9) {
      Guide.insertAdjacentHTML(
        "beforeend",
        `<h2>Body weight is normal - ${Bmi}</h2>`
      );
    } else if (Bmi > 24.9) {
      Guide.insertAdjacentHTML(
        "beforeend",
        `<h2>Body weight is overweight - ${Bmi}</h2>`
      );
    }
  }
});