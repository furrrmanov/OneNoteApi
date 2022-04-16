import { deleteEntityInCollection } from '../../../utils/firebase'

export default function (req, res) {
  deleteEntityInCollection(req.body).then((response) => res.send(response))
}
