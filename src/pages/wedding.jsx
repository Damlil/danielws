
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'

import pic1 from '../assets/photos/wedding/gal11A7408507.jpg'
import pic2 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic3 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic4 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic5 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic6 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic7 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic8 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic9 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic10 from '../assets/photos/wedding/gal11A7408591-2.jpg'
import pic11 from '../assets/photos/wedding/gal11A7408591-2.jpg'


const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11]



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