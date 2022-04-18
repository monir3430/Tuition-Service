import {onAuthStateChanged,signOut} from "firebase/auth";   
import { useEffect, useState } from "react";
import { auth } from "../../src/Firebase/firebase.init";


const useFirebase = () => {

    const [user, setUser] = useState({});

    useEffect(() => {

    }, [])


     const handleSignOut = () => {
         signOut(auth).then(() => {console.log("Out")})
     }

     useEffect(() => {
         onAuthStateChanged(auth, (user) => {
             setUser(user || {});
         });
     }, [])

    return {
        user,
        handleSignOut
    }
}

export default useFirebase;