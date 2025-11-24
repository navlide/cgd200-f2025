/*
*********************************
 Subject: CGD 200 (Fall 2025)
 Author: Edilvan E. Falcon
 Instructor: David Kazaryan
 Date Created: 2025.11.17
 Description: Assignment No. 2 
 
 Make up a product and create a page for it. You can use AI to generate the images of the product and come up with text content.
 Make sure the website is responsive (works well on desktop and mobile)
 Include a dropdown navigation
 Use either CSS flexbox or Grid or both
 Use google fonts
*********************************
*/

// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinksWrapper = document.querySelector(".nav-links-wrapper");

navToggle.addEventListener("click", () => {
navToggle.classList.toggle("open");
navLinksWrapper.classList.toggle("open");
});

// Close nav on link click (mobile)
document.querySelectorAll(".nav-link, .dropdown-link").forEach((link) => {
link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
    navToggle.classList.remove("open");
    navLinksWrapper.classList.remove("open");
    }
});
});

// Scroll reveal animation using IntersectionObserver
const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // animate once
    }
    });
},
{
    threshold: 0.15,
}
);

document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
observer.observe(el);
});