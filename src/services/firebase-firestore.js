import { db, storage } from '../config/firebase'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where
} from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

// to get the attachments URLs from firebase storage
const uploadFiles = async (attachments) => {
  const fileUrls = []
  const storageRef = ref(storage, 'attachments')
  for (const file of attachments) {
    const fileRef = ref(storageRef, file.name)
    await uploadBytes(fileRef, file)
    const url = await getDownloadURL(fileRef)
    fileUrls.push(url)
  }

  return fileUrls
}

// to save the created ticket data on form to tickets collection on firestore
export const saveTicketDataToFirestore = async (
  firstNameInput,
  lastNameInput,
  identityNumberInput,
  addressInput,
  ticketContentInput,
  attachments,
  navigate
) => {
  try {
    const ticketUID = uuidv4()
    const ticketsCollectionRef = collection(db, 'tickets')
    const fileUrls = await uploadFiles(attachments)
    const docRef = await addDoc(ticketsCollectionRef, {
      ticketID: ticketUID,
      firstName: firstNameInput,
      lastName: lastNameInput,
      identityNumber: identityNumberInput,
      address: addressInput,
      ticketContent: ticketContentInput,
      attachments: fileUrls,
      ticketStatus: 'beklemede',
      createdAt: serverTimestamp()
    })
    // to give the user a request code
    const docUID = docRef.id

    navigate('/basvuru-basarili', { state: { ticketID: docUID } })
  } catch (error) {
    console.error('Error occurs during saveTicketDataToFirestore', error)
  }
}

// to get ticket data by document ID
export const getTicketByID = (ticketID, onUpdate) => {
  // specific ticket document
  const ticketDocRef = doc(db, 'tickets', ticketID)

  const unsubscribe = onSnapshot(
    ticketDocRef,
    (ticketDocSnapshot) => {
      if (ticketDocSnapshot.exists()) {
        const ticketData = ticketDocSnapshot.data()
        onUpdate(ticketData, null) // Pass data and no error
      } else {
        console.error('There is not a ticket by that ID')
        onUpdate(null, 'Ticket not found') // Pass null data and an error message
      }
    },
    (error) => {
      console.error('Error fetching ticket data:', error)
      onUpdate(null, 'Error fetching ticket data') // Pass null data and an error message
    }
  )

  return unsubscribe
}

// to check if the document exist
export const checkTicketDocExists = async (ticketID) => {
  try {
    const ticketDocRef = collection(db, 'tickets', ticketID)
    const ticketDocSnapshot = await getDoc(ticketDocRef)
    return ticketDocSnapshot.exists() // true if a document exists
  } catch (error) {
    console.error('There is not a ticket that match your request:', error)
    throw error
  }
}

export const getAllTickets = async () => {
  const ticketsCollectionRef = collection(db, 'tickets')
  const querySnapshot = await getDocs(ticketsCollectionRef)
  const tickets = querySnapshot.docs.map((doc) => ({ ...doc.data(), documentID: doc.id }))
  return tickets
}

export const updateTicketData = async (ticketID, newData) => {
  const ticketsCollectionRef = collection(db, 'tickets')
  const specificTicketDocRef = doc(ticketsCollectionRef, ticketID)

  try {
    const currData = (await getDoc(specificTicketDocRef)).data()
    const mergedData = { ...currData, ...newData }
    await updateDoc(specificTicketDocRef, mergedData)
    return true
  } catch (error) {
    console.error('Error updating ticket data:', error)
    throw error
  }
}
