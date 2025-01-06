import React from 'react'







function ProjectCard({ src, link, h4,h5, h6, p, b }) {




  return (

    
            <a href={link} target=''>
            <img className='hover' src={src} alt={`${h4} logo`} />

    
            <h4>{h4}</h4>
            <h5>{h5}</h5>
            <h6>{h6}</h6>
            
            <p>{p}</p>

</a>
  )
}

export default ProjectCard;