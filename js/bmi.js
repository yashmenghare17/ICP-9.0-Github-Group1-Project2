function calculateBMI() {
    
const weight = parseFloat(document.getElementById('weight').value);
 
const height = parseFloat(document.getElementById('height').value);
 
    if (!(weight > 0 && height > 0)) {
        document.getElementById('result').innerText = 'Enter positive numbers for weight and height.';
        return;
    }
    
    const heightInMeters = height / 100;
    // Convert height from centimeters to meters .

    const bmi = weight / (heightInMeters * heightInMeters);
    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m)).

    let category = '';
    // Initialize a variable to store the BMI category 

    if (bmi < 18.5) {
        category = 'Underweight';
        // BMI less than 18.5 is considered underweight.
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        // BMI between 18.5 and 24.9 is considered normal weight.
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        // BMI between 25 and 29.9 is considered overweight.
    } else {
        category = 'Obesity';
        // BMI of 30 or higher is considered obesity.
    }
   document.getElementById('result').innerHTML = `
    <span style="color: white;">Your BMI is ${bmi.toFixed(2)} (${category})</span>.
    `;
    }
