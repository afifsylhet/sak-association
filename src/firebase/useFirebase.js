import { useState } from "react"
import firebaseInit from "./Firebase.init"



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
        gotConfirmPassword
    }
}

export default useFirebase;