$("#navDropDownBtn").click(function () {
  $("#navDropDownBtn").toggleClass("fa-bars fa-x");
  $("#menuItems").toggleClass("active");
});

$("#menuItems li").click(function () {
  $("#navDropDownBtn").toggleClass("fa-bars fa-x");
  $("#menuItems").toggleClass("active");
});

function sendContactMessage() {
  const body = `<h2>Name: ${$("#name").val()}</h2><p>Email: ${$(
    "#email"
  ).val()}</p><p>Message: ${$("#message").val()}</p>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nareshbsit53@gmail.com",
    Password: "3713271299B39074CFF83C7BE7370B9C1B32",
    To: "nareshbsit53@gmail.com",
    From: "nareshbsit53@gmail.com",
    Subject: $("#name").val(),
    Body: body,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Successfull",
        text: "Message sent successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong!",
      });
    }
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  });
}

$("#contactForm").on("submit", function (e) {
  e.preventDefault();
  sendContactMessage();
});
