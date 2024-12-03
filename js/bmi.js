// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const resultElement = document.getElementById('result');
    const bmiImage = document.getElementById('bmiImage');

    if (!weight || !height || weight <= 0 || height <= 0) {
        resultElement.innerText = "Please enter valid weight and height values.";
        bmiImage.style.display = "none";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category, imgSrc;
    if (bmi < 18.5) {
        category = "Underweight";
        imgSrc = "../img/underweight.jpg";
    } else if (bmi < 24.9) {
        category = "Normal weight";
        imgSrc = "../img/normal.avif";
    } else if (bmi < 29.9) {
        category = "Overweight";
        imgSrc = "../img/overweight.avif";
    } else {
        category = "Obese";
        imgSrc = "../img/obese.jpg";
    }

    resultElement.innerText = `Your BMI is ${bmi} (${category}).`;
    bmiImage.src = imgSrc;
    bmiImage.style.display = "block";
}

function resetBMI() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").textContent = "";
    const bmiImage = document.getElementById("bmiImage");
    bmiImage.src = "";
    bmiImage.style.display = "none";
}

// Benefits Tab Toggle
document.querySelectorAll(".benefit-item").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".benefit-item, .highlight-box").forEach(el => el.classList.remove("active"));
        item.classList.add("active");
        document.getElementById(item.getAttribute("data-tab")).classList.add("active");
    });
});

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const isLightMode = body.classList.toggle("light-mode", !body.classList.contains("light-mode"));
    body.classList.toggle("dark-mode", !isLightMode);
    document.getElementById("toggle_light").style.display = isLightMode ? "inline" : "none";
    document.getElementById("toggle_dark").style.display = isLightMode ? "none" : "inline";
}
