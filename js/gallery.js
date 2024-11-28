function closeoverlay(){
    const overlayelement = document.getElementById('overlay');
    overlayelement.style.display = 'none';
}
/*
function openoverlay(){
    const overlayelement = document.getElementById('overlay');
    overlayelement.style.display = 'flex';
}*/
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
    // Add similar objects for all remaining images
  };
  
  function openoverlay(imageId) {
    const overlayElement = document.getElementById("overlay");
    const modelBoxText = overlayElement.querySelector(".modelbox_text");
    const modelImage = overlayElement.querySelector(".model_img");
  
    // Update dialog content dynamically
    modelBoxText.innerHTML = `
      <h2>${dialogData[imageId].title}</h2>
      <p>${dialogData[imageId].description}</p>
    `;
    modelImage.src = dialogData[imageId].imgSrc;
  
    overlayElement.style.display = "flex";
  }
  
  function closeOverlay() {
    const overlayElement = document.getElementById("overlay");
    overlayElement.style.display = "none";
  }
  
