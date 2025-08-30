// Підсвітка елементів
document.querySelectorAll('.pizza-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
  });
  item.addEventListener('mouseout', () => {
    item.style.boxShadow = 'none';
  });
});

// Анімка при скролі
const pizzaItems = document.querySelectorAll('.pizza-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

pizzaItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'all 0.6s ease-out';
  observer.observe(item);
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buy-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Смачного!");
    });
  });
});


function buy() {
  alert("Дякуємо за покупку!")
}