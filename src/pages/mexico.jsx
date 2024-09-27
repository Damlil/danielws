
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'

import pic1 from '../assets/photos/mexico/mexico1.jpg'
import pic2 from '../assets/photos/mexico/mexico2.jpg'
import pic3 from '../assets/photos/mexico/mexico3.jpg'
import pic4 from '../assets/photos/mexico/mexico4.jpg'
import pic5 from '../assets/photos/mexico/mexico5.jpg'
import pic6 from '../assets/photos/mexico/mexico6.jpg'
import pic7 from '../assets/photos/mexico/mexico7.jpg'
import pic8 from '../assets/photos/mexico/mexico8.jpg'
import pic9 from '../assets/photos/mexico/mexico9.jpg'
import pic10 from '../assets/photos/mexico/mexico10.jpg'
import pic11 from '../assets/photos/mexico/mexico11.jpg'
import pic12 from '../assets/photos/mexico/mexico12.jpg'
import pic13 from '../assets/photos/mexico/mexico13.jpg'
import pic14 from '../assets/photos/mexico/mexico14.jpg'



const IMAGES = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14]



export default function Mexico() {
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