document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.collapsible').forEach(section => {
    const content = section.querySelector('div, p, ul, ol');
    if (content) {
      content.style.display = 'none';
      const header = section.querySelector('h2');
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
      });
    }
  });

  document.querySelectorAll(".editable-content").forEach((content, index) => {
    const saved = localStorage.getItem("editable_" + index);
    if (saved) {
      content.textContent = saved; 
    }
    attachEditor(content, index);
  });

  function attachEditor(content, index) {
    const parent = content.parentElement;
    parent.addEventListener("dblclick", () => {
      const input = document.createElement("textarea");
      input.style.width = "100%";
      input.value = content.textContent;
      parent.replaceChild(input, content);
      input.focus();
      const saveContent = () => {
        const newContent = document.createElement("p");
        newContent.className = "editable-content";
        newContent.textContent = input.value; 
        localStorage.setItem("editable_" + index, input.value);
        parent.replaceChild(newContent, input);
        attachEditor(newContent, index);
      };
      input.addEventListener("blur", saveContent);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          input.blur();
        }
      });
    });
  }

  document.getElementById("resetStorage").addEventListener("click", () => {
    const confirmation = confirm("Bütün redaktələri silmək istədiyinizə əminsiniz?");
    if (confirmation) {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith("editable_")) {
          localStorage.removeItem(key);
        }
      });
      location.reload();
    }
  });

  document.querySelectorAll('.menu li').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) { 
        document.querySelectorAll('.content').forEach(section => {
          section.classList.remove('active');
        });
        targetElement.classList.add('active');
      }
    });
  });
});
