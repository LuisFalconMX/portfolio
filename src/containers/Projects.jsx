import React, { useState, useEffect } from 'react'
import Jumbotron from '@components/Jumbotron'
import ProjectGrid from '@components/ProjectGrid'
import Project from '@components/Project'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.API_ENDPOINT}/projects?_sort=date:DESC`)
      .then(({ data }) => {
        let count = 0
        setProjects(data.filter(() => count++ < 12))
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <Jumbotron />
      <ProjectGrid>
        {projects.map((item) => (
          <Project
            key={item.id}
            {...item}
            cover={item.cover.url}
            alt={item.cover.alternativeText}
            variant="card"
          />
        ))}
      </ProjectGrid>
    </>
  )
}

export default Projects
