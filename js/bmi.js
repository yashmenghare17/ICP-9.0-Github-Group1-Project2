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
    let imgSrc = "";

    if (bmi < 18.5) {
        category = "Underweight";
        imgSrc = "../img/underweight.jpg";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        imgSrc = "../img/normal.avif";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        imgSrc = "../img/overweight.avif";
    } else {
        category = "Obese";
        imgSrc = "../img/obese.jpg";
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi} (${category}).`;
    const bmiImage = document.getElementById('bmiImage');
    bmiImage.src = imgSrc;
    bmiImage.style.display = "block";
}
