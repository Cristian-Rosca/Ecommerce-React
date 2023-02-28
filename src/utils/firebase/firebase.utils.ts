import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, NextOrObserver ,User } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { Category } from '../../types/Category';


const firebaseConfig = {
    apiKey: "AIzaSyDw1vZtcOn0TWr1bqiLYG77HHw56q3gfvs",
    authDomain: "imperium-ecommerce-db.firebaseapp.com",
    projectId: "imperium-ecommerce-db",
    storageBucket: "imperium-ecommerce-db.appspot.com",
    messagingSenderId: "146043218476",
    appId: "1:146043218476:web:f13fffc88355eb9705ff89"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // GoogleAuthProvider is a class from firebase which we use to create a provider object 

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth(); // getAuth() is a singleton

export const signInWithGooglePopup = () => signInWithPopup(auth, provider); // naming these with Google because the provider const is a GoogleAuthProvider
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider); // we can use other providers like FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider etc

export const database = getFirestore(); // this directly points to the database inside the console

export type objectsToAdd = {
    title: string
}

export const addCollectionAndDocuments = async <T extends objectsToAdd> ( collectionKey : string, objectsToAdd : T[]) : Promise<void> => {
    const collectionRef = collection(database, collectionKey);

    const batch = writeBatch(database);

    objectsToAdd.forEach((obj : any) => {
        const newDocRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(newDocRef, obj);
    })
    await batch.commit();
    
}

export const getCategoriesAndDocuments = async () : Promise<Category[]> => {
    const collectionRef = collection(database, 'categories');
    const q : any = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return  querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category);
};

export type UserData = {
    createdAt: Date,
    displayName: string,
    email: string,
}

export type AdditionalInformation = {
    displayName?: string,
}

export const createUserDocumentFromAuth = 
    async (userAuth: User, additionalInformation = {} as AdditionalInformation) : Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;
    
    const userDocRef = doc(database, 'users', userAuth.uid);
    
    const userDocSnapshot = await getDoc(userDocRef);

    if(!userDocSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        }catch (error){
            console.log('Error creating user', error);
        }
    }

    return userDocSnapshot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserWithEmailAndPassword = async (email : string, password: string) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
} 

export const signInAuthUserWithEmailAndPassword = async (email : string, password: string) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
} 

export const signOutAuthUser = async () => {
    return await signOut(auth);
}

export const onAuthStateChangedListener = (callback : NextOrObserver<User>) => onAuthStateChanged(auth, callback)