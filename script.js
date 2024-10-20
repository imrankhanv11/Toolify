// Smooth Scroll for Home Button Only
document.querySelector('.nav-links a[href="#home"]').addEventListener('click', function (e) {
  e.preventDefault(); 
  const target = document.querySelector(this.getAttribute('href')); 
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start' 
  });
});


document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    const content = item.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Age Calculator Function
function calculateAge() {
  const birthDate = new Date(document.getElementById("birthDate").value);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById("ageResult").textContent = `Your age is: ${age} years.`;
}

// Binary to Decimal Converter
function convertBinaryToDecimal() {
  const binary = document.getElementById("binaryInput").value;
  if (/^[01]+$/.test(binary)) {  // Validate if the input is a binary number
    const decimal = parseInt(binary, 2);
    document.getElementById("binaryResult").textContent = `Decimal: ${decimal}`;
  } else {
    document.getElementById("binaryResult").textContent = "Please enter a valid binary number (0s and 1s only).";
  }
}

// BMI Calculator Function
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    let category;

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }
    document.getElementById("bmi-result").innerText = `Your BMI: ${bmi} (${category})`;
  } else {
    document.getElementById("bmi-result").innerText = "Please enter valid weight and height.";
  }
}

// Case Converter Functions
function convertToUpperCase() {
  const input = document.getElementById('caseInput').value;
  const result = input.toUpperCase();
  document.getElementById('caseResult').innerText = result;
}

function convertToLowerCase() {
  const input = document.getElementById('caseInput').value;
  const result = input.toLowerCase();
  document.getElementById('caseResult').innerText = result;
}

function convertToTitleCase() {
  const input = document.getElementById('caseInput').value;
  const result = input.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  document.getElementById('caseResult').innerText = result;
}

// Loan EMI Calculator Function
function calculateEMI() {
  const principal = parseFloat(document.getElementById('principal').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Convert annual rate to monthly
  const tenure = parseInt(document.getElementById('tenure').value); // Total number of monthly payments

  if (!isNaN(principal) && !isNaN(interestRate) && !isNaN(tenure) && tenure > 0) {
    const emi = (principal * interestRate * Math.pow(1 + interestRate, tenure)) / (Math.pow(1 + interestRate, tenure) - 1);
    document.getElementById('emiResult').innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
  } else {
    document.getElementById('emiResult').innerText = 'Please enter valid numbers for all fields.';
  }
}

// Palindrome Checker Function
function checkPalindrome() {
  const input = document.getElementById('palindromeInput').value.trim(); 
  const reversed = input.split('').reverse().join('');
  const resultElement = document.getElementById('palindromeResult');
  if (input === reversed && input.length > 0) {
    resultElement.innerHTML = `"${input}" is a palindrome!`;
    resultElement.style.color = 'green';
  } else if (input.length > 0) {
    resultElement.innerHTML = `"${input}" is not a palindrome.`;
    resultElement.style.color = 'red';
  } else {
    resultElement.innerHTML = "Please enter a word."; 
    resultElement.style.color = 'red';
  }
}

//password genertor
function generatePassword() {
  const length = parseInt(document.getElementById("passwordLength").value);
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  if (!isNaN(length) && length > 0) {
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById("passwordResult").innerText = `Generated Password: ${password}`;
  } else {
    document.getElementById("passwordResult").innerText = "Please enter a valid length.";
  }
}

// Percentage Calculator Function
function calculatePercentage() {
  const total = parseFloat(document.getElementById('total').value);
  const percentage = parseFloat(document.getElementById('percentage').value);
  let result;

  if (!isNaN(total) && !isNaN(percentage)) {
    result = (total * percentage) / 100;
    document.getElementById('percentageResult').innerText = `Result: ${result.toFixed(2)}`;
  } else {
    document.getElementById('percentageResult').innerText = 'Please enter valid numbers.';
  }
}

// Random Number Generator Function
function generateRandomNumber() {
  const min = parseInt(document.getElementById("minNum").value);
  const max = parseInt(document.getElementById("maxNum").value);
  if (!isNaN(min) && !isNaN(max) && max > min) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("randomNumResult").innerText = `Random Number: ${result}`;
  } else {
    document.getElementById("randomNumResult").innerText = "Please enter valid Min and Max values.";
  }
}

