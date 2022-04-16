import { deleteItemFromFirebaseStorage } from '../../../utils/firebase'

export default function (req, res) {
  console.log(req.body)
  deleteItemFromFirebaseStorage(req.body)
}
