$(document).ready(function(){
  $("#login-form").submit(function(e){
    e.preventDefault();
    let formData = $(this).serialize();

    $.ajax({
      url:"php/login.php",
      type: "POST",
      data: formData,
      success: function(response){
        try{
          let res = JSON.parse(response)
          if(res.success){
            localStorage.setItem("sessionToken",res.token);
            window.location.href = "userProfile.html"
          }
          else{
            alert(res.message, "error")
          }
        }
        catch(error){
          alert("Login failed: " + error)
        }
      },
      error: function(jqXHR, textStatus, errorThrown){
        alert("Login failed: " + textStatus + " " + errorThrown)
      }
    });
  });
});

