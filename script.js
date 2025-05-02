// Başlığa klikləndikdə məzmunu gizlətmək və ya göstərmək üçün funksiya
document.querySelectorAll('.right h2').forEach((header) => {
    header.addEventListener('click', function() {
      const list = this.nextElementSibling; // Həmin başlıqdan sonra gələn məzmunu tapırıq
      const isActive = this.classList.contains('active');
  
      // Başlıqda 'active' sinfi yoxdursa, onu əlavə et
      document.querySelectorAll('.right h2').forEach(h => h.classList.remove('active')); // Digər başlıqlardan 'active' sinfini silirik
      if (!isActive) {
        this.classList.add('active'); // Başlığa 'active' sinfini əlavə et
      }
  
      // Məzmunu göstər və ya gizlət
      document.querySelectorAll('.right ul').forEach((ul) => {
        ul.style.display = 'none'; // Əvvəlcə bütün məzmunları gizləyirik
      });
  
      if (!isActive) {
        list.style.display = 'block'; // Aktiv olan başlıq üçün məzmunu göstəririk
      }
    });
  });
// Başlığa klikləndikdə məzmunu gizlətmək və ya göstərmək üçün funksiya
document.querySelectorAll('.right h2').forEach((header) => {
    header.addEventListener('click', function() {
      const list = this.nextElementSibling; // Həmin başlıqdan sonra gələn məzmunu tapırıq
      const isActive = list.style.display === 'block'; // Əgər artıq açıqdırsa
  
      // Məzmunu açıb bağlayırıq
      if (isActive) {
        list.style.display = 'none'; // Gizlədirik
      } else {
        list.style.display = 'block'; // Göstəririk
      }
    });
  });
    