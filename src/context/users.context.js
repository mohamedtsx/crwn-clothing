import { createContext, useState, useEffect} from "react";
import {  createUserDocumentFromAuth } from "../utils/firebase/firebase";
import { onAuthStateChangedListener } from "../utils/firebase/firebase";

export const userContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// userContext(userContext) => valueObject
// so I can make a destructring and get currentUser or use setCurrentUser

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const value = {currentUser, setCurrentUser}
    
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])


    return <userContext.Provider value={value}>{children}</userContext.Provider>
}
