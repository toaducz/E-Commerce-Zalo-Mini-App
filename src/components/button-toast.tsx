import React from "react";
import {Button} from "zmp-ui"
import { showToast } from "zmp-sdk";

const ButtonToast: React.FunctionComponent = () =>{
    const openToast = async () => {
        try{
            console.log("có toasting nhé")
            await showToast({message:"Testing"});
        }
        catch(error){
            console.log("Toast Error nè: ", error);
        }
    }
    return(
        <div>
            <Button
                onClick={openToast}
                fullWidth
            >
                API Toasting
            </Button>
        </div>
    )
}

export default ButtonToast;