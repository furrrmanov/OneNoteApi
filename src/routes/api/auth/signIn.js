import { singInWithEmailUsingFirebase } from '../../../utils/firebase'

export default function (req, res) {
  singInWithEmailUsingFirebase(req.body).then((data) => res.send(data))
}
