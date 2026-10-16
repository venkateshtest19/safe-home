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
// FAQ Toggle Logic
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close other open FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question span').textContent = '+';
        }
      });
      
      // Toggle current FAQ
      item.classList.toggle('active');
      const icon = item.querySelector('.faq-question span');
      icon.textContent = item.classList.contains('active') ? '-' : '+';
    });
  });
});
// --- FAQ Toggle Logic ---
document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            // Toggle active class
            parent.classList.toggle('active');
            // Change +/- icon
            const span = this.querySelector('span');
            if (parent.classList.contains('active')) {
                span.textContent = '-';
            } else {
                span.textContent = '+';
            }
        });
    });
});
