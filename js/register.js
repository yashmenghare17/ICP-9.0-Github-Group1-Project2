 function openModel()
  {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const gym = document.getElementById('gym').value;



     const formData = {
        name: name,
        email: email,
        phone: phone,
        state: state,
        city: city,
        gym: gym
      };
      

      localStorage.setItem('formData', JSON.stringify(formData));
      document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('state').value = '';
    document.getElementById('city').value = '';
    document.getElementById('gym').value = '';
      
      document.getElementById('overlay').style.display = 'block';
      
   
  }
  

function okButton()
{
    document.getElementById('overlay').style.display = 'none';
    

}

