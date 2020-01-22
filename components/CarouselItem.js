import React from 'react'
import {Link} from '../routes';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import slug from '../helper/slug'

import css from './styles/components/CarouselItem.scss'
import play from '../public/play.png'
import plus from '../public/plus.png'
// import remove from './assets/remove-icon.png'
import { setFavorite, deleteFavorite } from '../actions'

 const  CarouselItem = (props)=> {
  const {id,title, cover, year, contentRating, duration, isList} = props;
  
  const deleteFav = (itemid) =>{
    props.deleteFavorite(itemid)
  }
  const addToFavorite = ()=>{
    props.setFavorite({
      id, cover,year, contentRating, duration,title
      })
    }
  return (
    <div className={css.carousel_item}>
      <img className={css.carousel_item__img} src={cover} alt={title} />
      <div className={css.carousel_item__details}>
        <div>
          <div>
            {isList ? 
              <img className={css.carousel_item__details__img} 
                   src={play}
                   alt="Delete"
                   onClick={()=>deleteFav(id)}
                  />:
              <img className={css.carousel_item__details__img} 
                   src={plus} 
                   alt="plus"
                   onClick={()=>addToFavorite(id)}
                  /> 
            }
            <Link route={'player'}
                  params={{ slug:slug(title),
                            id:id
                  }}
            >
              <a>
                <img className={css.carousel_item__details__img} 
                   src={play}
                   alt="Play Icon"
                  />
              </a>
            </Link>
          </div>
        </div>
        <p className={css.carousel_item__details__title}>{title}</p>
        <p className={css.carousel_item__details__subtitle}>
        {`
          ${year} ${contentRating} ${duration}
        `} 
        </p>
      </div>
    </div>
  )
}
CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired, // obligatorio
  title: PropTypes.string.isRequired, // obligatorio
  year: PropTypes.number, // opcional,
  duration: PropTypes.number, // opcional
  contentRating: PropTypes.string
}
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
 }
export default connect(null, mapDispatchToProps)(CarouselItem);

