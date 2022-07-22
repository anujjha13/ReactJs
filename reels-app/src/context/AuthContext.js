import { onAuthStateChanged } from "firebase/auth"; //to maintain state of user for every component
import React, { useEffect, useState } from "react" //to apply state on mount
import {auth} from "../firebase"  

export const AuthContext = React.createContext(); //to create new context


export function AuthContextProvider({children}){  //props.children me hongi values to directly destructre krlia
    let [mainLoader,setMainLoader] = useState(true);  //here we use the main loader state
    let [cUser,setUser] = useState(null); //if not logged in set currentuser as null
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }else{
                setUser(null)
            }
            setMainLoader(false);
        },[])
    })
    let value = cUser;//value is sent to whichever page is loading
    return (
        <AuthContext.Provider value={value}>
            {mainLoader == false && children} 
        </AuthContext.Provider>
    )
}