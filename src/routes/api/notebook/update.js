import { updateSubEntityList } from '../../../utils/firebase'

export default function (req, res) {
  updateSubEntityList(req.body).then((response) => res.send(response))
}
