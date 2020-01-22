import React, { Component } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'


 class Error extends Component {
   static getInitialProps({res,err}){
     const status = res ? res.statusCode : 
                    err ? err.statusCode : null
     return {status}
   }
  render() {
    const {status} = this.props;

    return (
      <Layout title='oh no :c'>
        {
          status === 404 ?
          <div className='message'>
            <h1>Esta pagina no existe,:c</h1>
            <p><Link href='/'><a>Volver a la home</a></Link></p>
          </div> :
          <div className='message'>
            <h1>Problema, intenta pronto</h1>
          </div>
        }
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
        <style jsx>{`
          .message {
            padding: 100px 30px;
            text-align: center;
            color:white;
          }
          h1 {
            margin-bottom: 2em;
          }
          a {
            color: white;
          }
         `}
         
        </style>
      </Layout>
    )
  }
}
export default Error;
