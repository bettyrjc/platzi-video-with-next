import React, {useState} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import Router from 'next/router'

import {registerRequest} from '../actions';

import  css from '../components/styles/components/Register.scss';
import Layout from '../components/Layout';

const register = props =>{
  const [form,setValues] = useState({
    email:'',
    name:'',
    password:''
  })
  const handleInput = e =>{
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit  = e =>{
    e.preventDefault();
    props.registerRequest(form);
    Router.push('/')
  }
  return(
    <Layout>
      <section className={css.register}>
      <section className={css.register__container}>
        <h2>Regístrate</h2>
        <form className={css.register__container__form}
              onSubmit={handleSubmit}>
          <input
            name='name'
            className={css.input}
            type="text" 
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input 
            className={css.input}
            name='email'
            onChange={handleInput}
            type="text" 
            placeholder="Correo"
          />
          <input 
            className={css.input}
            type="password"
            name='password'
            onChange={handleInput}
            placeholder="Contraseña"
          />
          <button className={css.button}>
            Registrarme
          </button>
        </form>
        <Link href="/login">
          <a>Iniciar sesión</a>
        </Link>
      </section>
    </section>
  </Layout>
  )}

const mapDispatchToProps={
  registerRequest
}
export default connect(null, mapDispatchToProps)(register);
