
document.querySelectorAll('.right h2').forEach((header) => {
    header.addEventListener('click', function() {
      const list = this.nextElementSibling; 
      const isActive = this.classList.contains('active');
      document.querySelectorAll('.right h2').forEach(h => h.classList.remove('active'));
      if (!isActive) {
        this.classList.add('active');
      }
      document.querySelectorAll('.right ul').forEach((ul) => {
        ul.style.display = 'none'; 
      });
      if (!isActive) {
        list.style.display = 'block'; 
      }
    });
  });
document.querySelectorAll('.right h2').forEach((header) => {
    header.addEventListener('click', function() {
      const list = this.nextElementSibling; 
      const isActive = list.style.display === 'block';
      if (isActive) {
        list.style.display = 'none'; 
      } else {
        list.style.display = 'block'; 
      }
    });
  });
    
