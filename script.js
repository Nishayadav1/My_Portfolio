function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("readmore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
     


    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      
    }
  }


     
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navbar = document.getElementById('navbar');
  
  menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
  });
  
  closeIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
  });



