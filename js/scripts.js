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

function add (...nums) {
  let sum = nums.reduce((num1, num2) => num1 + num2);
  return sum;
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
    const a = parseInt($("input:radio[name=fieldRadio]:checked").val());
    const b = parseInt($("input:radio[name=cityRadio]:checked").val());
    const c = parseInt($("input:radio[name=cityRadio]:checked").val());
    event.preventDefault();
    
    
    let sum = a + b + c;
    console.log(sum);
    
    $(".result").text(decision(sum));
    $(".hidden").show();
    
  });
});