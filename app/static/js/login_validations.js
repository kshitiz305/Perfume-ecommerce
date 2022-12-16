$(document).ready(function() {
    let cartc = 0;
     // Attach a function to trigger when users click on the voting links - either an up vote, or a down vote
     $("").on("click", function(){
         var clicked_obj = $(this);
 
         // Which idea was clicked? Fetch the idea ID
         var idea_id = $(this).attr('id');
         // This is the actual call which sends data to the server. It captures the data we need in order to update the vote count: the ID of the idea which was clicked, and which count to incrememnt.
         $.ajax({
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             success: function(response)
             {
                console.log(response);
                // Update the html rendered to reflect new count
                // Check which count to update
             },
             error: function(error)
             {
                console.log(error);
             }
         });
     });
 });
 
 function validateForm() 
 {
     let x = document.getElementById("password").value;
     if (x.length < 8) 
     {
       alert("Password Must be at least 8 characters");
       return false;
     }
   }
 
 
 function ValidateEmail() 
 {
  var input = document.getElementById("email").value;
  var validRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
   
  if (input.value.match(validRegex)) 
  {
    return true;
  } 
  else 
  {
    alert("Invalid email address!");
    return false;
  }   
}
   
function Validations()
{
  validateForm();
  ValidateEmail();
  window.location.reload();
}