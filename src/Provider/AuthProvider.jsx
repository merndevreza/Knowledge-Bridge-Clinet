import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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
  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //github login
  const githubLogin = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //logOut
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const loggedUser = { email: user?.email };
      //if user exist
      if (user) {
        setCurrentUser(user);
        setLoading(false);
        axios
          .post(
            "https://b8a11-server-side-merndevreza.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        // if user logged out, the token will be removed
        axios
          .post(
            "https://b8a11-server-side-merndevreza.vercel.app/log-out",
            loggedUser,
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
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
    githubLogin,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
