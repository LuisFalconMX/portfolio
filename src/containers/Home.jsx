import React from 'react'
import { Download, ChevronRight, GitHub, Linkedin, Codepen, BookOpen } from 'react-feather'
import Hero from '@components/Hero'
import Profile from '@images/luisfalconmx-profile.png'
import Button from '@components/Button'
import SocialBar from '@components/SocialBar'
import Project from '@components/Project'

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

const Home = () => (
  <>
    <Hero
      title="Hola soy luisfalconmx, Frontend Developer"
      description="Me especializo en JavaScript implementando tecnologías como Webpack, React, ESLint, Babel, ECMAScript 6, entre otras para construir aplicaciones web modernas."
      image={Profile}
      buttons={HeroButtons}
    />
    <SocialBar icons={SocialBarIcons} />
    <h2 className="text-5xl font-bold text-light text-center pt-32 pb-16">Proyectos Destacados</h2>
    <Project />
    <Project />
    <Project />
  </>
)

export default Home
