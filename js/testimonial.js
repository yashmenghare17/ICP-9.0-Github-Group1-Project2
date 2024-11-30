const Testimonials = [
  {
    image: "../img/man.png",
    quote:
      '"This gym is amazing. Amazing facility, top equipment and great environment."',
    name: "- Rajesh Kumar",
  },
  {
    image: "../img/woman.png",
    quote:
      '"Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional athletes to train at."',
    name: "- Priya Sharma",
  },
  {
    image: "../img/boy.png",
    quote:
      '"The gym environment is so nice. The trainers will guide us very well if we approach them."',
    name: "- Arjun Mehta",
  },
  {
    image: "../img/girl.png",
    quote:
      '"Very neatly maintained gym. Great place to workout with flexible timings. Had helpful trainers and excellent equipment."',
    name: "- Sneha Patel",
  },
];

// DOM Elements
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("left-arrow");
const nextBtn = document.getElementById("right-arrow");
const form = document.getElementById("testimonial-form");
const popup = document.getElementById("submission-popup");

// State Variables
let i = 0;

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
};

const showPrevTestimonial = () => {
  i = (i - 1 + Testimonials.length) % Testimonials.length;
  displayTestimonial();
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
    name: `- ${name.toUpperCase()}`,
    image: image,
    quote: `"${quote}"`,
  };

  Testimonials.push(newTestimonial);
  saveTestimonial(newTestimonial);
  displayTestimonial();
  form.reset();
  openModal();
});

// Display the popup
function openModal() {
  const overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "flex";
  setTimeout(closeModal, 2000);
}

function closeModal() {
  const overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "none";
}

// Initial setup
loadTestimonials();
displayTestimonial();
