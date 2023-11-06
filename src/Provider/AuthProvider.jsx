import { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 


const auth = getAuth(app);
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null);
   const [loading, setLoading] = useState(true);
 
   // register
   const createUser = (email, password) => {
     setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password);
   };
   //login
   const loginUser = (email, password) => {
     setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
   };
   //Google login
   const googleLogin=()=>{
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
   }
   //logOut
   const logOutUser = () => {
     setLoading(true);
     return signOut(auth);
   };
 
   //Observer
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       setCurrentUser(user);
         setLoading(false);
     });
 
     return () => {
       unsubscribe();
     };
   }, []);
 
   const authInfo = {
     currentUser,
     loading,
     createUser,
     loginUser,
     googleLogin,
     logOutUser,
   };
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

AuthProvider.propTypes={
   children:PropTypes.node
}

export default AuthProvider;