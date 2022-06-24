const simpleCalculator = () => {
  validOperations = ["add", "substract", "divide", "multiply"];
  operation = prompt(
    "What would you like to do: \n(Add, Substract, Divide, Multiply)"
  ).toLocaleLowerCase();

    if (validOperations.includes(operation)) {
      num1 = +prompt("Enter the first number");
      num2 = +prompt("Enter second number");
      let result;

      switch (operation) {
        case "add":
            result = num1 + num2
            break;
        case "substract":
            result = num1 - num2
        case "divide":
            result = num1 /num2
        default:
            result = 0;
      }

      alert(`The result of the ${operation} operation is: ${result}`)
      return

    } else {
        alert("Invalid operation entered")
        simpleCalculator()
  }
};

simpleCalculator();
