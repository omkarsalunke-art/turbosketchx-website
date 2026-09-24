const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const tabs = document.querySelectorAll('.price-tabs button');
const panels = document.querySelectorAll('.price-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.table).classList.add('active');
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// IMPORTANT: Replace this with your own WhatsApp number in international format.
// Example for an Indian number: 919876543210
const WHATSAPP_NUMBER = '917719820393';

const orderForm = document.getElementById('orderForm');
orderForm?.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const size = document.getElementById('size').value;
  const people = document.getElementById('people').value;
  const style = document.getElementById('style').value;
  const frame = document.getElementById('frame').value;
  const message = document.getElementById('message').value.trim();

  const text = `Hello TurboSketchX! ✍️

I want to order a custom portrait.

Name: ${name}
WhatsApp: ${phone}
Size: ${size}
People: ${people}
Style: ${style}
Frame: ${frame}
Occasion / Message: ${message || 'Not specified'}

I will send my reference photo here.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});
