let cart = [];
let cartCount = 0;
let cartTotal = 0;
const cartCountElement = document.getElementById("cartCount");
const cartTotalElement = document.getElementById("cartTotal");
const cartItemsElement = document.getElementById("cartItems");

const products = {
  inverters: [
    { name: "12V Pure Sine Inverter", price: 50000, img: "./images/inverter1.jpg", id: "inverter1" },
    { name: "24V Solar Inverter", price: 70000, img: "./images/inverter2.jpg", id: "inverter2" },
    { name: "48V Off-Grid Inverter", price: 100000, img: "./images/inverter3.jpg", id: "inverter3" },
    { name: "12V Pure Sine Inverter", price: 50000, img: "./images/inverter1.jpg", id: "inverter1" },
    { name: "24V Solar Inverter", price: 70000, img: "./images/inverter2.jpg", id: "inverter2" },
    { name: "48V Off-Grid Inverter", price: 100000, img: "./images/inverter3.jpg", id: "inverter3" }
  ],
  batteries: [
    { name: "12V 100Ah Solar Battery", price: 40000, img: "./images/battery1.jpg", id: "battery1" },
    { name: "24V 200Ah Solar Battery", price: 60000, img: "./images/battery2.jpg", id: "battery2" },
    { name: "48V 400Ah Solar Battery", price: 80000, img: "./images/battery3.jpg", id: "battery3" },
    { name: "12V 100Ah Solar Battery", price: 40000, img: "./images/battery1.jpg", id: "battery1" },
    { name: "24V 200Ah Solar Battery", price: 60000, img: "./images/battery2.jpg", id: "battery2" },
    { name: "48V 400Ah Solar Battery", price: 80000, img: "./images/battery3.jpg", id: "battery3" }
  ],
  panels: [
    { name: "200W Solar Panel", price: 30000, img: "./images/panel1.jpg", id: "panel1" },
    { name: "300W Solar Panel", price: 45000, img: "./images/panel2.jpg", id: "panel2" },
    { name: "500W Solar Panel", price: 65000, img: "./images/panel3.jpg", id: "panel3" },
    { name: "200W Solar Panel", price: 30000, img: "./images/panel1.jpg", id: "panel1" },
    { name: "300W Solar Panel", price: 45000, img: "./images/panel2.jpg", id: "panel2" },
    { name: "500W Solar Panel", price: 65000, img: "./images/panel3.jpg", id: "panel3" }
  ]
};

function addToCart(product) {
  const found = cart.find(item => item.id === product.id);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartCountElement.textContent = cartCount;
  cartTotalElement.textContent = cartTotal;

  cartItemsElement.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <h4>${item.name} (x${item.quantity})</h4>
      <button onclick="removeFromCart('${item.id}')">Remove</button>
    `;
    cartItemsElement.appendChild(div);
  });
}

function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  updateCart();
}

function checkout() {
  alert(`Proceeding to checkout... Total: ₦${cartTotal}`);
  cart = [];
  updateCart();
}

function toggleMenu(menu) {
  const navLinks = document.getElementById('navLinks');
  menu.classList.toggle('open');
  navLinks.classList.toggle('show');
}

function toggleCartDropdown() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartBackdrop = document.getElementById('cartBackdrop');
  cartSidebar.classList.toggle('show');
  cartBackdrop.style.display = cartSidebar.classList.contains('show') ? 'block' : 'none';
}


let slidePositions = {
inverterCarousel: 0,
batteryCarousel: 0,
panelCarousel: 0
};

function nextSlide(carouselId) {
const carousel = document.getElementById(carouselId);
const maxShift = -70; // You can tweak this if your card width or container changes
slidePositions[carouselId] -= 100;

// Limit shift (assumes 3 items visible at a time, adjust if needed)
const maxSlide = -(carousel.children.length - 3) * 100;
if (slidePositions[carouselId] < maxSlide) {
slidePositions[carouselId] = maxSlide;
}

carousel.style.transform = `translateX(${slidePositions[carouselId]}%)`;
}

function prevSlide(carouselId) {
slidePositions[carouselId] += 100;
if (slidePositions[carouselId] > 0) {
slidePositions[carouselId] = 0;
}

const carousel = document.getElementById(carouselId);
carousel.style.transform = `translateX(${slidePositions[carouselId]}%)`;
}


document.addEventListener("DOMContentLoaded", function () {
  const inverterCarousel = document.getElementById("inverterCarousel");
  products.inverters.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <div class="card">
        <img src="${product.img}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>₦${product.price}</p>
        <button onclick="addToCart({name: '${product.name}', price: ${product.price}, img: '${product.img}', id: '${product.id}'})">Add to Cart</button>
      </div>
    `;
    inverterCarousel.appendChild(card);
  });

  const batteryCarousel = document.getElementById("batteryCarousel");
  products.batteries.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <div class="card">
        <img src="${product.img}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>₦${product.price}</p>
        <button onclick="addToCart({name: '${product.name}', price: ${product.price}, img: '${product.img}', id: '${product.id}'})">Add to Cart</button>
      </div>
    `;
    batteryCarousel.appendChild(card);
  });

  const panelCarousel = document.getElementById("panelCarousel");
  products.panels.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <div class="card">
        <img src="${product.img}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>₦${product.price}</p>
        <button onclick="addToCart({name: '${product.name}', price: ${product.price}, img: '${product.img}', id: '${product.id}'})">Add to Cart</button>
      </div>
    `;
    panelCarousel.appendChild(card);
  });
});