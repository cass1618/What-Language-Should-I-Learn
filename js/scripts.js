// BUSINESS LOGIC


// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
    const a = $("input:radio[name=fieldRadio]:checked").val();
    const b = $("input:radio[name=cityRadio]:checked").val();
    console.log("b is "+b)    

    event.preventDefault();

  });
});