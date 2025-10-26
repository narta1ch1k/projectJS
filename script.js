// Header shrink on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Smooth appearance on scroll
const items = document.querySelectorAll('.collection, .about, .contact');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
items.forEach(i => observer.observe(i));

// Contact form animation
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Хабарлама жіберілді! Біз сізге жақын арада жауап береміз.');
});

// Burger menu toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});
