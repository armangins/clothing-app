import { createContext, useEffect, useState } from "react";
import { authStateChangeListner,createUser } from "../utilities/firebase/firebase.utilities";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
})

export const UserPorvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}
    useEffect(()=>{
      const unsubscribe = authStateChangeListner((user)=>{
        if(user) {
          createUser(user);
        }
        setCurrentUser(user);
      })
      return unsubscribe;
    },[])
  return  <UserContext.Provider value={value}>{children}</UserContext.Provider>
}