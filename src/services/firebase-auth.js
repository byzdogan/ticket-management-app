import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../config/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const adminsCollectionRef = collection(db, 'admins')

const getEmailFromUserName = async (userName) => {
  try {
    const q = query(adminsCollectionRef, where('adminUserName', '==', userName))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0]
      return userDoc.data().adminEmail
    } else {
      console.error('User with the given username not found')
      return null
    }
  } catch (error) {
    console.error('Problem occurs during getEmailFromUserName', error)
  }
}

export const signIn = async (userName, password) => {
  const email = await getEmailFromUserName(userName)
  await signInWithEmailAndPassword(auth, email, password)
  console.log('signed in')
}

export const logOut = async () => {
  try {
    await signOut(auth)
    console.log('signed out')
  } catch (error) {
    console.error('Error occurs during SignOut process', error)
  }
}
