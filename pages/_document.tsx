import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="google-site-verification" content="_AcFY2JvJbHHxMkuGvPt7YQmKqqjwDqTBH1ZIOdc9T8" />
          {/* Puedes añadir más meta tags, links, scripts, etc. aquí */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
