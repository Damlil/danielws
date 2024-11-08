
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'

import pic1 from '../assets/photos/croatia/croatia1.jpg'
import pic2 from '../assets/photos/croatia/croatia2.jpg'
import pic3 from '../assets/photos/croatia/croatia3.jpg'
import pic4 from '../assets/photos/croatia/croatia4.jpg'
import pic5 from '../assets/photos/croatia/croatia5.jpg'
import pic6 from '../assets/photos/croatia/croatia6.jpg'
import pic7 from '../assets/photos/croatia/croatia7.jpg'
import pic8 from '../assets/photos/croatia/croatia8.jpg'
import pic9 from '../assets/photos/croatia/croatia9.jpg'
import pic10 from '../assets/photos/croatia/croatia10.jpg'
import pic11 from '../assets/photos/croatia/croatia11.jpg'
import pic12 from '../assets/photos/croatia/croatia12.jpg'
import pic13 from '../assets/photos/croatia/croatia13.jpg'
import pic14 from '../assets/photos/croatia/croatia14.jpg'

const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,pic12,pic13,pic14]



export default function Korcula() {
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