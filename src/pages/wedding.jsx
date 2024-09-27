
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
import pic16 from '../assets/photos/wedding/wed16.jpg'
import pic17 from '../assets/photos/wedding/wed17.jpg'
import pic18 from '../assets/photos/wedding/wed18.jpg'
import pic19 from '../assets/photos/wedding/wed19.jpg'
import pic20 from '../assets/photos/wedding/wed20.jpg'
import pic21 from '../assets/photos/wedding/wed21.jpg'
import pic22 from '../assets/photos/wedding/wed22.jpg'
import pic23 from '../assets/photos/wedding/wed23.jpg'
import pic24 from '../assets/photos/wedding/wed24.jpg'
import pic25 from '../assets/photos/wedding/wed25.jpg'
import pic26 from '../assets/photos/wedding/wed26.jpg'
import pic27 from '../assets/photos/wedding/wed27.jpg'
import pic28 from '../assets/photos/wedding/wed28.jpg'
import pic29 from '../assets/photos/wedding/wed29.jpg'
import pic30 from '../assets/photos/wedding/wed30.jpg'
import pic31 from '../assets/photos/wedding/wed31.jpg'
import pic32 from '../assets/photos/wedding/wed32.jpg'
import pic33 from '../assets/photos/wedding/wed33.jpg'
import pic34 from '../assets/photos/wedding/wed34.jpg'
import pic35 from '../assets/photos/wedding/wed35.jpg'
import pic36 from '../assets/photos/wedding/wed36.jpg'
import pic37 from '../assets/photos/wedding/wed37.jpg'
import pic38 from '../assets/photos/wedding/wed38.jpg'
import pic39 from '../assets/photos/wedding/wed39.jpg'
import pic40 from '../assets/photos/wedding/wed40.jpg'
import pic41 from '../assets/photos/wedding/wed41.jpg'
import pic42 from '../assets/photos/wedding/wed42.jpg'
import pic43 from '../assets/photos/wedding/wed43.jpg'
import pic44 from '../assets/photos/wedding/wed44.jpg'
import pic45 from '../assets/photos/wedding/wed45.jpg'
import pic46 from '../assets/photos/wedding/wed46.jpg'
import pic47 from '../assets/photos/wedding/wed47.jpg'
import pic48 from '../assets/photos/wedding/wed48.jpg'
import pic49 from '../assets/photos/wedding/wed49.jpg'
import pic50 from '../assets/photos/wedding/wed50.jpg'
import pic51 from '../assets/photos/wedding/wed51.jpg'
import pic52 from '../assets/photos/wedding/wed52.jpg'
import pic53 from '../assets/photos/wedding/wed53.jpg'
import pic54 from '../assets/photos/wedding/wed54.jpg'



const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,pic12,pic13,pic14,
  pic15,pic16,pic17,pic18,pic19,pic20,pic21,pic22,pic23,pic24,pic25,pic26,pic27,pic28,pic29,pic30,pic31,pic32,pic33,pic34,pic35,pic36,pic37,pic38,pic39,pic40,pic41,
  pic42,pic43,pic44,pic45,pic46,pic47,pic48,pic49,pic50,pic51,pic52,pic53,pic54
 ]



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