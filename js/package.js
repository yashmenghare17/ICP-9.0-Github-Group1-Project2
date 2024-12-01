let curosal_data = document.getElementById("curosal_img");
const curosalImgArray = ['home-curosal-img1', 'home-curosal-img2', 'home-curosal-img3', 'home-curosal-img4', 'home-curosal-img5'];
let count = 0;
function prevNext(type) {
    if (type == 'Prev') {
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
    curosal_data.innerHTML = `<img src="./../img/${curosalImgArray[count]}.jpg"  alt="${curosalImgArray[count]}" />`;
}
setInterval(function () {
    prevNext('Next');
}, 5000);