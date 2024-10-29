
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'

import pic1 from '../assets/photos/london/london1.jpg'
import pic2 from '../assets/photos/london/london2.jpg'
import pic3 from '../assets/photos/london/london3.jpg'
import pic4 from '../assets/photos/london/london4.jpg'
import pic5 from '../assets/photos/london/london5.jpg'
import pic6 from '../assets/photos/london/london6.jpg'
import pic7 from '../assets/photos/london/london7.jpg'
import pic8 from '../assets/photos/london/london8.jpg'
import pic9 from '../assets/photos/london/london9.jpg'
import pic10 from '../assets/photos/london/london10.jpg'
import pic11 from '../assets/photos/london/london11.jpg'
import pic12 from '../assets/photos/london/london12.jpg'
import pic13 from '../assets/photos/london/london13.jpg'
import pic14 from '../assets/photos/london/london14.jpg'
import pic15 from '../assets/photos/london/london15.jpg'

const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,pic12,pic13,pic14,
  pic15]



export default function London() {
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