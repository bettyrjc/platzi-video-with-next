import Document from 'next/document';

export default class ThisDocument extends Document{
  static async getInitialProps(ctx){
    const renderPage = ctx.renderPage

    try{
      ctx.renderPage = () =>
      renderPage({
        enhanceApp: App => props => <App {...props}/>
      });
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps
      }
    }
    catch(e){
      console.log('hubo un error')
    }
  }
}