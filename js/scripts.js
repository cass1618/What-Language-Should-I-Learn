// BUSINESS LOGIC


// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
    const a = $("input:radio[name=fieldRadio]:checked").val();
    console.log("a is "+a)    

    event.preventDefault();

  });
});