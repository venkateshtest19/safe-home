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

// Load all components first, THEN initialize scripts that depend on them
document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent('head-tracking-container', 'includes/head-tracking.html');
  await loadComponent('body-tracking-container', 'includes/body-tracking.html');
  await loadComponent('header-container', 'includes/header.html');
  await loadComponent('footer-container', 'includes/footer.html');
  
  // Initialize features ONLY after the footer (and button) are in the DOM
  initFAQLogic();
  initStickyCallButton();
});

function initMenuLogic() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.classList.toggle('active');
    });
  }

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

function initFAQLogic() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherIcon = otherItem.querySelector('.faq-question span');
            if (otherIcon) otherIcon.textContent = '+';
          }
        });
        item.classList.toggle('active');
        const icon = item.querySelector('.faq-question span');
        if (icon) {
          icon.textContent = item.classList.contains('active') ? '-' : '+';
        }
      });
    }
  });
}

// ==========================================
// --- Mobile Sticky Call Button Settings ---
// ==========================================
const stickyCallSettings = {
    isEnabled: true,       // Set to 'false' to completely hide the button
    scrollThreshold: 10    // Set from 0 to 100. 
                           // 0 = Always visible. 10 = Appears after 10% scroll.
};

function initStickyCallButton() {
    const btn = document.getElementById('mobile-sticky-call-btn');
    if (!btn) {
        console.warn("Sticky call button not found in DOM.");
        return;
    }

    // 1. If disabled in settings, remove it completely
    if (!stickyCallSettings.isEnabled) {
        btn.remove();
        return;
    }

    // 2. If threshold is 0, make it always visible immediately
    if (stickyCallSettings.scrollThreshold === 0) {
        btn.classList.add('visible');
        return;
    }

    // 3. Scroll listener for custom threshold
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return; 
        
        const scrollPercent = (window.scrollY / scrollHeight) * 100;
        
        if (scrollPercent >= stickyCallSettings.scrollThreshold) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}
