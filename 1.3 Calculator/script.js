let result = $("#result");
let resultValue = "0";

function updateResult() {
  result.text(resultValue);
}

$("ul li")
  .not("#del")
  .click(function () {
    let btnValue = $(this).text();
    if (btnValue == "C") {
      result.text("0");
    } else {
      resultValue = result.text() == 0 ? btnValue : result.text() + btnValue;
      updateResult();
    }
    console.log("Working");
  });

$("#del").click(function () {
  resultValue = resultValue.length <= 1 ? "0" : resultValue.slice(0, -1);
  updateResult();
});
