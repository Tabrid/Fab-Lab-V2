import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [refresh , setRefresh] = useState(false)
	return <AuthContext.Provider value={{ authUser, setAuthUser,refresh , setRefresh }}>{children}</AuthContext.Provider>;
};