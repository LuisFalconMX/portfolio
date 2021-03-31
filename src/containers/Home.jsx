import React, { useState, useEffect } from 'react'
import { Download, ChevronRight, GitHub, Linkedin, Codepen, BookOpen } from 'react-feather'
import Hero from '@components/Hero'
import Profile from '@images/luisfalconmx-profile-circle.png'
import Button from '@components/Button'
import SocialBar from '@components/SocialBar'
import Project from '@components/Project'
import Package from '@components/Package'
import Theme from '@components/Theme'
import Title from '@components/Title'
import Packages from '@components/Packages'
import Themes from '@components/Themes'
import axios from 'axios'

const CV = 'https://luisfalconmx-strapi.s3.amazonaws.com/luisfalconmx_cv_c13f9663a4.pdf'

const HeroButtons = [
  <Button key="0" message="Descargar CV" link={CV} icon={<Download />} />,
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

  useEffect(() => {
    axios
      .get(`${process.env.API_ENDPOINT}/projects?_sort=date:DESC`)
      .then(({ data }) => {
        let count = 0
        setProjects(data.filter((item) => item.featured === true && count++ < 3))
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    axios
      .get(`${process.env.API_ENDPOINT}/packages`)
      .then(({ data }) => {
        let count = 0
        setPackages(data.filter((item) => count++ <= 2))
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    axios
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
      <Title text="Proyectos Destacados" />
      {projects.map((item) => (
        <Project key={item.id} {...item} cover={item.cover.url} alt={item.cover.alternativeText} />
      ))}
      <Button
        align="center"
        spacing="big"
        message="Ver todos los proyectos"
        navigation="projects"
        icon={<ChevronRight />}
        iconPosition="right"
      />
      <Title text="Paquetes Destacados" />
      <Packages>
        {packages.map((item) => (
          <Package key={item.id} {...item} />
        ))}
      </Packages>
      <Title text="Temas de VS Code" />
      <Themes>
        {themes.map((item) => (
          <Theme key={item.id} {...item} cover={item.cover.url} />
        ))}
      </Themes>
    </>
  )
}

export default Home
