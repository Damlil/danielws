import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg' 
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext'; 


function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
 
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
                <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="Twitter icon" />
                </a>
                
                <a href="https://instagram.com/" target="_blank">
                <img src={githubIcon} alt="Instagram icon" />
                </a>

                <a href="https://youtube.com/" target="_blank">
                <img src={linkedinIcon} alt="Youtube icon" />
                </a>
            </span>

            <p className={styles.description}>With a passion for video editing and creating memories!</p>

            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
         </div>

    </section>
    );
}

export default Hero;