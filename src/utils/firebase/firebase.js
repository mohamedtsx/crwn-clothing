import { initializeApp } from 'firebase/app';

import { getAuth, signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        GoogleAuthProvider, 
        signInWithPopup, signInWithRedirect,
        signOut, onAuthStateChanged
} from 'firebase/auth';

import { 
    getFirestore, getDoc, setDoc,
    doc, collection, writeBatch, 
    query, getDocs
} from 'firebase/firestore'


const firebaseConfiguration = {
    apiKey: "AIzaSyAsF0RKEb4ShaQWHHCrwubtWVjPyRgR2t0",
    authDomain: "crown-clothing-db-mk.firebaseapp.com",
    projectId: "crown-clothing-db-mk",
    storageBucket: "crown-clothing-db-mk.appspot.com",
    messagingSenderId: "455939664120",
    appId: "1:455939664120:web:7c2e82d7555e607ec6730d"
}

const firebaseApp = initializeApp(firebaseConfiguration);
const auth = getAuth(firebaseApp);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
});

const db = getFirestore();

export const signInAuthWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export const createAuthUserFromEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const signWithGoogleRedirect = () => signInWithRedirect(auth, googleAuthProvider);

export const createUserDocumentFromAuth = async (user) => {
    const {displayName, email} = user;
    const createdAt = new Date()
    const colRef = doc(db, 'users', user.uid);

    const snapShot = await getDoc(colRef);


    if (!snapShot.exists()) {
        try {
            await setDoc(colRef, {displayName, email, createdAt})
        } catch(error) {
            console.log(error)
        }
    }

    return snapShot;
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);    
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
}


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const categoriesMap = querySnapshot.docs.map(docSnapShot => docSnapShot.data());

    return categoriesMap;

}

