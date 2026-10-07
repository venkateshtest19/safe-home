// js/common.js

// 1. Function to load HTML files into the page
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// 2. Load Header, Footer, and Tracking Codes on page load
document.addEventListener("DOMContentLoaded", async () => {
  // Load Head and Body tracking
  await loadComponent('head-tracking-container', 'includes/head-tracking.html');
  await loadComponent('body-tracking-container', 'includes/body-tracking.html');
  
  // Load Header and Footer
  await loadComponent('header-container', 'includes/header.html');
  await loadComponent('footer-container', 'includes/footer.html');

  // 3. Initialize Mobile Menu Toggle
  initMobileMenu();
});

// 4. Mobile Menu Logic
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}
