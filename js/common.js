let curosal_data = document.getElementById("curosal_img");
const curosalImgArray = [
  "home-curosal-img1",
  "home-curosal-img2",
  "home-curosal-img3",
  "home-curosal-img4",
  "home-curosal-img5",
];
let count = 0;
function prevNext(type) {
  if (type == "Prev") {
    count--;
    if (count < 0) {
      count = curosalImgArray.length - 1;
    }
  } else {
    count++;
    if (count >= curosalImgArray.length) {
      count = 0;
    }
  }
  if (page != "index") {
    curosal_data.innerHTML = `<img src="../img/${curosalImgArray[count]}.jpg"  alt="${curosalImgArray[count]}" />`;
  } else {
    curosal_data.innerHTML = `<img src="./img/${curosalImgArray[count]}.jpg"  alt="${curosalImgArray[count]}" />`;
  }
}
setInterval(function () {
  prevNext("Next");
}, 6000);
function toggle() {
  let toggle_dark = document.getElementById("toggle_dark").style.display;
  let toggle_light = document.getElementById("toggle_light").style.display;
  let wrapper = document.getElementById("wrapper");
  let diff_card1 = document.getElementById("diff_div_1");
  let diff_div_2 = document.getElementById("diff_div_2");
  let model = document.getElementById("model");
  let footer_section = document.getElementById("footer_section");
  let container = document.getElementById("container");
  let footer_copy_right = document.getElementById("footer-copyright-section");
  if (toggle_dark == "none") {
    document.getElementById("toggle_light").style.display = "none";
    document.getElementById("toggle_dark").style.display = "block";
    wrapper.style.backgroundColor = "black";
    wrapper.style.color = "white";
    diff_card1.style.color = "black";
    diff_div_2.style.color = "black";
    model.style.color = "black";
    footer_section.style.backgroundColor = "black";
    container.style.backgroundColor = "black";
    footer_copy_right.style.color = "white";
  } else {
    document.getElementById("toggle_light").style.display = "block";
    document.getElementById("toggle_dark").style.display = "none";
    wrapper.style.backgroundColor = "white";
    wrapper.style.color = "black";
    diff_card1.style.color = "black";
    diff_div_2.style.color = "black";
    model.style.color = "black";
    footer_section.style.backgroundColor = "white";
    container.style.backgroundColor = "white";
    footer_copy_right.style.color = "black";
  }
}
function menutoggle() {
  let menu_list = document.getElementById("menu_list");

  if (menu_list.style.display == "block") {
    menu_list.style.display = "none";
  } else {
    menu_list.style.display = "block";
  }
}
