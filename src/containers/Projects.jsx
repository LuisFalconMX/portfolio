import React from 'react'
import Jumbotron from '@components/Jumbotron'
import ProjectCard from '@components/ProjectCard'

const Projects = () => (
  <>
    <Jumbotron />
    <div className="grid grid-cols-3 gap-1 mt-16 px-2">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </>
)

export default Projects
