// js/common.js

async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
    
    if(elementId === 'header-container') {
      initMenuLogic();
    }
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent('head-tracking-container', 'includes/head-tracking.html');
  await loadComponent('body-tracking-container', 'includes/body-tracking.html');
  await loadComponent('header-container', 'includes/header.html');
  await loadComponent('footer-container', 'includes/footer.html');
});

function initMenuLogic() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle Main Menu
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.classList.toggle('active');
    });
  }

  // Toggle Dropdowns on Mobile
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if(toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
}

// --- Unified FAQ Toggle Logic ---
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        // Close other open FAQs for a cleaner look
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherIcon = otherItem.querySelector('.faq-question span');
            if (otherIcon) otherIcon.textContent = '+';
          }
        });
        
        // Toggle current FAQ
        item.classList.toggle('active');
        const icon = item.querySelector('.faq-question span');
        if (icon) {
          icon.textContent = item.classList.contains('active') ? '-' : '+';
        }
      });
    }
  });
});
