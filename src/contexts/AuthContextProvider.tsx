
import { createContext, useEffect, useState, ReactNode } from 'react';
import { auth, firebase } from '../services/firebase';

type AuthContextProviderType = {
  children: ReactNode
}

type AuthContextType = {
  user: User | undefined,
  signInWithGoogle: () => Promise<void>
}

type User = {
  name?: string,
  email?: string,
  id: string
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderType) => {

  const [user, setUser] = useState<User>();


  useEffect(() => {
    const cleanup = auth.onAuthStateChanged(user => {
      if (user) {
        setValuesUser(user);
      }
    })
    return () => {
      cleanup();
    }
  }, [])

  const setValuesUser = (user: any) => {
    if (user) {

      const { displayName, uid, email } = user;

      setUser({
        name: displayName || "",
        id: uid,
        email: email || ""
      })
    }
  }

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await auth.signInWithPopup(provider);
    setValuesUser(response.user)
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}