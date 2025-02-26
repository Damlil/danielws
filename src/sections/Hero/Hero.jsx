import styles from './HeroStyles.module.css'
import heroImg from '../../assets/profileDan.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg' 
import youtubeDark from '../../assets/youtube-dark.svg';
import youtubeLight from '../../assets/youtube-light.svg';
import instagramLight from '../../assets/instagram.svg';
import { useTheme } from '../../common/ThemeContext'; 


function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcon = theme === 'light' ? instagramLight : instagramLight;
    const youtubeIcon = theme === 'light' ? youtubeDark : youtubeLight;

 
  return ( 

    
   
        <section id='hero' className={styles.container}>


        <div  className={styles.colorModeContainer}  >


            <div className='heroColorMode'>
            <img  className={styles.hero} src={heroImg} 
              alt="Profile picture of Daniel WS" />
           

            <img className={styles.colorMode}
            src={themeIcon}
            alt='Color Mode Icon'
            onClick={toggleTheme}
            />
            </div>

         </div>

         <div className={styles.info}>

            <h1>
                Daniel
                <br />
                Pettersson
            </h1>

            <h2>The portfolio</h2>

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
{/* 
            <p className={styles.description}>some text here<br></br>and maybe here</p> */}

           
         </div>




   


    </section>



    


    );
}

export default Hero;


