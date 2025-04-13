$(document).ready(function () {
    // Hide the newsletter form initially
    $("#newsSignup").hide();
  
    // Signup link click event
    $("#signuplink").click(function (event) {
      event.preventDefault();
  
      // Toggle form visibility with slide effect
      $("#newsSignup").slideToggle();
  
      // Change + to - and vice versa
      let sign = $("#openclose").text();
      $("#openclose").text(sign === "+" ? "-" : "+");
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
    $("#rose").animate({ right: "100px", opacity: 1 }, 1500, "swing");
  
    // Form submission event
    $("#newsSignup").submit(function (event) {
      alert("Thank you for registering");
      $(this).hide();
      $("#signuplink").fadeTo("slow", 0.3);
      event.preventDefault();
    });
  });