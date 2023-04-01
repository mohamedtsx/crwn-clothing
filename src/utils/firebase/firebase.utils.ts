import { initializeApp } from 'firebase/app';

import { getAuth, signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        GoogleAuthProvider, 
        signInWithPopup, signInWithRedirect,
        signOut, onAuthStateChanged, User, NextOrObserver
} from 'firebase/auth';

import { 
    getFirestore, getDoc, setDoc,
    doc, collection, writeBatch, 
    query, getDocs, QueryDocumentSnapshot
} from 'firebase/firestore'

import { Category } from '../../store/categories/categories.types';


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

export const signInAuthWithEmailAndPassword = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export const createAuthUserFromEmailAndPassword = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const signWithGoogleRedirect = () => signInWithRedirect(auth, googleAuthProvider);

type AdditionalInfo = {
    displayName?: string;
}

export type UserData = {
    createdAt: Date;
    displayName: string;
    email: string;
}

export const createUserDocumentFromAuth = async (
    user: User, 
    additionalInfo: AdditionalInfo
    ): Promise<void | QueryDocumentSnapshot<UserData>> => {
    const {displayName, email} = user;
    const createdAt = new Date()
    const colRef = doc(db, 'users', user.uid);

    const snapShot = await getDoc(colRef);


    if (!snapShot.exists()) {
        try {
            await setDoc(colRef, {displayName, email, createdAt, ...additionalInfo})
        } catch(error) {
            console.log(error)
        }
    }

    return snapShot as QueryDocumentSnapshot<UserData>;
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => 
    onAuthStateChanged(auth, callback);

export type ObjectToAdd = {
    title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
    collectionKey: string, 
    objectsToAdd: T[]
    ): Promise<void> => {
    const collectionRef = collection(db, collectionKey);    
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
}



export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const categoriesMap = querySnapshot.docs.map(docSnapShot => docSnapShot.data() as Category);

    return categoriesMap;
}

export const getCurrentUser = (): Promise<User|null> => {
    return new Promise((resolve,reject) => {
        const unsubscribe = onAuthStateChanged(auth,(userAuth) => {
            unsubscribe();
            resolve(userAuth);
        },reject)
    }) 
}

