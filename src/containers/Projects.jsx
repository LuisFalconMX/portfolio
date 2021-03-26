import React, { useState, useEffect } from 'react'
import Jumbotron from '@components/Jumbotron'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 md:gap-y-6 mt-16 px-4">
        {projects.map((item) => (
          <Project
            key={item.id}
            {...item}
            cover={item.cover.url}
            alt={item.cover.alternativeText}
            variant="card"
          />
        ))}
      </div>
    </>
  )
}

export default Projects
