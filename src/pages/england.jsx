
import { ImageSlider } from '../sections/ImageSlider/ImageSlider'

import pic1 from '../assets/photos/london/london1.jpg'

const IMAGES = [pic1]



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