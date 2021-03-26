// BUSINESS LOGIC
function decision (total) {
  if (total < 10) {
    return "Ruby";
  } else if (total >= 10 && total < 20) {
    return "Javascript";
  } else if (total >= 10 && total < 20) {
    return "Swift";
  } else if (total >= 10 && total < 20) {
    return "Java";
  } else if (total >= 10 && total < 20) {
    return "Python";
  } else {
    return "error";
  }
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
    const a = $("input:radio[name=fieldRadio]:checked").val();
    const b = $("input:radio[name=cityRadio]:checked").val();
    const c = $("input:radio[name=cityRadio]:checked").val();

    event.preventDefault();

    let sum = a + b + c;
    
    $(".result").text(decision(sum));
    $(".answer").show();
    
  });
});