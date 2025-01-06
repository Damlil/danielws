import { useState } from 'react'
import React from 'react'
import pic1 from '../RespGallery/photos/coffeeBar/coffeeBar1.jpg'
import pic2 from '../RespGallery/photos/coffeeBar/coffeeBar2.jpg'
import pic3 from '../RespGallery/photos/coffeeBar/coffeeBar3.jpg'
import '../RespGallery/imageGallery.css'





export default function RespGallery() {

    // const handleImageClick = (src) => {
    //     // Open the clicked image in a new small window
    //     window.open(src, '_blank', 'width=1200,height=1000');
    //   };


    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle image click
    const handleImageClick = (src) => {
      setSelectedImage(src);
    };
  
    // Function to close the enlarged image
    const closeModal = () => {
      setSelectedImage(null);
    };
    
  return (

    




    <div className='container'>

        <h2 className='title'>GALLERY</h2>

        <div className='photo-gallery'>


         <div className='column'>
            
            <div className='photo'>
            <img src={pic1} alt="" onClick={() => handleImageClick(pic1)} />
            </div>
            <div className='photo'>
            <img src={pic1} alt="" />
            </div>
            <div className='photo'>
            <img src={pic1} alt="" />
            </div>
         </div>


         <div className='column'>

            <div className='photo'>
            <img src={pic2} alt="" />
            </div>
            <div className='photo'>
            <img src={pic2} alt="" />
            </div>
            <div className='photo'>
            <img src={pic2} alt="" />
            </div>
         </div>


         <div className='column'>

            <div className='photo'>
            <img src={pic3} alt="" />
            </div>
            <div className='photo'>
            <img src={pic3} alt="" />
            </div>
            <div className='photo'>
            <img src={pic3} alt="" />
            </div>
         </div>
        

        </div>

      {/* Modal to display enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Enlarged" />
          </div>
        </div>
      )}


    </div>
  )
}
