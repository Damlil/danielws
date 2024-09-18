import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';



function Skills() {


  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

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