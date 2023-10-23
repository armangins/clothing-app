
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

// fireBase connection settings.
const firebaseConfig = {
  apiKey: "AIzaSyAztnLJP6kmOJP1IXex8rVk1UTWznT7fDY",
  authDomain: "spiceit-ad536.firebaseapp.com",
  projectId: "spiceit-ad536",
  storageBucket: "spiceit-ad536.appspot.com",
  messagingSenderId: "249968288802",
  appId: "1:249968288802:web:355952d21819f8157f167b",
  measurementId: "G-1Q1MJ4JL7M",
};

// fireBase settings
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

export const addDocAndCollection = async (collectionKey,objectsToAdd)=>{

  const collectionRef = await collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object=>{
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object);
  });
  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocs = async ()=>{
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);


  const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const { title,id, items,category_img } = docSnapShot.data();
     acc[title.toLowerCase()] = items;
    return acc;
  },{});

  return categoryMap;
}



export const getCategoriesAndImages = async ()=>{
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);


  const categoryImage = querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const { title,id, items,category_img } = docSnapShot.data();
     acc[title.toLowerCase()] = category_img;
    return acc;
  },{});

  return categoryImage;
}








export const createUser = async (userAuth,addInfo
) => {
  const userReff = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userReff);

  if(!userSnapShot.exists()){
    const { displayName ,email} = userAuth;
    const createdAt = new Date();

  try {
    await setDoc(userReff,{
      displayName,
      email,
      createdAt,
      ...addInfo,
    })

  } catch (error) {console.log("ops there was an error",error);
}
  }
return userReff;
};

// sign in with google 
export const signInWithGooglePopup = () => {

  return signInWithPopup(auth, googleProvider);
};

export const signInWithEmailAndPass =  async (email,password)=>{
  return await signInWithEmailAndPassword(auth,email,password);
}

export const authWithCredentials = async (email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async ()=>{
  console.log('was signed out');
  return await signOut(auth);
}

export const authStateChangeListner = (callback)=>{
return onAuthStateChanged(auth,callback);
}



