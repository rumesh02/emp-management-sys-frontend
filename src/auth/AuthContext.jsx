import { createContext, useContext, useState, useEffect } from "react";
import {
    setUserToStorage,
    getUserFromStorage,
    removeUserFromStorage,
} from "../utils/token";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    //load users from local storage on initial render
    useEffect(() => {
        const storedUser = getUserFromStorage();
        if (storedUser) {
            setUser(storedUser);
        }
        setAuthLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);      //update state
        setUserToStorage(userData); //save to local storage
    };

    const logout = () => {
        setUser(null);
        removeUserFromStorage(); //remove from local storage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, authLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}