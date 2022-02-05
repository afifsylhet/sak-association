import { useEffect, useState } from "react"
import firebaseInit from "./Firebase.init"

import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



firebaseInit()
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const gotEmail = (e) => {
        const email = e?.target.value;
        setEmail(email);
    }
    const gotPassword = (e) => {
        const password = e?.target.value;
        setPassword(password);
    }
    const gotConfirmPassword = (e) => {
        const confirmPassword = e?.target.value;
        setConfirmPassword(confirmPassword);
    }


    const auth = getAuth();

    const passwordLogin = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordSignUp = () => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })

    }, [auth]);



    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        gotEmail,
        gotPassword,
        gotConfirmPassword,

        passwordLogin,
        passwordSignUp,
        handleLogout,
    }
}

export default useFirebase;