//FUNCTION TO COPY TITLE
var number;
var numberOut;
var input;
var tooltip;

//FUNCTION TO COPY SHORTCUT
function myFunction(number) {
  switch(number) {
    case 1:
      input = "scenario";
      tooltip = "mytooltip_Scenario";
      myFunctionNumb(input, tooltip)
      break;
    case 2:
      input = "shortcut";
      tooltip = "mytooltip_shortcut";
      myFunctionNumb(input, tooltip)
      break;
    case 3:
      input = "textarea_ES";
      tooltip = "myTooltipES";
      myFunctionNumb(input, tooltip)
      break;
    case 4:
      input = "textarea_UK";
      tooltip = "myTooltipUK";
      myFunctionNumb(input, tooltip)
      break;
    case 5:
      input = "textarea_FR";
      tooltip = "myTooltipFR";
      myFunctionNumb(input, tooltip)
      break;
    default:
      window.alert("Error");
  }

  //COPY TEXT
  function myFunctionNumb(input, tooltip) {
    var copyText = document.getElementById(input);
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    var tooltip = document.getElementById(tooltip);
    tooltip.innerHTML = "Copied ✓"

  }
}

//WHEN MOUSE IS OUT
  function outFunc(numberOut) {
    switch(numberOut) {
      case 1:
        tooltip = "mytooltip_Scenario";
        outFuncLang(tooltip) 
        break;
      case 2:
        tooltip = "mytooltip_shortcut";
        outFuncLang(tooltip) 
        break;
      case 3:
        tooltip = "myTooltipES";
        outFuncLang(tooltip) 
        break;
      case 4:
        tooltip = "myTooltipUK";
        outFuncLang(tooltip) 
        break;
      case 5:
        tooltip = "myTooltipFR";
        outFuncLang(tooltip) 
        break;
      default:
        window.alert("Error");
    }
    
    // FUCTIONS TO RESTART THE TOOLTIP AFTER COPYING, WHEN MOUSE IS OUT
  function outFuncLang(tooltip) {
  var tooltip1 = document.getElementById(tooltip);
  tooltip1.innerHTML = "Copy me !";
  }
  

}




