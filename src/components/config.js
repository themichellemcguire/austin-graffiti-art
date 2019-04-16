exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://austin-graffiti-art.herokuapp.com/'
  : 'http://localhost:3000'

  export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://austin-graffiti-art.herokuapp.com/'
  : 'http://localhost:3001'