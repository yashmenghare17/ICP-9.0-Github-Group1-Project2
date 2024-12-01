const gym_count_interval = setInterval(() => {
    let gym_count = document.getElementById('gym_count').textContent;
    gym_count++;
    document.getElementById('gym_count').innerText = gym_count;
    if (gym_count == 156) {
        document.getElementById('gym_count').innerText = `${gym_count}+`;
        clearInterval(gym_count_interval);
    }
}, 10);
const city_count_interval = setInterval(() => {
    let city_count = document.getElementById('city_count').textContent;
    city_count++;
    document.getElementById('city_count').innerText = city_count;
    if (city_count == 95) {
        document.getElementById('city_count').innerText = `${city_count}+`;
        clearInterval(city_count_interval);
    }
}, 10);
const state_count_interval = setInterval(() => {
    let state_count = document.getElementById('state_count').textContent;
    state_count++;
    document.getElementById('state_count').innerText = state_count;
    if (state_count == 26) {
        document.getElementById('state_count').innerText = `${state_count}+`;
        clearInterval(state_count_interval);
    }
}, 10);
const trainer_count_interval = setInterval(() => {
    let trainer_count = document.getElementById('trainer_count').textContent;
    trainer_count++;
    document.getElementById('trainer_count').innerText = trainer_count;
    if (trainer_count == 800) {
        document.getElementById('trainer_count').innerText = `${trainer_count}+`;
        clearInterval(trainer_count_interval);
    }
}, 10);
const customer_count_interval = setInterval(() => {
    let customer_count = document.getElementById('customer_count').textContent;
    customer_count++;
    document.getElementById('customer_count').innerText = customer_count;
    if (customer_count == 1000) {
        document.getElementById('customer_count').innerText = `${customer_count}+`;
        clearInterval(customer_count_interval);
    }
}, 10);
const onboarding_count_interval = setInterval(() => {
    let onboarding_count = document.getElementById('onboarding_count').textContent;
    onboarding_count++;
    document.getElementById('onboarding_count').innerText = onboarding_count;
    if (onboarding_count == 600) {
        document.getElementById('onboarding_count').innerText = `${onboarding_count}+`;
        clearInterval(onboarding_count_interval);
    }
}, 10);
const modalImgData = document.getElementById('modal_img');
const modalHeadingData = document.getElementById('modal_heading');
function showCards(data) {
    const idData = document.getElementById(data);
    const contentImg = idData.children[0];
    const contentHeading = idData.children[1].textContent;
    modalHeadingData.innerText = contentHeading;
    modalImgData.src = contentImg.src;
    openModel();
}
function openModel() {
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'flex';
}
function okButton() {
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'none';
    modalHeadingData.innerText = '';
}