import React, { useState, useEffect } from 'react'
import { Menu, Download, GitHub, Linkedin, Codepen, BookOpen } from 'react-feather'
import Logo from '@images/logo.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

const FooterIcons = [
  <Button key="0" variant="rounded" icon={<GitHub />} link="https://github.com/luisfalconmx" />,
  <Button
    key="1"
    variant="rounded"
    icon={<Linkedin />}
    link="https://www.linkedin.com/in/luisfalconmx"
  />,
  <Button key="2" variant="rounded" icon={<Codepen />} link="https://codepen.io/luisfalconmx" />,
  <Button key="4" variant="rounded" icon={<BookOpen />} link="https://blog.luisfalconmx.com/" />
]

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar
        open={open}
        setOpen={setOpen}
        title="luisfalconmx"
        logo={Logo}
        button={
          <Button
            message="Descargar CV"
            link="https://luisfalconmx-strapi.s3.amazonaws.com/luisfalconmx_curriculum_vitae_49de021bd3.pdf"
            icon={<Download />}
            iconPosition="left"
          />
        }
      />
      {children}
      <Footer buttons={FooterIcons} />
    </>
  )
}

export default Layout
