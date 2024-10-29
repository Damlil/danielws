
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'

import pic1 from '../assets/photos/wedding/wed1.jpg'
import pic2 from '../assets/photos/wedding/wed2.jpg'
import pic3 from '../assets/photos/wedding/wed3.jpg'
import pic4 from '../assets/photos/wedding/wed4.jpg'
import pic5 from '../assets/photos/wedding/wed5.jpg'
import pic6 from '../assets/photos/wedding/wed6.jpg'
import pic7 from '../assets/photos/wedding/wed7.jpg'
import pic8 from '../assets/photos/wedding/wed8.jpg'
import pic9 from '../assets/photos/wedding/wed9.jpg'
import pic10 from '../assets/photos/wedding/wed10.jpg'
import pic11 from '../assets/photos/wedding/wed11.jpg'
import pic12 from '../assets/photos/wedding/wed12.jpg'
import pic13 from '../assets/photos/wedding/wed13.jpg'
import pic14 from '../assets/photos/wedding/wed14.jpg'
import pic15 from '../assets/photos/wedding/wed15.jpg'



const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,pic12,pic13,pic14,
  pic15]



export default function Gallery() {
  return (
    <div
    style={{
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',

    }}>

    <ImageSlider imageUrls={IMAGES} />

    </div>
  )
}