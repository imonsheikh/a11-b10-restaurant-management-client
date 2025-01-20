import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


// Global Value
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    // user state 
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    //Google Provider 
    const googleProvider = new GoogleAuthProvider()

    //handleGoogleLogin
    const handleGoogleLogin = () => {
       setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    //handle Register
    const handleRegister = (email,password) =>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Update user Profile 
   const updateUserProfile = (updatedObjectData) =>{
    return updateProfile(auth.currentUser, updatedObjectData)
   }

    //handle normal Login
    const handleLogin = (email, password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //handle Logout
    const handleLogout = () => {
      setLoading(true)
      return signOut(auth)
    }

    //reset password 
    const resetPassword = (email) => {
     return sendPasswordResetEmail(auth,email)
    }


   const authInfo = {
    handleGoogleLogin,
    handleRegister,
    user,
    setUser,
    updateUserProfile,
    handleLogin,
    handleLogout,
    loading,
    resetPassword,
   }

    //Observer with useEffect
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // setLoading(false)
            // console.log(currentUser);
           if(currentUser){
               setUser(currentUser)
               
            }else{
            setUser(null)
           }
           setLoading(false)
            
        })
        

        return () => {
            unsubscribe()
        }
    },[])
    
   
    return (
       <AuthContext.Provider value={authInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;