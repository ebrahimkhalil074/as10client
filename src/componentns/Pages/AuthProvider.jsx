import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase.init";
import { FirebaseError } from "firebase/app";
import { useLocation } from "react-router-dom";
export const AuthContext =createContext(null)
const googleProvider = new GoogleAuthProvider();
 const AuthProvider = ( {children}) => {
 const [loading,setLoading] =useState(true)  
const [user,setUser] =useState(null)
// const [name,setName] =useState(null)
// const [ph,setPh] =useState(null)

const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth, email, password)

}
 const googleLogIn=()=>{
    return signInWithPopup(auth,googleProvider)
 } 
   
const emailLogIn =(email,password)=>{
    setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser)
setLoading(false)
})
return ()=>{
    unSubscribe()
}
},[])

const LogOut=()=>{
    setLoading(true)
return signOut(auth)
}



    const AuthInfo={
createUser,
emailLogIn,
user,
LogOut,
loading,
googleLogIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;