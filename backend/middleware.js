import bodyParser from 'body-parser'
import session from 'express-session'

export function setupMiddleware(app) {
  app.use(bodyParser)
  app.use(session({
    cookieName: 'session',
    secret: 'cats1_are2_awesome01',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
  }))
}

export function checkAuth(req, res, next) {
  if (!req.session.user_id) {
    res.send('You are not privileged to enter.')
  }
  else {
    next()
  }
}
