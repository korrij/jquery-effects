$(document).ready(function(){
    $('#signuplink').click(function(e){
      e.preventDefault();
      $('#newsSignup').slideToggle();
      var sign = $('#openclose').text() === '+' ? '-' : '+';
      $('#openclose').text(sign);
    });
  });
  
    // Slogan hover effect
    $("#slogan").hover(
      function () {
        $(this).fadeOut("normal", "linear", function () {
          $(this).text("Hand Picked Just for You").fadeIn("slow", "swing");
        });
      },
      function () {
        $(this).fadeOut("fast", "swing", function () {
          $(this).text("The Power of Flowers").fadeIn("slow", "linear");
        });
      }
    );
  
    // Animate the rose image on page load
    $('#rose').animate({right: '20px', opacity: 1}, 2000);
  
    // Form submission event
    $(document).ready(function(){
        $('#newsSignup').submit(function(e){
          e.preventDefault();
          // Display thank-you message
          $(this).replaceWith('<p>Thank you for signing up!</p>');
        });
      });