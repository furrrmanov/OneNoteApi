import { deleteItemFromFirebaseStorage } from '../../../utils/firebase'

export default function (req, res) {
  deleteItemFromFirebaseStorage(req.body)
}
