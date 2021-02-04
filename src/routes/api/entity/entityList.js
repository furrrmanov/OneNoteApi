import { getDataInFirebaseDb } from '../../../utils/firebase'

export default function (req, res) {
  getDataInFirebaseDb(req.body).then((response) => res.send(response))
}
