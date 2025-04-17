const form = document.getElementById('checkout-form');
const progress = document.getElementById('progress');
const popup = document.getElementById('popup');
const preview = document.getElementById('preview');

form.addEventListener('input', () => {
  const filled = Array.from(form.querySelectorAll('input, textarea')).filter(i => i.value).length;
  const total = form.querySelectorAll('input, textarea').length;
  progress.style.width = `${(filled / total) * 100}%`;

  const message = `*Checkout Info*\n\nName: ${name.value}\nDOB: ${dob.value}\nEmail: ${email.value}\nPhone: ${phone.value}\nAddress: ${address.value}\nGoods: ${goods.value}\nDelivery Date: ${document.getElementById('delivery-date').value}`;
  preview.value = message;
});

document.getElementById('avatar').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.getElementById('avatar-preview');
      img.src = reader.result;
      img.hidden = false;
    };
    reader.readAsDataURL(file);
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const sound = new Audio('https://www.myinstants.com/media/sounds/cash-register.mp3');
  sound.play();

  if (navigator.vibrate) navigator.vibrate(200);

  popup.classList.add('active');

  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1000);
  }

  setTimeout(() => {
    const message = preview.value;
    const whatsappLink = `https://wa.me/2349021475250?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  }, 2200);
});