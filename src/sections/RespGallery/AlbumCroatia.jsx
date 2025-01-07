
import { useState } from 'react'; // Importing the useState hook for managing state
import React from 'react'; // Importing React
import '../RespGallery/imageGallery.css'; // Importing the stylesheet

// Import all images into an array for easier use
// import pic1 from '../RespGallery/photos/croatia/croatia1.jpg';
// import pic2 from '../RespGallery/photos/croatia/croatia2.jpg';
import pic3H from '../RespGallery/photos/croatia/croatia3H.jpg';
import pic4H from '../RespGallery/photos/croatia/croatia4H.jpg';
import pic5H from '../RespGallery/photos/croatia/croatia5H.jpg';
import pic6H from '../RespGallery/photos/croatia/croatia6H.jpg';
import pic7 from '../RespGallery/photos/croatia/croatia7.jpg';
import pic8 from '../RespGallery/photos/croatia/croatia8.jpg';
import pic9 from '../RespGallery/photos/croatia/croatia9.jpg';
import pic10 from '../RespGallery/photos/croatia/croatia10.jpg';
import pic11 from '../RespGallery/photos/croatia/croatia11.jpg';
// import pic12 from '../RespGallery/photos/croatia/croatia12.jpg';
import pic13 from '../RespGallery/photos/croatia/croatia13.jpg';
import pic14 from '../RespGallery/photos/croatia/croatia14.jpg';

// Array of photo imports for dynamic rendering
const photos = [

pic3H,
pic4H,
pic5H,
pic6H,

pic14,
pic7,pic8,pic9,
pic10,pic11,

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

  return (
    <div className="container">
      {/* Header with navigation and title */}
      <div className="titleDiv">
        <h1 onClick={handleGoBack}>Return</h1> {/* Go back button */}
        <h2 className="title">Croatia</h2> {/* Gallery title */}
        <h3>ICON</h3> {/* Placeholder for an icon */}
      </div>

      {/* Photo gallery */}
      <div className="photo-gallery">
        {/* Loop through the photos array and render each image */}
        {photos.map((photo, index) => {
          // Check if the image filename contains 'H' to identify horizontal images
          const isHorizontal = photo.includes('H');
          
          return (
            <div className={`photo ${isHorizontal ? 'horizontal-image' : ''}`} key={index}>
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