// Simple Calculator Function
function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operation";
  }
  document.getElementById("calc-result").innerText = `Result: ${result}`;
}

// Text Repeater Function
function repeatText() {
  const text = document.getElementById('repeaterInput').value;
  const count = parseInt(document.getElementById('repeatCount').value);
  let result = '';

  for (let i = 0; i < count; i++) {
    result += text + '\n'; 
  }

  document.getElementById('repeatResult').innerText = result; 
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();
  if (taskText === "") return; 

  const li = document.createElement("li");

  // Create a span for the task text
  const taskSpan = document.createElement("span");
  taskSpan.className = "task-text";
  taskSpan.textContent = taskText;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    li.remove(); // Remove task from list
  };

  li.appendChild(taskSpan); // Add task text
  li.appendChild(deleteButton); // Append delete button to the list item

  document.getElementById("todoList").appendChild(li); // Add task to the list
  input.value = ""; // Clear the input field
}

// Unit Length Conversion Function
function convertLength() {
  const length = parseFloat(document.getElementById('lengthValue').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  // Conversion rates
  const conversionRates = {
    m: 1,        // Meters
    km: 0.001,   // Kilometers
    ft: 3.28084, // Feet
    in: 39.3701  // Inches
  };

  if (!isNaN(length)) {
    // Convert input length to meters
    const lengthInMeters = length / conversionRates[fromUnit];

    // Convert meters to the target unit
    const convertedLength = lengthInMeters * conversionRates[toUnit];

    document.getElementById('conversionResult').innerText =
      `${length} ${fromUnit} = ${convertedLength.toFixed(2)} ${toUnit}`;
  } else {
    document.getElementById('conversionResult').innerText = 'Please enter a valid length.';
  }
}

// Unit Temperature Conversion Function
function convertTemperature() {
  const tempInput = document.getElementById('tempValue').value;
  const temp = parseFloat(tempInput);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if (tempInput.trim() === '' || isNaN(temp)) {
    document.getElementById('conversionResult').innerText = 'Please enter a valid temperature.';
    return; // Stop execution if the input is invalid
  }

  let result;

  // Conversion logic
  if (fromUnit === toUnit) {
    result = temp; // No conversion needed
  } else if (fromUnit === 'C') {
    result = (toUnit === 'F') ? (temp * 9 / 5) + 32 : temp + 273.15; // C to F or K
  } else if (fromUnit === 'F') {
    result = (toUnit === 'C') ? (temp - 32) * 5 / 9 : (temp - 32) * 5 / 9 + 273.15; // F to C or K
  } else if (fromUnit === 'K') {
    result = (toUnit === 'C') ? temp - 273.15 : (temp - 273.15) * 9 / 5 + 32; // K to C or F
  }

  document.getElementById('conversionResult').innerText =
    `${temp} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Word and Letter Counter Function
function countWordsAndLetters() {
  const text = document.getElementById("textInput").value;
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const letterCount = text.replace(/\s+/g, '').length;
  document.getElementById("countResult").innerText = `Words: ${wordCount}, Letters: ${letterCount}`;
}

// Word Reverser Function (Reverse each word individually)
function reverseWords() {
  const input = document.getElementById('reverseInput').value; // Get input from textarea
  const result = input.split(' ') // Split the input into words
    .map(word => word.split('').reverse().join('')) // Reverse each word
    .join(' '); // Join the reversed words back into a sentence
  document.getElementById('reverseResult').innerText = result; // Display the result
}
