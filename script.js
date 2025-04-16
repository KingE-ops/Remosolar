function toggleChat() {
    const chatBody = document.getElementById('chat-body');
    chatBody.style.display = chatBody.style.display === 'flex' ? 'none' : 'flex';
  }

  function handleInput(event) {
    if (event.key === 'Enter') {
      const input = document.getElementById('chat-input');
      const message = input.value.trim();
      if (message !== "") {
        const chatBox = document.getElementById('chat-messages');
        const userMsg = document.createElement('div');
        userMsg.textContent = "You: " + message;
        userMsg.style.marginBottom = "5px";
        chatBox.appendChild(userMsg);
        input.value = "";

        // Simulate bot response
        setTimeout(() => {
          const botMsg = document.createElement('div');
          botMsg.textContent = "Bot: Thanks for reaching out! We'll get back to you soon.";
          botMsg.style.color = "#444";
          botMsg.style.marginBottom = "10px";
          chatBox.appendChild(botMsg);
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 600);
      }
    }

  // Show button after scrolling
  window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  }

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll to sections
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active'); // close nav on mobile
  }
}

