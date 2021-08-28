const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        
        menuToggle.classList.toggle('active');
        
        showcase.classList.toggle('active');
        
        
      })
      document.getElementsByClassName("toggle").onclick = function(){
        document.getElementsByClassName("menu").style.display="block";
      }