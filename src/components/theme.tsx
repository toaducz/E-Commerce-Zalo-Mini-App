import  React from "react";
import {Switch, Box, Button,Text, useTheme} from "zmp-ui";

const Theme: React.FunctionComponent = () =>{
    const [theme,setTheme] = useTheme();
    const themeChange = () => {
        if(theme === "light"){
            setTheme({mode: "dark"});
            document.documentElement.setAttribute("data-theme", "dark");
            return;
        }
        setTheme({mode:"light"});
        document.documentElement.setAttribute("data-theme", "light");
        return
    };
    return(
        <Switch className="switch-theme" checked={theme === "dark"} onClick={themeChange} />
    )
}

export default Theme;