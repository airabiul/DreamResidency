import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (updateData)=>{
    return updateProfile(auth.currentUser, updateData)
  }
  

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user on the stattet change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    logOut,
    updateUser
  };

  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
