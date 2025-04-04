import React from "react";
import {Page, List, Select, Icon, useSnackbar } from "zmp-ui";


const Sound: React.FunctionComponent = () => {
    const { Option} = Select;
    const {openSnackbar} = useSnackbar();
    const valueSnackbar = (value: String) => {
        let mess = "-1";
        switch(value){
            case "1":
                mess = "Normal";
                break;
            case "2":
                mess = "Rung Rung";
                break;
            case "3":
                mess = "Silent";
                break;
            case "-1":
                mess = "error"
                break;
        }   

        openSnackbar({text : mess, duration:1200});
        return mess;
    }


    return(
        <Select
            onChange = {valueSnackbar} defaultValue = "1" placeholder = ""
            label = "Sound" closeOnSelect={true}
            >
                <Option value = "1" title="Normal" />
                <Option value = "2" title="Vibration?" />
                <Option value = "3" title="Silent" />
        </Select>
    );
}
export default Sound;