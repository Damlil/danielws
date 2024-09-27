import React from 'react'







function ProjectCard({ src, link, h3, p, b }) {




  return (

    
            <a href={link} target=''>
            <img className='hover' src={src} alt={`${h3} logo`} />

    
            <h3>{h3}</h3>
            <p>{p}</p>

</a>
  )
}

export default ProjectCard;