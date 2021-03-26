// BUSINESS LOGIC
function decision () {
  let total = 0
  for (i = 0; i < arguments.length; i++)
  {
    total += arguments[i];
  }
  if (total < 10) {
    return "Ruby";
  } else if (total >= 10 && total < 20) {
    return "Javascript";
  } else if (total >= 20 && total < 30) {
    return "Swift";
  } else if (total >= 30 && total < 40) {
    return "Java";
  } else if (total >= 40 && total < 50) {
    return "Python";
  } else {
    return "error";
  }
  }

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
    const fieldVal = parseInt($("input:radio[name=fieldRadio]:checked").val());
    const cityVal = parseInt($("input:radio[name=cityRadio]:checked").val());
    const otherVal = parseInt($("input:radio[name=R3]:checked").val());
    
    event.preventDefault();     
    $(".result").text(decision(fieldVal, cityVal, otherVal));
    $(".hidden").show();
  });
});