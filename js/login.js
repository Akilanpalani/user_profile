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
            Swal.fire({
              title:"Good Luck",
              text:"Successfully Logged In",
              icon:"success"
            }).then(()=>{
              window.location.href = "userProfile.html"
            });
          }
          else{
           Swal.fire({
            title:"Error",
            text:res.tostring(message),
            icon:"error"
           })
          }
        }
        catch(error){
          Swal.fire({
            title:"Login Failed",
            text:"Something Went Wrong",
            icon:"error"
          });
        }
      },
      error: function(jqXHR, textStatus, errorThrown){
        Swal.fire({
          title:"Login failed",
          text:"Something Went Wrong",
          icon:"error"
        })
      }
    });
  });
});

