import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user on the stattet change", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
