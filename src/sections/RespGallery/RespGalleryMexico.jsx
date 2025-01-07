import { useState } from 'react'
import React from 'react'
import '../RespGallery/imageGallery.css'
import pic1 from '../RespGallery/photos/mexico/mexico1.jpg'
import pic2 from '../RespGallery/photos/mexico/mexico2.jpg'
import pic3 from '../RespGallery/photos/mexico/mexico3.jpg'
import pic4 from '../RespGallery/photos/mexico/mexico4.jpg'
import pic5 from '../RespGallery/photos/mexico/mexico5.jpg'
import pic6 from '../RespGallery/photos/mexico/mexico6.jpg'
import pic7 from '../RespGallery/photos/mexico/mexico7.jpg'
import pic8 from '../RespGallery/photos/mexico/mexico8.jpg'
import pic9 from '../RespGallery/photos/mexico/mexico9.jpg'
import pic10 from '../RespGallery/photos/mexico/mexico10.jpg'
import pic11 from '../RespGallery/photos/mexico/mexico11.jpg'
import pic12 from '../RespGallery/photos/mexico/mexico12.jpg'
import pic13 from '../RespGallery/photos/mexico/mexico13.jpg'
import pic14 from '../RespGallery/photos/mexico/mexico14.jpg'






export default function RespGallery() {
  
  
  const handleGoBack = () => {
    window.history.back();
  };

  
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


        <div className='titleDiv'>

        <h1 onClick={handleGoBack}>Return</h1>
        <h2 className='title'>GALLERY</h2>
        <h3>ICON</h3>

        </div>

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

         <div className='column2'>
            
            <div className='photo'>
            <img src={pic1} alt="" onClick={() => handleImageClick(pic10)} />
            </div>
            <div className='photo'>
            <img src={pic2} alt="" onClick={() => handleImageClick(pic11)} />
            </div>
            <div className='photo'>
            <img src={pic3} alt="" onClick={() => handleImageClick(pic12)} />
            </div>
         </div>


         <div className='column'>

            <div className='photo'>
            <img src={pic4} alt="" onClick={() => handleImageClick(pic13)} />
            </div>
            <div className='photo'>
            <img src={pic5} alt="" onClick={() => handleImageClick(pic14)} />
            </div>
            {/* <div className='photo'>
            <img src={pic6} alt="" onClick={() => handleImageClick(pic6)} />
            </div> */}
         </div>



        

        </div>









  
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
