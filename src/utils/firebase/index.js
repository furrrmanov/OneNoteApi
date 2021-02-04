import firebase from 'firebase'
import 'firebase/storage'
global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest
import { v4 as uuidv4 } from 'uuid'
const { format } = require('util')

import { storage, database } from '../../app'

const firebaseConfig = {
  apiKey: 'AIzaSyDTpiyd9g8P0c4T9x3J7oJ2OxpliP2op1k',
  authDomain: 'onenote-5dd9c.firebaseapp.com',
  projectId: 'onenote-5dd9c',
  storageBucket: 'onenote-5dd9c.appspot.com',
  messagingSenderId: '504385664300',
  appId: '1:504385664300:web:f290370f648f91b50d6889',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


export default firebase

export const singInWithEmailUsingFirebase = (data) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then((result) => {
      const { user } = result
      return user
    })
    .catch((error) => {})
}

export const checkUserAuth = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

export const singOutUsingFirebase = () => {
  return firebase.auth().signOut()
}

export const sendDataInFirebaseDb = (data) => {
  return database.ref(`${data.root}`).push(data.value)
}

export const getDataInFirebaseDb = ({ root }) => {
  return database
    .ref(`${root}`)
    .once('value')
    .then((snapshot) => Object.entries(snapshot.val()))
}

export const deleteEntityInCollection = ({ value }) => {
  const databaseRef = database.ref(value.collectionName)

  return databaseRef.once('value', (snpsht) => {
    snpsht.forEach((dp) => {
      database.ref(`${value.collectionRoot}${value.id}`).remove()
    })
  })
}

export const updateSubEntityList = (value) => {
  const databaseRef = database.ref(value.collectionName)

  return databaseRef.once('value', (snpsht) => {
    snpsht.forEach((dp) => {
      database
        .ref(`${value.collectionRoot}${value.id}`)
        .update({ [value.itemName]: value.data })
    })
  })
}

export const uploadFileToFirebaseStorage = async (value) => {
  const file = value

  if (file) {
    return upload(file).then((response) => {
      const data = response
      return data
    })
  }
}

const upload = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject('No image file')
    }

    const newFileName = `${file.originalname}`
    const token = uuidv4()

    const fileUpload = storage.file(newFileName)

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
        metadata: {
          firebaseStorageDownloadTokens: token,
        },
      },
    })

    blobStream.on('error', (error) => {
      reject('Something is wrong! Unable to upload at the moment.')
    })

    blobStream.on('finish', () => {
      const url = format(
        `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileUpload.name}?alt=media&token=${token}`
      )
      resolve({ imgUrl: url, imgName: file.originalname })
    })

    blobStream.end(file.buffer)
  })
}

export const deleteItemFromFirebaseStorage = (data) => {
  storage.file(data.fileName).delete()
}
