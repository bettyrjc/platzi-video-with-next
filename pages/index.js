import React from 'react'
import {connect} from 'react-redux'

import Layout from '../components/Layout';
import Search from '../components/Search';
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const Home_home = ({trends, myList, originals, search}) =>  {
  return (
    <Layout title="Betty Video c:">
      <Search/>
        {
          search.length > 0 && 
          <Categories title='search'>
            <Carousel>
            {search.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
            </Carousel>
          </Categories>
        }
       {
        myList.length > 0 && 
        <Categories title="Mi lista">
            <Carousel >
            {
              myList.map(item =>
                <CarouselItem 
                  key={item.id} 
                  isList
                  {...item}
                 />
            )}
            </Carousel>
          </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {
            trends.map(item =>
              <CarouselItem key={item.id}
                            {...item}/>
            )
          }
        </Carousel>
      </Categories>
      <Categories title="Originales">
        <Carousel>
          {
            originals.map(item =>
              <CarouselItem key={item.id}
                            {...item}/>
            )
          }
        </Carousel>
      </Categories>
    
    <style jsx global>
    {
      `
      body {
        margin:0;
        background: #8f57fd;
        font-family: $theme-font;
      }
      
      * {
        box-sizing: border-box;
      }
      .button {
        background-color: rgba(255, 255, 255, .3);
        border: none;
        border-radius: 25px;
        color: white;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Muli', sans-serif;
        height: 50px;
        letter-spacing: 1px;
        margin: 10px 0;
      }
     
      `
      }
    </style>
   </Layout>

  )
}
const mapStateToProps = state =>{
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search
  }
};

export default connect(mapStateToProps,null)(Home_home)