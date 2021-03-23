import React from 'react'
import { Download, ChevronRight } from 'react-feather'
import Hero from '@components/Hero'
import Profile from '@images/luisfalconmx-profile.png'
import Button from '@components/Button'

const Home = () => (
  <Hero
    title="Hola soy luisfalconmx, Frontend Developer"
    description="Me especializo en JavaScript implementando tecnologías como Webpack, React, ESLint, Babel, ECMAScript 6, entre otras para construir aplicaciones web modernas."
    image={Profile}
    firstButton={<Button message="Descargar CV" icon={<Download />} />}
    secondButton={
      <Button
        link="projects"
        message="Ver proyectos"
        icon={<ChevronRight />}
        iconPosition="right"
      />
    }
  />
)

export default Home
