// script.js

// Scroll fade-in
const fadeInElements = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

fadeInElements.forEach(el => {
  el.classList.add('fade');
  observer.observe(el);
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
  document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

// Form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

  if (nameInput.value.trim() === '') {
    document.getElementById('name-error').textContent = 'Please enter your name';
    valid = false;
  }

  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(emailInput.value)) {
    document.getElementById('email-error').textContent = 'Please enter a valid email';
    valid = false;
  }

  if (messageInput.value.trim() === '') {
    document.getElementById('message-error').textContent = 'Message cannot be empty';
    valid = false;
  }

  if (valid) {
    successMessage.textContent = '💌 Message sent successfully!';
    successMessage.classList.add('show');
    form.reset();
    setTimeout(() => {
      successMessage.textContent = '';
      successMessage.classList.remove('show');
    }, 4000);
  }
});
