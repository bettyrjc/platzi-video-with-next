import React from 'react'
import Link from 'next/link'
import css from '../styles/components/Footer.scss'
const footer = () => {
  return (
    <footer className={css.footer}>
      <Link href="/"><a >Terminos de uso</a></Link>
      <Link href="/"><a >Declaración de privacidad</a></Link>
      <Link href="/"><a >Centro de ayuda</a></Link>
    </footer>
  )
}
export default footer;
