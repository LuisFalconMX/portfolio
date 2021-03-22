import React from 'react'
import { Menu, Download } from 'react-feather'
import Logo from '@images/logo.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <Navbar
      icon={<Menu size="40" />}
      title="luisfalconmx"
      logo={Logo}
      button={<Button message="Descargar CV" icon={<Download />} iconPosition="left" />}
    />
    {children}
    <Footer />
  </>
)

export default Layout
