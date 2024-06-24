$(document).ready(function () {
  let token = localStorage.getItem("sessionToken");

  if (!token) {
    window.location.href = "login.html"
    return;
  }

  // Token validation
  $.ajax({
    url: "php/userProfile.php",
    type: "POST",
    data: { token: token, action: "validate" },
    success: function (response) {
      let res = JSON.parse(response)
      if (res.success) {
        // Hide loading message and show profile form
        $("#loadingMessage").hide();
        $("#userpProfileForm").show();
      }
      else {
        // Redirect to login page if token is invalid
        Swal.fire({
          title:"Oops..",
          text:"Something went wrong",
          icon:"error"
        }).then(()=>{
          window.location.href = "login.html"
        })
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      Swal.fire({
        title:"Oops..",
        text:textStatus + "" + errorThrown,
        icon:"error"
      }).then(()=>{
        window.location.herf = "login.html"
      })
    }
  });

  // Profile update
  $("#userprofile-form").submit(function (e) {
    e.preventDefault();
    let formData = $(this).serialize();
    let token = localStorage.getItem("sessionToken");

    $.ajax({
      url: "php/userProfile.php",
      type: "POST",
      data: `${formData}&action=update&token=${token}`,

      success: function (response) {
        let res = JSON.parse(response)
        if (res.success) {
          Swal.fire({
            title:"Great!",
            text:"User Profile Updated",
            icon:"success"
          })
        }
        else {
          Swal.fire({
            title:"Oops...",
            text:"Something went wrong",
            icon:"error"
          })
        }
      },

      error: function (jqXHR, textStatus, errorThrown) {
        Swal.fire({
          title:"Oops...",
          text:textStatus + "" + errorThrown,
          icon:"error"
        })
      }
    });
  });

  // Profile logout
  $("#logoutbtn").click(function () {
    $.ajax({
      url: "php/userProfile.php",
      type: "POST",
      data: { token, action: 'logout' },

      success: function (response) {
        let res = JSON.parse(response)
        if (res.success) {
          localStorage.removeItem("sessionToken")
          Swal.fire({
            title:"Logout Success",
            text:"Successfully logged out",
            icon:"success"
          }).then(()=>{
            window.location.href = "login.html"
          })
        }
        else {
          Swal.fire({
            title:"Oops",
            text:res.error,
            icon:'error'
          })
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        Swal.fire({
          title:"Logout Failed",
          icon:"error",
          text:textStatus + "" + errorThrown
        })
      }
    });
  });
});