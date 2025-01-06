import { useState } from 'react'
import React from 'react'
import pic1 from '../RespGallery/photos/coffeeBar/coffeeBar1.jpg'
import pic2 from '../RespGallery/photos/coffeeBar/coffeeBar2.jpg'
import pic3 from '../RespGallery/photos/coffeeBar/coffeeBar3.jpg'
import pic4 from '../RespGallery/photos/coffeeBar/coffeeBar4.jpg'
import pic5 from '../RespGallery/photos/coffeeBar/coffeeBar5.jpg'
import pic6 from '../RespGallery/photos/coffeeBar/coffeeBar6.jpg'
import pic7 from '../RespGallery/photos/coffeeBar/coffeeBar7.jpg'
import pic8 from '../RespGallery/photos/coffeeBar/coffeeBar8.jpg'
import pic9 from '../RespGallery/photos/coffeeBar/coffeeBar9.jpg'
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
            <img src={pic2} alt="" onClick={() => handleImageClick(pic2)} />
            </div>
            <div className='photo'>
            <img src={pic3} alt="" onClick={() => handleImageClick(pic3)} />
            </div>
         </div>


         <div className='column2'>

            <div className='photo'>
            <img src={pic4} alt="" onClick={() => handleImageClick(pic4)} />
            </div>
            <div className='photo'>
            <img src={pic5} alt="" onClick={() => handleImageClick(pic5)} />
            </div>
            <div className='photo'>
            <img src={pic6} alt="" onClick={() => handleImageClick(pic6)} />
            </div>
         </div>


         <div className='column'>

            <div className='photo'>
            <img src={pic7} alt="" onClick={() => handleImageClick(pic7)} />
            </div>
            <div className='photo'>
            <img src={pic8} alt="" onClick={() => handleImageClick(pic8)} />
            </div>
            <div className='photo'>
            <img src={pic9} alt="" onClick={() => handleImageClick(pic9)} />
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
