import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const useUser = useContext(UserContext);

export const UserProvider = (props) => {
    const [ userData, setUserData ] = useState({ name: "", email: "" });
    
    const updateUser = (name, email) => {
        setUserData({name, email});
    };

    const welcome = () => {
        return "Hi " + userData.name + " welcome";
    }

    return (
        <UserContext.Provider value={{userData, updateUser}}>
            {props.children}
         </UserContext.Provider>
    );         

} 