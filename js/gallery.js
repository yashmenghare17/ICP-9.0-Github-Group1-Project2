const dialogData = {
  1: {
    title: "Gym Floor Overview",
    description: "Welcome to our state-of-the-art gym! With a spacious workout floor and cutting-edge equipment, we ensure a fulfilling fitness experience for everyone.",
    imgSrc: "./../img/gallery_img_1.webp",
  },
  2: {
    title: "Fun and Camaraderie",
    description: "Fitness is more fun with friends! Our gym fosters a positive and inclusive environment, making workouts enjoyable and engaging.",
    imgSrc: "./../img/gallery_img_2.webp",
  },
  3: {
    title: "Personal Training Support",
    description: "Achieve your fitness goals with our expert trainers. We offer personalized guidance to help you build strength and confidence.",
    imgSrc: "./../img/gallery_img_3.webp",
  },
  4: {
    title: "Advanced Cardio Equipment",
    description: "Push your limits with our premium cardio machines, perfect for enhancing endurance and burning calories effectively.",
    imgSrc: "./../img/gallery_img_4.webp",
  },
  5: {
    title: "Group Fitness Classes",
    description: "Join our lively group fitness classes and experience the power of community workouts. From yoga to high-energy Zumba, we have something for everyone!",
    imgSrc: "./../img/gallery_img_5.webp",
  },
  6: {
    title: "Strength Training Zone:",
    description: "Boost your power and tone your body in our dedicated strength training area equipped with professional-grade machines.",
    imgSrc: "./../img/gallery_img_6.webp",
  },
  7: {
    title: "Team Training Sessions:",
    description: "Stay motivated with team workouts! Our trainers will keep you energized and focused on your fitness journey.",
    imgSrc: "./../img/gallery_img_7.webp",
  },
  8: {
    title: "Motivation and Progress:",
    description: "Celebrate every milestone in your fitness journey. Our gym is the perfect place to showcase your hard work and dedication.",
    imgSrc: "./../img/gallery_img_8.webp",
  },
  9: {
    title: "Core Strength Workouts:",
    description: "Build a stronger core with specialized training. Our functional workout sessions are tailored to improve stability and balance.",
    imgSrc: "./../img/gallery_img_9.webp",
  },
  10: {
    title: "Balance and Stability Training:",
    description: "Take your fitness to the next level with balance-focused workouts. Challenge yourself with innovative equipment and exercises.",
    imgSrc: "./../img/gallery_img_10.webp",
  },
  11: {
    title: "High-Intensity Workouts:",
    description: "Feel the adrenaline rush with our high-intensity training sessions. Battle ropes, kettlebells, and more to keep you energized!",
    imgSrc: "./../img/gallery_img_11.webp",
  },
  12: {
    title: "Cardio for All Levels:",
    description: "Whether you're a beginner or a pro, our gym's cardio zone offers equipment suited for every fitness level.",
    imgSrc: "./../img/gallery_img_12.webp",
  },
  // Add similar objects for all remaining images
};

function openoverlay(imageId) {
  const overlayElement = document.getElementById("overlay");
  const modelBoxText = document.getElementById("modelbox_text");
  const modelImage = document.getElementById("model_img");

  // Update dialog content dynamically
  if (dialogData[imageId]) {
    modelBoxText.innerHTML = `
      <h2>${dialogData[imageId].title}</h2>
      <p>${dialogData[imageId].description}</p>
    `;
    modelImage.src = dialogData[imageId].imgSrc;
  }

  // Display the overlay
  overlayElement.style.display = "flex";
}

function closeoverlay() {
  const overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "none";
}
