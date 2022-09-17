import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Creative Writing Project',
    description: 'A cool project',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <div class="ufo-container">
          <div class="ufo">
            <img class="saucer" src="/images/ufo.png" />
            <div id="r1" class="tractor-beam"></div>
            <div id="r2" class="tractor-beam"></div>
            <div id="r3" class="tractor-beam"></div>
            <div id="r4" class="tractor-beam"></div>
            <div id="r5" class="tractor-beam"></div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
