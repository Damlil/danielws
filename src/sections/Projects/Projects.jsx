import styles from './ProjectsStyles.module.css'
import coffeeBar from '../../assets/photos/coffeeBar/coffeeBar1.jpg'
import mexico from '../../assets/photos/mexico/mexico1.jpg'
import bali from '../../assets/photos/indonesia/bali1.jpg'
import london from '../../assets/photos/london/london1.jpg'
import korcula from '../../assets/photos/croatia/croatia1.jpg'
import { ArrowBigDown} from 'lucide-react'

import ProjectCard from '../../common/ProjectCard';




function Projects() {
  return (
    <section id='projects' className={styles.container}>

          {/* <h5><ArrowBigDown size={60}/></h5> */}
        <h1 className='sectionTitle'>Albums</h1>
      
        
        <div className={styles.projectsContainer}>

       
        

            <ProjectCard src={coffeeBar} 
            h4='Coffee & food' 
            h5='Commercial'
            link='coffeeBar'  
            
            />

            <ProjectCard src={mexico} 
            h4='Mexico 24' 
             h6='Personal'
            // p='Best of Mexico 2024' 
             link='mexico'
            />

            <ProjectCard src={bali} 
            h4='Bali 23' 
            h6='Personal'
            // p='Best of Bali 2023' 
             link='bali'
            />

            <ProjectCard src={london} 
            h4='England 24' 
            h6='Personal'
            // p='Best of Lodon 2024'
            link ='london'
            />

            <ProjectCard src={korcula} 
            h4='Croatia 24' 
            h6='Personal'
            // p='Best of Lodon 2024'
            link ='korcula'
            />

        </div>

    </section>
  )
}

export default Projects;