import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion";
import DOMPurify from 'dompurify';

  
import SubHero from '../../components/02-subhero/SubHero'
import { myProjects } from "../../data/myProjects";
import './projectDetails.css'
export default function projectDetails() {
    const params = useParams()
    const { projectId } = params

    const project = myProjects.find((proj)=> proj.id == projectId) || {}
    console.log('project',project)
    console.log('projectId', projectId)

 
      // Sanitize HTML content using DOMPurify
  const sanitizedHTML = DOMPurify.sanitize(project.longDescription);

  useEffect(()=>{
        // to go up of the page
    window.scrollTo(0, 0);
  },[])
    return (
        <section className="details ">
            <SubHero />

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="title"
            >
                {project.title}
            </motion.h1>

      

            <div  className="sub-title" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}  />
           
            <div className="all-icons flex">
                {
                    project.github !='' && 
                    <a href={project.github} target='_blank'>
                        <div className="icon icon-github"></div>
                    </a> 
                }
               {
                    project.link !='' &&  <div className="icon icon-link"></div>
                }

            </div>
        </section>



    )
}
