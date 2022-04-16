import Firebase from '../firebase'

export default function isAuthenticated(req, res, next) {
  const user = Firebase.auth().currentUser

  if (user !== null) {
    req.user = user
    next()
  } else {
    res.status(401).json({
      status: 'Not authenticated'
    })
  }
}
