import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <style>{`
              *,
              *::before,
              *::after {
                box-sizing: border-box;
              }
              body {
                margin: 0;
                font-family: BlinkMacSystemFont, -apple-system, Roboto, Helvetica,
                  Arial, sans-serif;
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
      </html>
    )
  }
}
