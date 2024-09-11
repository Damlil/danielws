import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        
        <div className={styles.projectsContainer}>

            <ProjectCard src={viberr} link='https://youtu.be/jk_LnLu2FUE?si=rlcp4o2ufLJeYTQ5' 
            h3='Viberr' 
            p='Streaming App'
            />

            <ProjectCard src={freshBurger} link='https://youtu.be/jk_LnLu2FUE?si=rlcp4o2ufLJeYTQ5' 
            h3='Fresh Burger' 
            p='Fast Food App'
            />

            <ProjectCard src={hipsster} link='https://youtu.be/jk_LnLu2FUE?si=rlcp4o2ufLJeYTQ5' 
            h3='Hipsster' 
            p='Glasses shop'
            />

            <ProjectCard src={fitLift} link='https://youtu.be/jk_LnLu2FUE?si=rlcp4o2ufLJeYTQ5' 
            h3='Gym' 
            p='Crossfit Gym'
            />

        </div>

    </section>
  )
}

export default Projects;