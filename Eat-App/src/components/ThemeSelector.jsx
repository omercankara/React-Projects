import { useContext } from 'react'
import './themeSelector.css'
import lightIcon from "../assets/light.svg"
import darkIcon from "../assets/dark.svg"
import { ThemeContext } from '../Context/ThemeContext'
const themeColors = ["warning", "danger", "primary", "success", "secondary", "dark"]

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useContext(ThemeContext)
    const toggleMode = () => {
        changeMode(mode === "dark" ?  "light": "dark")
    }
    console.log(mode)
    return (
        <div className="container theme-selector">
            <div className="mode-toggle">
                <img 
                onClick={toggleMode} 
                src={ mode==="dark" ? darkIcon :lightIcon} 
                alt="dark light mode" />
            </div>
            <div className="theme-links">
                {
                    themeColors.map((color) => (
                        <span
                            onClick={() => {
                                changeColor(color)
                            }}
                            key={color}
                            className={`bg-${color}`}>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}