
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'
import RespGallery from '../sections/RespGallery/RespGallery'

import pic1 from '../assets/photos/coffeeBar/coffeeBar1.jpg'
import pic2 from '../assets/photos/coffeeBar/coffeeBar2.jpg'
import pic3 from '../assets/photos/coffeeBar/coffeeBar3.jpg'
import pic4 from '../assets/photos/coffeeBar/coffeeBar4.jpg'
import pic5 from '../assets/photos/coffeeBar/coffeeBar5.jpg'
import pic6 from '../assets/photos/coffeeBar/coffeeBar6.jpg'
import pic7 from '../assets/photos/coffeeBar/coffeeBar7.jpg'
import pic8 from '../assets/photos/coffeeBar/coffeeBar8.jpg'
import pic9 from '../assets/photos/coffeeBar/coffeeBar9.jpg'



const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]



export default function Gallery() {
  return (

    <RespGallery />

    // <div
    // style={{
    //   maxWidth: '1200px',
    //   width: '100%',
    //   margin: '0 auto',

    // }}>

     
      
    // {/* <ImageSlider imageUrls={IMAGES} /> */}

    // </div>
  )
}