import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }
            img {
              border: 1px solid black;
            }
            body {
              margin: 0;
              font-family: 'Inter', BlinkMacSystemFont, -apple-system, Roboto,
                Helvetica, Arial, sans-serif;
              font-size: 16px;
              line-height: 1.2;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
        `}</style>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-25763738-1']);
            _gaq.push(['_trackPageview']);
            (function() {
              var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
