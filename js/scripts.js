// BUSINESS LOGIC
function decision (fieldVal, cityVal, otherVal, companyValSum) {
  
  let total = 0
  total += fieldVal;
  total += cityVal;
  total += otherVal;
  total += companyValSum;

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

  function calculateCheckboxVal(checboxArray) {
    const arrayLength = checboxArray.length;
    let arraySum = 0;

    for (i = 0; i < arrayLength; i++)
    {
      arraySum += checboxArray[i];
    }
    return arraySum;
  }

  
// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
    event.preventDefault(); 

    let companyVal = [];
    $(":checkbox:checked").each(function(i) {
      companyVal[i] = parseInt($(this).val());
      return companyVal;
    });
  

    let favoriteColor = 1;
 
    favoriteColor = (($("input:radio[name=colorRadio]:checked").val()));
    console.log("favoriteColor "+favoriteColor);
    

    
    const fieldVal = parseInt($("input:radio[name=fieldRadio]:checked").val());
    const cityVal = parseInt($("input:radio[name=cityRadio]:checked").val());
    const otherVal = parseInt($("input:radio[name=appRadio]:checked").val());
    const companyValSum = calculateCheckboxVal(companyVal);
    

    const beverage = $("#beverage").val(); 

    console.count(beverage);
    
    
    $(".result").text(decision(fieldVal, cityVal, otherVal, companyValSum));
    $(".hidden").show();
  
});
});

