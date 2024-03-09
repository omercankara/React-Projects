import { createContext, useReducer } from "react"
import themeReducer from "../Reducers/themeReducer"
export const ThemeContext = createContext() //istenilen komponent içinden veriye ulaş


export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: "warning",
        mode:"dark"
    })

    const changeColor = (value) => {
        dispatch({ type: "CHANGE_COLOR", payload: value })
    }

    const changeMode = (value) => { 
        dispatch({
            type:"CHANGE_MODE",
            payload:value
        })
    }


    return (
        <ThemeContext.Provider value={{ ...state, changeColor,changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}












