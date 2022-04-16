import { sendDataInFirebaseDb } from '../../../utils/firebase'

export default function (req, res) {
  sendDataInFirebaseDb(req.body).then((response) => res.send(response))
}
