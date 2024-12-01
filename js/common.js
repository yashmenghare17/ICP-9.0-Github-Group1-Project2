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
  if(page!='index'){
    curosal_data.innerHTML = `<img src="../img/${curosalImgArray[count]}.jpg"  alt="${curosalImgArray[count]}" />`;
  }else{
    curosal_data.innerHTML = `<img src="./img/${curosalImgArray[count]}.jpg"  alt="${curosalImgArray[count]}" />`;
  }
  
}
setInterval(function () {
  prevNext("Next");
}, 6000);
function toggle(type){
  if(type=='On'){
    document.getElementsByTagName('');
  }else{

  }
}
function menutoggle(){
  let menu_list = document.getElementById('menu_list');
  if(menu_list.style.display=='block'){
    menu_list.style.display='none';
  }else{
    menu_list.style.display='block';
  }
}
