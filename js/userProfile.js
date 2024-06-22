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
        window.location.href = "login.html"
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Token validation failed: " + textStatus)
      window.location.herf = "login.html"
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
          alert(res.message)
        }
        else {
          alert(res.message)
        }
      },

      error: function (jqXHR, textStatus, errorThrown) {
        alert("Profile update failed: " + textStatus + " " + errorThrown)
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
          window.location.href = "login.html"
        }
        else {
          alert(res.message)
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("Logout failed: " + textStatus + " " + errorThrown)
      }
    });
  });
});