
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'

import pic1 from '../assets/photos/wedding/wed1.jpg'
import pic2 from '../assets/photos/wedding/wed2.jpg'
import pic3 from '../assets/photos/wedding/wed3.jpg'
import pic4 from '../assets/photos/wedding/wed4.jpg'

const IMAGES = [pic1, pic2, pic3, pic4]



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