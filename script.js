function printFunctionName(userInput) {
  // Using eval to create a function dynamically with the provided name
  const dynamicFunction = eval('(function ' + userInput + '() { alert(arguments.callee.name); })');

  // Example usage
  dynamicFunction(); // It will alert the provided function name
}

// Example usage with user input
var userInput = prompt("Enter a function name:");
printFunctionName(userInput);
