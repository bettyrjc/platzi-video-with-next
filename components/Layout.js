import React from 'react'

import Header from './common/header';
import Footer from './common/footer';

const Layout = (props)=>{
  const {children, title} = props;
  return (
    <React.Fragment>
      <Header title={title}/>
        {children}
      <Footer/>
    </React.Fragment>
  )
}
export default Layout;
