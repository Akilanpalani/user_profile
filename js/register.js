$(document).ready(function () {
  $('#register-form').submit(function (e) {
    e.preventDefault();
    let formData = $(this).serialize();
    $.ajax({
      url:"php/register.php",
      type: "POST",
      data: formData,
      success: function (response) {
        alert(response);
        window.location.href= "login.html";
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("Registration failed: " + textStatus + " " + errorThrown);
        window.location.herf = "register.html";
      }
    })
  })
})