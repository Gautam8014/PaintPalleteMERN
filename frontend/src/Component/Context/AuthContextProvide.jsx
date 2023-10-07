import { createContext } from "react";
import { useState } from "react";
export const MyAuthContext = createContext(); //box

function AuthContextProvide({children}) {
 const[isAuth, setIsAuth] = useState(false)
//  const[token, setToken] = useState("")
const[lang, setLang]= useState(false)
// console.log(lang)

const language= () =>{
    setLang(true)
}
 const login = () => {
 setIsAuth(true);
 
 }
// console.log(token);
 const logout = () => {
 setIsAuth(false);
 }
    return(
        // value is used for send info
     <MyAuthContext.Provider value = {{isAuth, login, logout,language,lang ,setLang}}>{children}</MyAuthContext.Provider>
    )
}

export default AuthContextProvide;