import { useState, useEffect, useRef } from 'react'; // Importing necessary hooks
import React from 'react'; // Importing React
import '../RespGallery/imageGallery.css'; // Importing the stylesheet
import Camera from './assets/photo-camera.svg'
import Previous from './assets/previous.svg'

// Import all images into an array for easier use
import pic1 from '../RespGallery/photos/mexico/mexico1.jpg';
import pic2 from '../RespGallery/photos/mexico/mexico2.jpg';
import pic3 from '../RespGallery/photos/mexico/mexico3.jpg';
import pic4 from '../RespGallery/photos/mexico/mexico4.jpg';
import pic5 from '../RespGallery/photos/mexico/mexico5.jpg';
import pic6 from '../RespGallery/photos/mexico/mexico6.jpg';
import pic7 from '../RespGallery/photos/mexico/mexico7.jpg';
import pic8 from '../RespGallery/photos/mexico/mexico8.jpg';
import pic9 from '../RespGallery/photos/mexico/mexico9.jpg';
import pic10 from '../RespGallery/photos/mexico/mexico10.jpg';
import pic11 from '../RespGallery/photos/mexico/mexico11.jpg';
import pic12 from '../RespGallery/photos/mexico/mexico12.jpg';
import pic13 from '../RespGallery/photos/mexico/mexico13.jpg';
import pic14 from '../RespGallery/photos/mexico/mexico14.jpg';

// Array of photo imports for dynamic rendering
const photos = [
  pic1, pic2, pic3, pic4, pic5, pic6,
  pic7, pic8, pic9, pic10, pic11, pic12,
  pic13, pic14,
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
          const isHorizontal = photo.includes('H');
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

