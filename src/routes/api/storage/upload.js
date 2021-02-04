import { uploadFileToFirebaseStorage } from '../../../utils/firebase'

export default function (req, res) {
  uploadFileToFirebaseStorage(req.file).then((response) => res.send(response))
}
