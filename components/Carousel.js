import React from 'react'
import css from '../components/styles/components/Carousel.scss';

const Carousel = ({children}) => {
  return (
    <section className={css.carousel}>
      <div className={css.carousel__container}>
        {children}
      </div>
    </section>
  )
}
export default Carousel;