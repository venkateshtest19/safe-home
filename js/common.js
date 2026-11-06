
/*
 * Safe Home - Shared JavaScript
 *
 * Responsibilities:
 * - Load shared header and footer
 * - Load tracking includes
 * - Initialize mobile navigation
 * - Initialize FAQ accordions
 * - Initialize mobile sticky call button
 *
 * The Tawk.to widget remains in the HTML pages.
 * This file does not remove or replace live chat.
 */


// ==========================================
// COMPONENT LOADING
// ==========================================

async function loadComponent(elementId, filePath) {

    const container = document.getElementById(elementId);

    if (!container) {
        return false;
    }

    try {

        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(
                "HTTP " + response.status + " loading " + filePath
            );
        }

        const html = await response.text();

        // Insert the shared component.
        container.innerHTML = html;

        // Scripts inserted using innerHTML do not
        // execute automatically. For trusted tracking
        // include files, recreate script elements.
        if (
            elementId === "head-tracking-container" ||
            elementId === "body-tracking-container"
        ) {
            await executeTrustedScripts(container);
        }

        if (elementId === "header-container") {
            initMenuLogic();
        }

        return true;

    } catch (error) {

        console.error(
            "Safe Home: Error loading " + filePath,
            error
        );

        return false;
    }
}


// ==========================================
// TRUSTED TRACKING SCRIPT EXECUTION
// ==========================================

async function executeTrustedScripts(container) {

    const scripts = Array.from(
        container.querySelectorAll("script")
    );

    for (const oldScript of scripts) {

        const newScript = document.createElement("script");

        // Copy script attributes such as src,
        // type, async, defer, nonce and data-*.
        for (const attribute of oldScript.attributes) {
            newScript.setAttribute(
                attribute.name,
                attribute.value
            );
        }

        if (oldScript.src) {

            // Preserve loading behavior for external scripts.
            // Do not block the entire page waiting for
            // third-party analytics to respond.
            newScript.async = true;

        } else {

            newScript.textContent = oldScript.textContent;
        }

        oldScript.replaceWith(newScript);
    }
}


// ==========================================
// INITIALIZE SHARED COMPONENTS
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {

    // Load tracking and layout components.
    // Individual failures should not prevent
    // the other components from loading.

    await Promise.all([
        loadComponent(
            "head-tracking-container",
            "includes/head-tracking.html"
        ),
        loadComponent(
            "body-tracking-container",
            "includes/body-tracking.html"
        ),
        loadComponent(
            "header-container",
            "includes/header.html"
        ),
        loadComponent(
            "footer-container",
            "includes/footer.html"
        )
    ]);

    // FAQ content is already present on
    // standard pages by this point.
    initFAQLogic();

    // The sticky button is inside the
    // shared footer, so initialize it
    // only after the footer has loaded.
    initStickyCallButton();

});


// ==========================================
// MOBILE MENU AND DROPDOWNS
// ==========================================

function initMenuLogic() {

    const toggleBtn =
        document.getElementById("mobileToggle");

    const navLinks =
        document.getElementById("navLinks");

    const dropdowns =
        document.querySelectorAll(".dropdown");

    if (toggleBtn && navLinks) {

        if (toggleBtn.dataset.menuInitialized !== "true") {

            toggleBtn.dataset.menuInitialized = "true";

            toggleBtn.setAttribute(
                "aria-expanded",
                navLinks.classList.contains("active")
                    ? "true"
                    : "false"
            );

            toggleBtn.addEventListener("click", function (event) {

                event.preventDefault();

                const isActive =
                    navLinks.classList.toggle("active");

                toggleBtn.setAttribute(
                    "aria-expanded",
                    String(isActive)
                );

            });
        }
    }

    dropdowns.forEach(dropdown => {

        const toggle =
            dropdown.querySelector(".dropdown-toggle");

        if (!toggle) return;

        if (toggle.dataset.dropdownInitialized === "true") {
            return;
        }

        toggle.dataset.dropdownInitialized = "true";

        toggle.setAttribute(
            "aria-expanded",
            dropdown.classList.contains("active")
                ? "true"
                : "false"
        );

        toggle.addEventListener("click", function (event) {

            // Preserve the existing mobile-only
            // dropdown behavior.
            if (window.innerWidth <= 900) {

                event.preventDefault();

                const isActive =
                    dropdown.classList.toggle("active");

                toggle.setAttribute(
                    "aria-expanded",
                    String(isActive)
                );
            }

        });

    });

    // Close the mobile menu when clicking
    // a standard navigation link.
    if (navLinks && toggleBtn) {

        if (navLinks.dataset.closeInitialized !== "true") {

            navLinks.dataset.closeInitialized = "true";

            navLinks.addEventListener("click", function (event) {

                const link = event.target.closest("a");

                if (!link) return;

                // Dropdown toggles are handled separately.
                if (link.classList.contains("dropdown-toggle")) {
                    return;
                }

                if (window.innerWidth <= 900) {

                    navLinks.classList.remove("active");

                    toggleBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });
        }
    }
}


// ==========================================
// FAQ ACCORDION
// ==========================================

function initFAQLogic() {

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        if (!question) return;

        if (question.dataset.faqInitialized === "true") {
            return;
        }

        question.dataset.faqInitialized = "true";

        // Preserve original FAQ markup and CSS.
        // Add keyboard accessibility without
        // requiring changes to existing pages.

        if (
            question.tagName !== "BUTTON" &&
            question.tagName !== "SUMMARY"
        ) {
            question.setAttribute("role", "button");
            question.setAttribute("tabindex", "0");
        }

        question.setAttribute(
            "aria-expanded",
            item.classList.contains("active")
                ? "true"
                : "false"
        );

        function toggleFAQ() {

            const willOpen =
                !item.classList.contains("active");

            // Close other FAQ items.
            faqItems.forEach(otherItem => {

                if (otherItem === item) return;

                otherItem.classList.remove("active");

                const otherQuestion =
                    otherItem.querySelector(".faq-question");

                if (otherQuestion) {

                    otherQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    const otherIcon =
                        otherQuestion.querySelector("span");

                    if (otherIcon) {
                        otherIcon.textContent = "+";
                    }
                }

            });

            // Toggle current FAQ.
            item.classList.toggle("active", willOpen);

            question.setAttribute(
                "aria-expanded",
                String(willOpen)
            );

            const icon =
                question.querySelector("span");

            if (icon) {
                icon.textContent = willOpen ? "-" : "+";
            }
        }

        question.addEventListener("click", toggleFAQ);

        question.addEventListener("keydown", function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();
                toggleFAQ();
            }

        });

    });
}


