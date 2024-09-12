import styles from './HeroStyles.module.css'
import heroImg from '../../assets/heroDan.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg' 
import youtubeDark from '../../assets/youtube-dark.svg';
import youtubeLight from '../../assets/youtube-light.svg';
import instagramLight from '../../assets/instagram.svg';
import instagramDark from '../../assets/instagramDark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext'; 


function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcon = theme === 'light' ? instagramLight : instagramLight;
    const youtubeIcon = theme === 'light' ? youtubeDark : youtubeLight;
    // const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
 
  return ( 
  <section id='hero' className={styles.container}>

        <div className={styles.colorModeContainer}>

            <img className={styles.hero} src={heroImg} 
            alt="Profile picture of Daniel WS" />
           
            <img className={styles.colorMode}
            src={themeIcon}
            alt='Color Mode Icon'
            onClick={toggleTheme}
            />

         </div>

         <div className={styles.info}>

            <h1>
                Daniel
                <br />
                Pettersson
            </h1>

            <h2>Freelance Media</h2>

            <span>
                <a href="https://www.instagram.com/dannemanno/" target="_blank">
                <img src={instagramIcon} alt="Instagram icon" />
                </a>
                
                <a href="https://www.youtube.com/@Dannemanno" target="_blank">
                <img src={youtubeIcon} alt="YouTube Icon" />
                </a>

                {/* <a href="https://youtube.com/" target="_blank">
                <img src={linkedinIcon} alt="Youtube icon" />
                </a> */}
            </span>

            <p className={styles.description}>With a passion for photography & videos!</p>

            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
         </div>

    </section>
    );
}

export default Hero;