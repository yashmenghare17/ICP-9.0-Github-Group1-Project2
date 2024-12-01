function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid weight and height values.";
        document.getElementById('bmiImage').style.display = "none";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    let imageUrl = "";

    if (bmi < 18.5) {
        category = "Underweight";
        imageUrl = "./../img/underweight.jpg";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        imageUrl = "./../img/normal.jpg";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        imageUrl = "./../img/overweight.jpg";
    } else {
        category = "Obese";
        imageUrl = "./../img/obese.jpg";
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi} (${category}).`;
    const bmiImage = document.getElementById('bmiImage');
    bmiImage.src = imageUrl;
    bmiImage.style.display = "block";
}
