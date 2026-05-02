import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeComponent({children}){
    const [darkTheme, setDarkTheme] = useState(false)

    //Change the class name of the doc, applying the css to all pages.
    useEffect(() => {
        document.documentElement.className = darkTheme ? "dark":"light"
    }, [darkTheme]);

    return(
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeComponent;