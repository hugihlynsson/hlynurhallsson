module.exports = {
  async rewrites() {
    return [
      // Support old projects-slug.html URLs (e.g. projects-biginjapan.html -> /projects/biginjapan)
      {
        source: '/projects-:slug.html',
        destination: '/projects/:slug',
      },
      // Support all other old .html URLs (e.g. /cv.html -> /cv, /works/1.html -> /works/1)
      {
        source: '/:path*.html',
        destination: '/:path*',
      },
    ]
  },
}
