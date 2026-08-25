"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll(".fade-up, .stagger");
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          document.documentElement.dataset.activeSection = id;

          navLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${id}`;
            link.toggleAttribute("aria-current", active);
          });
        });
      },
      { threshold: 0.52 }
    );

    const updateScrollState = () => {
      const pastOverview = window.scrollY > Math.max(window.innerHeight * 0.32, 180);
      document.documentElement.classList.toggle("has-scrolled", window.scrollY > 24);
      document.documentElement.classList.toggle("is-past-overview", pastOverview);
    };

    const closeMobileNav = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");
      const details = target.closest("details");
      if (link && details instanceof HTMLDetailsElement) {
        details.open = false;
      }
    };

    revealTargets.forEach((target) => revealObserver.observe(target));
    sections.forEach((section) => sectionObserver.observe(section));
    document.addEventListener("click", closeMobileNav);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      document.removeEventListener("click", closeMobileNav);
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return null;
}
