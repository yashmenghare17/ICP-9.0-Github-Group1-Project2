const images = ["./../img/register-curosal-img1.jpg","./../img/register-curosal-img2.jpg" ,"./../img/register-curosal-img3.jpg",
    "./../img/register-curosal-img4.jpg", "./../img/register-cursoal-img5.jpg"]
  let index = 0;
  const slide = document.getElementById('slide');
  function next()
  {
    if (index < images.length-1)
    {
        index++;
    }
    else{
        index = 0;
    }
       slide.src = images[index]
  }
  function prev()
  {
      if(index > 0){
  
      
          index--;
       }
       else{
           index = images.length -1;
       }
          slide.src = images[index]
  }
  setInterval(next, 2000);

  function openModel()
  {
      const overlayElement = document.getElementById('overlay');
      overlayElement.style.display = 'flex';
  
  }
  