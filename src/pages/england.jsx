
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
import pic16 from '../assets/photos/london/london16.jpg'
import pic17 from '../assets/photos/london/london17.jpg'
import pic18 from '../assets/photos/london/london18.jpg'
import pic19 from '../assets/photos/london/london19.jpg'
import pic20 from '../assets/photos/london/london20.jpg'
import pic21 from '../assets/photos/london/london21.jpg'
import pic22 from '../assets/photos/london/london22.jpg'
import pic23 from '../assets/photos/london/london23.jpg'
import pic24 from '../assets/photos/london/london24.jpg'
import pic25 from '../assets/photos/london/london25.jpg'
import pic26 from '../assets/photos/london/london26.jpg'
import pic27 from '../assets/photos/london/london27.jpg'
import pic28 from '../assets/photos/london/london28.jpg'
import pic29 from '../assets/photos/london/london29.jpg'
import pic30 from '../assets/photos/london/london30.jpg'
import pic31 from '../assets/photos/london/london31.jpg'
import pic32 from '../assets/photos/london/london32.jpg'
import pic33 from '../assets/photos/london/london33.jpg'
import pic34 from '../assets/photos/london/london34.jpg'
import pic35 from '../assets/photos/london/london35.jpg'
import pic36 from '../assets/photos/london/london36.jpg'

const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,pic12,pic13,pic14,
  pic15,pic16,pic17,pic18,pic19,pic20,pic21,pic22,pic23,pic24,pic25,pic26,pic27,pic28,pic29,pic30,pic31,pic32,pic33,pic34,pic35,pic36]



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