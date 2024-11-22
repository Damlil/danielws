import styles from './HeroStyles.module.css'
import heroImg from '../../assets/profileDan.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg' 
import youtubeDark from '../../assets/youtube-dark.svg';
import youtubeLight from '../../assets/youtube-light.svg';
import instagramLight from '../../assets/instagram.svg';
import CV from '../../assets/dancv.pdf';
import { useTheme } from '../../common/ThemeContext'; 


function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcon = theme === 'light' ? instagramLight : instagramLight;
    const youtubeIcon = theme === 'light' ? youtubeDark : youtubeLight;

 
  return ( 

    
   
        <section id='hero' className={styles.container}>


        <div  className={styles.colorModeContainer}  >

            <img  className={styles.hero} src={heroImg} 
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

                <img src={instagramIcon} alt="Instagram icon" 
                
              
                
                />
                </a>
                
                <a href="https://www.youtube.com/@Dannemanno" target="_blank">
                <img src={youtubeIcon} alt="YouTube Icon" 
                
                
        
                
                />
                </a>

        
            </span>

            <p className={styles.description}>Trying to capture<br></br> the best moments of life</p>

            <a 
            href={CV}
             download>
                <button className='hover'>Click to download CV</button>
            </a>
         </div>




   


    </section>



    


    );
}

export default Hero;


