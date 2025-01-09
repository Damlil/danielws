import { useState, useEffect, useRef } from 'react'; // Importing necessary hooks
import React from 'react'; // Importing React
import '../RespGallery/imageGallery.css'; // Importing the stylesheet
import Camera from './assets/photo-camera.svg'
import Previous from './assets/previous.svg'

import pic3H from '../RespGallery/photos/croatia/croatia3horizontal.jpg';
import pic4H from '../RespGallery/photos/croatia/croatia4horizontal.jpg';
import pic5H from '../RespGallery/photos/croatia/croatia5horizontal.jpg';
import pic6h from '../RespGallery/photos/croatia/croatia6horizontal.jpg';
import pic7 from '../RespGallery/photos/croatia/croatia7.jpg';
import pic8 from '../RespGallery/photos/croatia/croatia8.jpg';
import pic9 from '../RespGallery/photos/croatia/croatia9.jpg';
import pic10 from '../RespGallery/photos/croatia/croatia10.jpg';
import pic11 from '../RespGallery/photos/croatia/croatia11.jpg';
import pic13 from '../RespGallery/photos/croatia/croatia13.jpg';
import pic14 from '../RespGallery/photos/croatia/croatia14.jpg';

// Array of photo imports for dynamic rendering
const photos = [
  pic3H,
  pic4H,
  pic5H,
  pic6h,
  pic14,
  pic7, pic8, pic9,
  pic10, pic11,
  pic13
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
          // Check if the image filename contains 'H' to identify horizontal images
          const isHorizontal = photo.includes('horizontal');
          const photoId = `photo-${index}`; // Unique ID for each photo

          return (
            <div
              className={`photo ${isHorizontal ? 'horizontal-image' : ''} ${inView.includes(photoId) ? 'fade-in' : ''}`}
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

