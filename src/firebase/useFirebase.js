import { useEffect, useState } from "react"
import firebaseInit from "./Firebase.init"

import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



firebaseInit()
const useFirebase = () => {
    const [members, setMembers] = useState([]);
    const [deposits, setDeposits] = useState([])

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

    useEffect(() => {
        fetch('http://localhost:5001/deposit')
            .then((res) => res.json())
            .then((data) => setDeposits(data))
    }, [])


    useEffect(() => {
        fetch('http://localhost:5001/members')
            .then((res) => res.json())
            .then((data) => setMembers(data))
    }, [])

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

        members,
        deposits
    }
}

export default useFirebase;