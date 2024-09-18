import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>

        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Lightroom' />
            <SkillList src={checkMarkIcon} skill='Photoshop' />
            <SkillList src={checkMarkIcon} skill='DaVinci Resolve' />

         </div>
         
         <hr />

         <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML & CSS' />
            <SkillList src={checkMarkIcon} skill='Javascript & React' />

         </div>

         <hr />

    

    </section>
  )
};

export default Skills;