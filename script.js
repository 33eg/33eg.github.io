// script.js

// Добавляем обработчик для закрытия выпадающего меню при клике вне его
document.addEventListener('click', function (event) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(function (dropdown) {
    if (!dropdown.contains(event.target) && !event.target.classList.contains('dropbtn')) {
      dropdown.style.display = 'none';
    }
  });
});

// При наведении мыши показываем выпадающее меню
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
  dropdown.addEventListener('mouseenter', function () {
    this.querySelector('.dropdown-content').style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', function () {
    this.querySelector('.dropdown-content').style.display = 'none';
  });
});