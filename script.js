const rotatingImgs = document.querySelectorAll('.rotating');

      var sidemenu= document.getElementById("sidemenu");

      function openmenu(){
        sidemenu.style.right= "0";
      }
      function closemenu(){
        sidemenu.style.right= "-200px";
      }

const categories = {
  appetizers: [
    { name: "Nachos", desc: "Crispy tortilla chips loaded with melted cheese, jalapeños, and savory toppings.", img: "images/nachos.png" },
    { name: "Soup", desc: "A warm, comforting bowl of seasoned broth with chicken and tender vegetables.", img: "images/soup.png" },
    { name: "Salad", desc: "Fresh, crunchy greens tossed with vibrant vegetables and dressing. Healthy and refreshing.", img: "images/salad.png" }
  ],
  main: [
    { name: "Fried Noodles", desc: "Golden stir-fried noodles mixed with vegetables and savory sauces. A flavorful Asian favorite.", img: "images/chopstick-1.png" },
    { name: "Shrimp Pasta", desc: "Juicy shrimp tossed in a garlic-infused, creamy pasta sauce. A seafood lover’s dream dish.", img: "images/chopstick-2.png" },
    { name: "Cheesy Ramen", desc: "Rich, creamy noodles coated in gooey melted cheese. A delicious twist on a comfort food.", img: "images/chopstick-3.png" }
  ],
  dessert: [
    { name: "Cheesecake", desc: "A smooth, creamy dessert with a buttery crust. Balanced sweetness with a hint of tangy delight.", img: "images/cheese-cake.png" },
    { name: "Ice Cream", desc: "Smooth, creamy ice cream bursting with real strawberry flavor. A sweet and fruity classic dessert.", img: "images/ice-cream.png" },
    { name: "Lava Cake", desc: "A rich chocolate cake with a molten, gooey center. Served with a classic vanilla ice cream scoop.", img: "images/lava-cake.png" }
  ]
};

function loadCategory(category) {
  const grid = document.getElementById("menu-grid");
  grid.innerHTML = "";
  categories[category].forEach(item => {
    grid.innerHTML += `
       <div class="menu-item">
    <img src="${item.img}" alt="${item.name}" class="rotating">
    <h4>${item.name}</h4>
    <p>${item.desc}</p>
  </div>`;

  });
}
loadCategory("appetizers");

document.querySelectorAll('.category-nav span').forEach(span => {
  span.addEventListener('click', () => {
    document.querySelector('.category-nav .active')?.classList.remove('active');
    span.classList.add('active');
    loadCategory(span.dataset.category);
  });
});

window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  document.querySelectorAll('.rotating').forEach(img => {
    img.style.transform = `rotate(${offset * 0.1 + 45}deg)`;
  });
});

const reviews = [
  "The lobster was tender and juicy, bursting with rich buttery flavor and perfectly seasoned and served hot, it melted in the mouth, it was truly a seafood lover’s dream dish.",
  "The spicy ramen had a bold flavor with the perfect kick of heat, the noodles were springy, and the broth was deep and savory; topped with fresh veggies and egg — comfort in every slurp.",
  "The hummus platter was creamy, smooth, and packed with garlic and lemon zest, the fresh pita and veggies were a perfect match - a light yet satisfying Mediterranean treat."
];
const reviewIcons = document.querySelectorAll('.review-icon');
reviewIcons.forEach((icon, i) => {
  icon.addEventListener('click', () => {
    document.querySelector('.review-icon.active')?.classList.remove('active');
    icon.classList.add('active');
    document.getElementById('review-text').textContent = reviews[i];
  });
});
// Show first review by default
document.getElementById('review-text').textContent = reviews[0];

// Smooth scroll with custom duration (0.5s)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      const targetPosition = target.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // milliseconds
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressRatio = Math.min(progress / duration, 1);

        window.scrollTo(0, startPosition + distance * progressRatio);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }
  });
});


