import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            {/* favicon */}
            {/* Webfont */}
            {/* Stylesheet */}
            {/* script/js */}
        </Head>
        <body className='my-body-class'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument