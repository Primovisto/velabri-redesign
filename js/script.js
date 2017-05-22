/*-------------------------
    fixed top Header Menu
 -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 70) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });


    

    $(document).ready(function(){
    $('.platform-images').mouseenter(function(){
        $(".platform-images").css("color", "#32c4e9");

    });

    $('.platform-images').mouseleave(function(){
        $(".platform-images").css("color", "#000");

    });



 });


$(function() {
  
  // contact form animations
  $('#dashboard-item').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});

function sendEmail()
{
     $.ajax({
           url: "mail.php",
           type: "POST",
           success: function(response) {
               if (!response) {
                    alert("Something went wrong. Please try again");
                    return;
               }

               var parsedJSON = eval('('+response+')');

               // If there's an error, display it.
               if(parsedJSON.Error) {
                  // Handle session timeout.
                  if (parsedJSON.Error == "Timeout") {
                       alert("Session timed out. Please login again.");
                       window.location.reload();
                   }
                }
               document.getElementById('mailStatus').innerHTML = "Email Sent successfully";  
            }
     });
}

