let result = $("#result");
let currentValue = "0";

function updateResult() {
  result.text(currentValue);
}

$("ul li")
  .not("#del")
  .click(function () {
    let btnValue = $(this).text();
    if (btnValue == "C") {
      currentValue = "0";
      updateResult();
    } else if (btnValue == "=") {
      let solution = eval(currentValue);
      if (solution.toString().includes(".")) {
        solution = solution.toFixed(3);
        currentValue = solution.toString();
      } else {
        currentValue = solution.toString();
      }
      updateResult();
    } else if (btnValue == ".") {
      let example = currentValue.split("+");

      if (!example[example.length - 1].includes(".")) {
        currentValue = currentValue + btnValue;
        updateResult();
      }
    } else {
      if (
        btnValue == "%" ||
        btnValue == "/" ||
        btnValue == "*" ||
        btnValue == "-" ||
        btnValue == "+"
      ) {
        let lastValue = currentValue.slice(currentValue.length - 1);

        if (
          lastValue == "%" ||
          lastValue == "/" ||
          lastValue == "*" ||
          lastValue == "-" ||
          lastValue == "+"
        ) {
          currentValue = currentValue.slice(0, -1);

          currentValue += btnValue;
          updateResult();
        } else {
          currentValue = currentValue == "0" ? "0" : currentValue + btnValue;
          updateResult();
        }
      } else {
        currentValue = currentValue == "0" ? btnValue : currentValue + btnValue;
      }
      updateResult();
    }
  });

$("#del").click(function () {
  currentValue = currentValue.length <= 1 ? "0" : currentValue.slice(0, -1);
  updateResult();
});

$(".copyright").click(function () {
  result.text("THANK YOU 🤝");
});
