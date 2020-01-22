import React from 'react'
import Head from 'next/head'
import Link from 'next/link' 
import img from '../../public/logo-platzi-video.png'
import user from '../../public/user-icon.png'
import css from  '../styles/components/Header.scss'
const Header = (props) => {
  const {title} = props
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <title>{ title }</title>
      </Head>
      <header className={css.header}>
        <Link href='/'>
          <a>
            <img className={css.header__img} src={img} alt="Platzi Video"/>
          </a>
        </Link>
        <div className={css.header__menu}>
          <div className={css.header__menu__profile}>
            <img src={user} alt=""/>
            <p>Perfil</p>
          </div>
          <ul>
            <li><Link href="/login"><a>Iniciar sesion</a></Link></li>
            <li><Link href="/register"><a>Registrate</a></Link></li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  )
}
export default Header;
