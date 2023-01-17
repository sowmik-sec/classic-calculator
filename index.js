const key = document.getElementsByClassName("btn");
for (let i = 0; i < key.length; i++) {
  var num1 = "";
  var num2 = "";
  var string = "";
  var operator = "";
  var ans = 0;
  key[i].addEventListener("click", function () {
    const press = key[i].innerHTML;
    if (press == "C") {
      num1 = "";
      ans = 0;
      operator = "";
      document
        .getElementById("form-calc")
        .setAttribute("placeholder", "calculate");
      string = "";
    } else if (press == "=") {
      const n1 = parseFloat(num1);
      ans = currentCalculate(ans, n1, operator);

      document
        .getElementById("form-calc")
        .setAttribute("placeholder", string + "=" + ans);
      string = "" + ans;
      operator = "";
      num1 = "";
    } else if (press == "+") {
      if (num1 != "") {
        const n1 = parseFloat(num1);
        if (ans == 0) {
          ans = n1;
        } else {
          ans = currentCalculate(ans, n1, operator);
        }
        operator = press;
        num1 = "";
        string += press;
      } else {
        if (operator != "") {
          string = string.substring(0, string.length - 1);
        }
        operator = press;
        string += press;
      }

      document.getElementById("form-calc").setAttribute("placeholder", string);
    } else if (press == "-") {
      if (num1 != "") {
        const n1 = parseFloat(num1);
        if (ans == 0) {
          ans = n1;
        } else {
          ans = currentCalculate(ans, n1, operator);
        }
        operator = press;
        num1 = "";
        string += press;
      } else {
        if (operator != "") {
          string = string.substring(0, string.length - 1);
        }
        operator = press;
        string += press;
      }
      document.getElementById("form-calc").setAttribute("placeholder", string);
    } else if (press == "*") {
      if (num1 != "") {
        const n1 = parseFloat(num1);
        if (ans == 0) {
          ans = n1;
        } else {
          ans = currentCalculate(ans, n1, operator);
        }
        operator = press;
        num1 = "";
        string += press;
      } else {
        if (operator != "") {
          string = string.substring(0, string.length - 1);
        }
        operator = press;
        string += press;
      }
      document.getElementById("form-calc").setAttribute("placeholder", string);
    } else if (press == "/") {
      if (num1 != "") {
        const n1 = parseFloat(num1);
        if (ans == 0) {
          ans = n1;
        } else {
          ans = currentCalculate(ans, n1, operator);
        }
        operator = press;
        num1 = "";
        string += press;
      } else {
        if (operator != "") {
          string = string.substring(0, string.length - 1);
        }
        operator = press;
        string += press;
      }
      document.getElementById("form-calc").setAttribute("placeholder", string);
    } else if (press != "+" && press != "-" && press != "*" && press != "/") {
      num1 += press;
      string += press;
      document.getElementById("form-calc").setAttribute("placeholder", string);
    }

    //document.getElementById("form-calc").setAttribute("placeholder", string);
  });
}

function currentCalculate(curAns, num, operator) {
  if (operator == "+") {
    curAns += num;
  } else if (operator == "-") {
    curAns -= num;
  } else if (operator == "*") {
    curAns *= num;
  } else if (operator == "/") {
    curAns /= num;
  } else curAns = num;
  return curAns;
}
