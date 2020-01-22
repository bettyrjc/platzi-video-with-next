import React, {useState} from 'react'
import {connect} from 'react-redux'
import Router from "next/router";
import Link from 'next/link'

import { loginRequest } from '../actions'

import css from '../components/styles/components/Login.scss'
import Layout from '../components/Layout';
import Twitter from '../public/twitter-icon.png'
import google from '../public/google-icon.png'


const Login = props => {
  const [form, setValues] = useState({
    email:''
  });

  const handleInput = e =>{
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.loginRequest(form);
    Router.push('/');
 
  }
  return (
  <Layout title='iniciar Sesion'>
    <section className={css.login}>
    <section className={css.login__container}>
      <h2>Inicia sesión</h2>
      <form onSubmit={handleSubmit} 
            className={css.login__container__form}>
        <input className={css.input} 
               name='email'
               type="text"
               placeholder="Correo"
               onChange={handleInput}
        />
        <input className={css.input} 
               type="password" 
               placeholder="Contraseña"
               onChange={handleInput}
        />
        <button className={css.button}>
          Iniciar sesión
        </button>
      </form>

      <section className={css.login__container__social_media}>
         <div className={css.login__container__remember_me}>
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox"/>
            Recuérdame
          </label>
          <Link href="/">
            <a >Olvidé mi contraseña</a>
          </Link>
        </div>
        <div><img src={google}/> Inicia sesión con Google</div>
        <div><img src={Twitter}/> Inicia sesión con Twitter</div>
      </section>
      <p className={css.login__container__register}>
        No tienes ninguna cuenta 
        <Link href="/register"><a>Registrate</a></Link>
      </p>
    </section>
  </section>
</Layout>
  )}

const mapDispatchToProps = {
  loginRequest
}
export default connect(null, mapDispatchToProps)(Login);