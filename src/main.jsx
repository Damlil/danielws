import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './common/ThemeContext.jsx'



document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".photo");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Stop observing once the image has faded in
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  photos.forEach((photo) => {
    observer.observe(photo);
  });
});




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
