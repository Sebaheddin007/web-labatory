document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu li");
  const contents = document.querySelectorAll(".content");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      contents.forEach((content) => {
        content.classList.remove("active");
      });
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.add("active");
      }
    });
  });
  const editableIds = [
    "contact", "education", "skills-main", "languages",
    "name", "title", "about", "skills", "projects", "certificates", "hobbies", "activity"
  ];
  document.getElementById("saveBtn").addEventListener("click", function () {
    editableIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        localStorage.setItem(id, el.innerHTML);
      }
    });
    alert("Məlumatlar yadda saxlanıldı!");
  });
});
