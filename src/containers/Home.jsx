import React, { useState, useEffect } from 'react'
import { Download, ChevronRight, GitHub, Linkedin, Codepen, BookOpen } from 'react-feather'
import Hero from '@components/Hero'
import Profile from '@images/luisfalconmx-profile.png'
import Button from '@components/Button'
import SocialBar from '@components/SocialBar'
import Project from '@components/Project'
import Package from '@components/Package'
import Theme from '@components/Theme'
import axios from 'axios'

const HeroButtons = [
  <Button key="0" message="Descargar CV" icon={<Download />} />,
  <Button
    key="1"
    navigation="projects"
    message="Ver proyectos"
    icon={<ChevronRight />}
    iconPosition="right"
  />
]

const SocialBarIcons = [
  <Button
    key="0"
    color="light"
    variant="rounded"
    icon={<GitHub />}
    link="https://github.com/luisfalconmx"
  />,
  <Button
    key="1"
    color="light"
    variant="rounded"
    icon={<Linkedin />}
    link="https://www.linkedin.com/in/luisfalconmx"
  />,
  <Button
    key="2"
    color="light"
    variant="rounded"
    icon={<Codepen />}
    link="https://codepen.io/luisfalconmx"
  />,
  <Button
    key="4"
    color="light"
    variant="rounded"
    icon={<BookOpen />}
    link="https://blog.luisfalconmx.com/"
  />
]

const Home = () => {
  const [projects, setProjects] = useState([])
  const [packages, setPackages] = useState([])
  const [themes, setThemes] = useState([])

  useEffect(async () => {
    await axios
      .get(`${process.env.API_ENDPOINT}/projects`)
      .then(({ data }) => {
        let count = 0
        setProjects(data.filter((item) => item.featured === true && count++ < 3))
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(async () => {
    await axios
      .get(`${process.env.API_ENDPOINT}/packages`)
      .then(({ data }) => {
        let count = 0
        setPackages(data.filter((item) => count++ <= 2))
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(async () => {
    await axios
      .get(`${process.env.API_ENDPOINT}/themes`)
      .then(({ data }) => {
        let count = 0
        setThemes(data.filter((item) => count++ <= 3))
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <Hero
        title="Hola soy luisfalconmx, Frontend Developer"
        description="Me especializo en JavaScript implementando tecnologías como Webpack, React, ESLint, Babel, ECMAScript 6, entre otras para construir aplicaciones web modernas."
        image={Profile}
        buttons={HeroButtons}
      />
      <SocialBar icons={SocialBarIcons} />
      <h2 className="text-5xl font-bold text-light text-center pt-32 pb-16">
        Proyectos Destacados
      </h2>
      {projects.map((item) => (
        <Project key={item.id} {...item} cover={item.cover.url} alt={item.cover.alternativeText} />
      ))}
      <div className="text-center mt-16">
        <Button
          message="Ver todos los proyectos"
          navigation="projects"
          icon={<ChevronRight />}
          iconPosition="right"
        />
      </div>
      <h2 className="text-5xl font-bold text-light text-center pt-32 pb-16">
        Paquetes y Contenedores
      </h2>
      <div className="grid grid-cols-2 gap-3 py-4 items-center justify-items-center">
        {packages.map((item) => (
          <Package key={item.id} {...item} />
        ))}
      </div>
      <h2 className="text-5xl font-bold text-light text-center pt-32 pb-16">
        Mis temas de VS Code
      </h2>
      <div className="grid gap-y-8">
        {themes.map((item) => (
          <Theme key={item.id} {...item} cover={item.cover.url} />
        ))}
      </div>
    </>
  )
}

export default Home
