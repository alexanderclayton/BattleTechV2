//import//
import { useState } from 'react'
import { doc, updateDoc, deleteField } from 'firebase/firestore'
import {  getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { db } from '../firebase/firebaseConfig'

export const AddImage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null)
  const storage = getStorage()

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files?.[0])
    }
  }

  const saveImage = async () => {
    if (image) {
      try {
        const storageRef = ref(storage, 'path/to/store/' + image.name )
        await uploadBytes(storageRef, image)
  
        const downloadURL = await getDownloadURL(storageRef)
  
        await updateDoc(doc(db, 'mechs', 'test'), {
          imageUrl: downloadURL,
        })
  
        console.log('uploaded image!')
      } catch (error) {
        console.error('error saving image')
      }
    } else {
      console.error('no image selected!')
    }
  }

  const deleteImage = async () => {
    try {
      await updateDoc(doc(db, 'mechs', 'test'), {
        imageUrl: deleteField()
      })
      console.log('deleted image')
    } catch (error) {
      console.error('error deleting image')
    }
  }
  
  return (
    <div>
        <input type="file" className="bg-blue-200 px-3 py-2 rounded-lg" onChange={handleImage}/>
        <button onClick={saveImage} className='bg-green-200 rounded-lg px-3 py-2'>Save</button>
        <button onClick={deleteImage} className='bg-red-200 rounded-lg px-3 py-2'>delete</button>
    </div>
  )
}
