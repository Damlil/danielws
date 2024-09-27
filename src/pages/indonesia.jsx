
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'

import pic1 from '../assets/photos/indonesia/bali1.jpg'
import pic2 from '../assets/photos/indonesia/bali2.jpg'
import pic3 from '../assets/photos/indonesia/bali3.jpg'
import pic4 from '../assets/photos/indonesia/bali4.jpg'
import pic5 from '../assets/photos/indonesia/bali5.jpg'
import pic6 from '../assets/photos/indonesia/bali6.jpg'
import pic7 from '../assets/photos/indonesia/bali7.jpg'
import pic8 from '../assets/photos/indonesia/bali8.jpg'
import pic9 from '../assets/photos/indonesia/bali9.jpg'
import pic10 from '../assets/photos/indonesia/bali10.jpg'
import pic11 from '../assets/photos/indonesia/bali11.jpg'
import pic12 from '../assets/photos/indonesia/bali12.jpg'
import pic13 from '../assets/photos/indonesia/bali13.jpg'
import pic14 from '../assets/photos/indonesia/bali14.jpg'
import pic15 from '../assets/photos/indonesia/bali15.jpg'
import pic16 from '../assets/photos/indonesia/bali16.jpg'
import pic17 from '../assets/photos/indonesia/bali17.jpg'
import pic18 from '../assets/photos/indonesia/bali18.jpg'
import pic19 from '../assets/photos/indonesia/bali19.jpg'
import pic20 from '../assets/photos/indonesia/bali20.jpg'



const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,pic12,pic13,pic14,
  pic15,pic16,pic17,pic18,pic19,pic20]









export default function Bali() {
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