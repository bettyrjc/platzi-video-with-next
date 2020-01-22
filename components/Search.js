import React from 'react'
import css from '../components/styles/components/Search.scss';

 const Search = () => {
  return (
    <section className={css.main}>
      <h2 className={css.main__title}>¿Qué quieres ver hoy?</h2>
      <input type="text" className={css.input} placeholder="Buscar..."/>
    </section>
  )
}
export default Search