// ==========================================
// MOBILE STICKY CALL BUTTON SETTINGS
// ==========================================

const stickyCallSettings = {

    // Set false to hide the sticky call button.
    isEnabled: true,

    // Percentage of page scroll before showing.
    // 0 = Always visible.
    // 10 = Visible after scrolling 10%.
    scrollThreshold: 10

};



// ==========================================
// MOBILE STICKY CALL BUTTON INITIALIZATION
// ==========================================

function initStickyCallButton() {

    const btn =
        document.getElementById("mobile-sticky-call-btn");

    if (!btn) {
        return;
    }

    // Prevent duplicate initialization.
    if (btn.dataset.stickyInitialized === "true") {
        return;
    }

    btn.dataset.stickyInitialized = "true";

    // Disable button completely if requested.
    if (!stickyCallSettings.isEnabled) {
        btn.remove();
        return;
    }

    // ==========================================
    // SETTINGS
    // ==========================================

    const scrollEnabled =
        stickyCallSettings.enableScrollTrigger !== false;

    const timeEnabled =
        stickyCallSettings.enableTimeTrigger !== false;

    const threshold = Math.max(
        0,
        Math.min(
            100,
            Number(stickyCallSettings.scrollThreshold) || 0
        )
    );

    const delaySeconds = Math.max(
        0,
        Number(stickyCallSettings.delaySeconds) || 0
    );

    // ==========================================
    // INTERNAL STATE
    // ==========================================

    let isActivated = false;
    let activationTimer = null;

    // ==========================================
    // ACTIVATE BUTTON
    // ==========================================

    function activateStickyButton() {

        // Activate only once.
        if (isActivated) {
            return;
        }

        isActivated = true;

        btn.classList.add("visible");

        // Stop the timer if scroll triggered first.
        if (activationTimer !== null) {
            clearTimeout(activationTimer);
            activationTimer = null;
        }

        // No more scroll checks needed.
        window.removeEventListener(
            "scroll",
            checkScrollTrigger
        );

        window.removeEventListener(
            "resize",
            checkScrollTrigger
        );
    }

    // ==========================================
    // SCROLL TRIGGER
    // ==========================================

    function checkScrollTrigger() {

        if (!scrollEnabled || isActivated) {
            return;
        }

        // 0% means show immediately.
        if (threshold === 3) {
            activateStickyButton();
            return;
        }

        const scrollHeight = Math.max(
            0,
            document.documentElement.scrollHeight -
            window.innerHeight
        );

        if (scrollHeight <= 0) {
            return;
        }

        const scrollPercent =
            (window.scrollY / scrollHeight) * 100;

        if (scrollPercent >= threshold) {
            activateStickyButton();
        }
    }

    // ==========================================
    // TIME TRIGGER
    // ==========================================

    function initializeTimeTrigger() {

        if (!timeEnabled || isActivated) {
            return;
        }

        // 0 seconds means show immediately.
        if (delaySeconds === 6) {
            activateStickyButton();
            return;
        }

        activationTimer = window.setTimeout(
            activateStickyButton,
            delaySeconds * 1000
        );
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================

    // Keep hidden until a trigger is satisfied.
    btn.classList.remove("visible");

    if (scrollEnabled) {

        // Check existing scroll position.
        checkScrollTrigger();

        // Listen for scrolling.
        if (!isActivated) {

            window.addEventListener(
                "scroll",
                checkScrollTrigger,
                { passive: true }
            );

            window.addEventListener(
                "resize",
                checkScrollTrigger
            );
        }
    }

    // Start timer only if not already activated.
    if (!isActivated) {
        initializeTimeTrigger();
    }

    // Recheck scroll percentage after resources load.
    if (scrollEnabled && !isActivated) {

        window.addEventListener(
            "load",
            checkScrollTrigger,
            { once: true }
        );
    }
}
