import { useState, useEffect, useRef } from 'react'; // Importing necessary hooks
import React from 'react'; // Importing React
import '../RespGallery/imageGallery.css'; // Importing the stylesheet
import Camera from './assets/photo-camera.svg'; // Keeping Camera as an image import

import pic1 from '../RespGallery/photos/wedding/wedding1horizontal.jpg';
import pic2 from '../RespGallery/photos/wedding/wedding2horizontal.jpg';
import pic3 from '../RespGallery/photos/wedding/wedding3horizontal.jpg';
import pic4 from '../RespGallery/photos/wedding/wedding4bigshot.jpg';
import pic9 from '../RespGallery/photos/wedding/wedding9horizontal.jpg';
import pic10 from '../RespGallery/photos/wedding/wedding10horizontal.jpg';
import pic11 from '../RespGallery/photos/wedding/wedding11horizontal.jpg';
import pic12 from '../RespGallery/photos/wedding/wedding12bigshot.jpg';
import pic13 from '../RespGallery/photos/wedding/wedding13ultrawide.jpg';
import pic14H from '../RespGallery/photos/wedding/wedding14horizontal.jpg';
import pic15H from '../RespGallery/photos/wedding/wedding15horizontal.jpg';
import pic16H from '../RespGallery/photos/wedding/wedding16horizontal.jpg';
import pic17H from '../RespGallery/photos/wedding/wedding17horizontal.jpg';
import pic18H from '../RespGallery/photos/wedding/wedding18horizontal.jpg';
import pic19 from '../RespGallery/photos/wedding/wedding19.jpg';
import pic20H from '../RespGallery/photos/wedding/wedding20horizontal.jpg';
import pic21 from '../RespGallery/photos/wedding/wedding21bigshot.jpg';
import pic22 from '../RespGallery/photos/wedding/wedding22.jpg';
import pic23H from '../RespGallery/photos/wedding/wedding23ultrawide.jpg';
import pic24H from '../RespGallery/photos/wedding/wedding24horizontal.jpg';
import pic25 from '../RespGallery/photos/wedding/wedding25.jpg';

import pic27H from '../RespGallery/photos/wedding/wedding27horizontal.jpg';
import pic28H from '../RespGallery/photos/wedding/wedding28ultrawide.jpg';

import pic30 from '../RespGallery/photos/wedding/wedding30bigshot.jpg';
import pic31 from '../RespGallery/photos/wedding/wedding31.jpg';









// Array of photo imports for dynamic rendering
const photos = [
pic1,pic4,pic2, pic12,pic3,
,pic9,
pic10,pic11,
pic13,pic14H,pic15H,
pic16H,pic17H,pic18H,pic21,
pic19,pic22,pic20H,pic24H,
pic23H,pic30, pic25,pic31,
pic27H,
pic28H
];

export default function RespGallery() {
    // Function to navigate back to the previous page
    const handleGoBack = () => {
      window.history.back();
    };
  
    // State to track the currently selected image for the modal
    const [selectedImage, setSelectedImage] = useState(null);
  
    // Function to handle clicking on an image
    const handleImageClick = (src) => {
      setSelectedImage(src); // Set the clicked image as the selected image
    };
  
    // Function to close the modal by resetting the selected image
    const closeModal = () => {
      setSelectedImage(null);
    };
  
    // Function to add fade-in effect when images are in the viewport
    const [inView, setInView] = useState([]);
  
    // Intersection observer for fade-in effect
    const observer = useRef(
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => [...prev, entry.target.id]); // Add image id to state when in view
          }
        });
      }, { threshold: 0.1 })
    );
  
    // Attach observer to each image once the component mounts
    useEffect(() => {
      const images = document.querySelectorAll('.photo');
      images.forEach((image) => observer.current.observe(image));
  
      return () => {
        images.forEach((image) => observer.current.unobserve(image)); // Clean up observer
      };
    }, []);
  
    return (
      <div className="container">
        {/* Header with navigation and title */}
        <div className="titleDiv">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="previous"
            onClick={handleGoBack}
          >
            <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
          </svg>
          <img className="camera" src={Camera} alt="" />
        </div>
  
        {/* Photo gallery */}
        <div className="photo-gallery">
          {/* Loop through the photos array and render each image */}
          {photos.map((photo, index) => {
            // Check if the image filename contains 'horizontal', 'bigshot', or 'ultrawide'
            const isHorizontal = photo.includes('horizontal');
            const isBigshot = photo.includes('bigshot');
            const isUltrawide = photo.includes('ultrawide');
            const photoId = `photo-${index}`; // Unique ID for each photo
  
            return (
              <div
                className={`photo 
                  ${isHorizontal ? 'horizontal-image' : ''} 
                  ${isBigshot ? 'bigshot-image' : ''} 
                  ${isUltrawide ? 'ultrawide-image' : ''} 
                  ${inView.includes(photoId) ? 'fade-in' : ''}`}
                key={index}
                id={photoId} // Set the unique id
              >
                <img
                  src={photo} // Image source
                  alt={`Gallery ${index + 1}`} // Alt text for accessibility
                  onClick={() => handleImageClick(photo)} // Open modal on click
                />
              </div>
            );
          })}
        </div>
  
        {/* Modal for displaying the enlarged image */}
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <img
                src={selectedImage} // Show the selected image
                alt="Enlarged" // Alt text for accessibility
              />
            </div>
          </div>
        )}
      </div>
    );
  }
  