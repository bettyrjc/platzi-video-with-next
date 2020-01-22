import React from 'react'
import css from '../components/styles/components/Categories.scss';

const Categories = ({children, title})=> {
  return (
    <div className={css.categories}><h3 className={css.categories__title}>Mi lista</h3>
      <h3 className={css.categories__title}>{title}</h3>
      {children}
    </div>
  )
}
export default Categories;