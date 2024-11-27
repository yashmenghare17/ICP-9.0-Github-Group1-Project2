const Testimonials = [
  {
    image: "../img/man.png",
    quote:
      '"This gym completely changed my life! Amazing trainers and great environment."',
    name: "- John Doe",
  },
  {
    image: "../img/woman.png",
    quote: '"I’ve never felt stronger! The community here is incredible."',
    name: "- Jane Smith",
  },
  {
    image: "../img/boy.png",
    quote:
      '"The classes are fun and challenging. I look forward to coming every day!"',
    name: "- Mike Johnson",
  },
  {
    image: "../img/girl.png",
    quote: '"A welcoming place for everyone. I found my second home here."',
    name: "- Emily Davis",
  },
];

// DOM Elements
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots-container");
const prevBtn = document.getElementById("left-arrow");
const nextBtn = document.getElementById("right-arrow");
const form = document.getElementById("testimonial-form");
const popup = document.getElementById("submission-popup");

// State Variables
let i = 0;

// Create dots for testimonials
const createDots = () => {
  dotsContainer.innerHTML = "";
  Testimonials.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("data-index", index);
    dotsContainer.appendChild(dot);

    // Dot click event
    dot.addEventListener("click", () => {
      i = index;
      displayTestimonial();
      updateDots();
    });
  });
};

// Update dots based on current testimonial index
const updateDots = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === i);
  });
};

// Display the current testimonial
const displayTestimonial = () => {
  slider.innerHTML = `
        <img src="${Testimonials[i].image}" alt="Client Image" />
        <p class="quote">${Testimonials[i].quote}</p>
        <h4>${Testimonials[i].name}</h4>
    `;
};

// Navigation Functions
const showNextTestimonial = () => {
  i = (i + 1) % Testimonials.length;
  displayTestimonial();
  updateDots();
};

const showPrevTestimonial = () => {
  i = (i - 1 + Testimonials.length) % Testimonials.length;
  displayTestimonial();
  updateDots();
};

// Auto-scroll functionality
let autoScroll = setInterval(showNextTestimonial, 5000);
slider.addEventListener("mouseover", () => clearInterval(autoScroll));
slider.addEventListener(
  "mouseleave",
  () => (autoScroll = setInterval(showNextTestimonial, 5000))
);

// Event Listeners for navigation buttons
nextBtn.addEventListener("click", showNextTestimonial);
prevBtn.addEventListener("click", showPrevTestimonial);

// Load testimonials from localStorage
const loadTestimonials = () => {
  const storedTestimonials = JSON.parse(localStorage.getItem("testimonials"));
  if (storedTestimonials) {
    Testimonials.push(...storedTestimonials);
  }
};

// Save a new testimonial to localStorage
const saveTestimonial = (testimonial) => {
  const storedTestimonials =
    JSON.parse(localStorage.getItem("testimonials")) || [];
  storedTestimonials.push(testimonial);
  localStorage.setItem("testimonials", JSON.stringify(storedTestimonials));
};

// Handle form submission for new testimonials
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const quote = document.getElementById("quote").value;

  const newTestimonial = {
    name: `- ${name}`,
    image: image,
    quote: `"${quote}"`,
  };

  Testimonials.push(newTestimonial);
  saveTestimonial(newTestimonial);

  displayTestimonial();
  createDots();
  form.reset();
});

// Initial setup
loadTestimonials();
displayTestimonial();
createDots();
