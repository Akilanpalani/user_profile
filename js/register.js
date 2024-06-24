$(document).ready(function () {
  $('#register-form').submit(function (e) {
    e.preventDefault();
    let formData = $(this).serialize();
    $.ajax({
      url:"php/register.php",
      type: "POST",
      data: formData,
      success: function (response) {
        Swal.fire({
          tilte:"Good Luck",
          text:"Successfull Registered",
          icon:"success"
        }).then(()=>{
          window.location.href= "login.html";
        })
      },
      error: function (jqXHR, textStatus, errorThrown) {
        Swal.fire({
          title:"Opps..",
          text:"Something Went wrong, Please try again",
          icon:"failure"
        }).then(()=>{
          window.location.herf = "register.html";
        })
      }
    })
  })
})