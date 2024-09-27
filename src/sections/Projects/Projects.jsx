import styles from './ProjectsStyles.module.css'
import wedding from '../../assets/photos/wedding/wed1.jpg'
import mexico from '../../assets/photos/mexico/mexico1.jpg'
import bali from '../../assets/photos/indonesia/bali1.jpg'
import london from '../../assets/photos/london/london1.jpg'


import ProjectCard from '../../common/ProjectCard';



function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Albums</h1>
        
        <div className={styles.projectsContainer}>

            <ProjectCard src={wedding} 
            h3='Wedding' 
            p='Mothers Wedding 2024'
            link='wedding'  
            
            />

            <ProjectCard src={mexico} 
            h3='Mexico' 
            p='Best of Mexico 2024' 
             link='mexico'
            />

            <ProjectCard src={bali} 
            h3='Bali' 
            p='Best of Bali 2023' 
             link='bali'
            />

            <ProjectCard src={london} 
            h3='England' 
            p='Best of Lodon 2024'
            link ='london'
            />

        </div>

    </section>
  )
}

export default Projects;