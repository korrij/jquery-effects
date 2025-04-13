$(document).ready(function () {
    // 1. Toggle the signup form
    $('#signuplink').click(function (e) {
      e.preventDefault();
      $('#newsSignup').slideToggle();
      let current = $('#openclose').text();
      $('#openclose').text(current === '+' ? '-' : '+');
    });
  
    // 2. Hover animation for the slogan
    $('#slogan').hover(
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
  
    // 3. Animate the rose on page load
    $('#rose').animate({ right: '100px', opacity: 1 }, 1500, "swing");
  
    // 4. Form submission event
    $('#newsSignup').submit(function (e) {
      e.preventDefault();
      alert("Thank you for registering!");
      $(this).hide();
      $('#signuplink').fadeTo("slow", 0.3);
    });
  });