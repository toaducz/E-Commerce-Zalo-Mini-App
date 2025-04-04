import React, {useState} from "react";
import {Box, Modal, Button} from "zmp-ui";

type ModalsPros = {
    popupVisible: boolean;
    setPopupVisible:(visible: boolean) => void;
    dialogVisible: boolean;
    setDialogVisible:(visible: boolean) => void;
}

const Modals: React.FunctionComponent<ModalsPros> = (
    {popupVisible, dialogVisible, setPopupVisible, setDialogVisible}
) => {

    return(
        <div>
            <Modal
                visible = {dialogVisible}
                title =  ""
                onClose={() =>{
                    setDialogVisible(false);
                }}
                actions={[
                    {
                        text: "Okay",
                        close : true,
                    },
                    {
                        text:  "Close",
                        close : true,
                        highLight: true,
                    },
                ]}
                description= "This feature is under development."
            >
            </Modal>

            <Modal 
                visible = {popupVisible}
                title=""
                onClose={() =>{
                    setPopupVisible(false)
                }}
                description= "This feature is under development."
            >
                <Box p = {6}>
                    <Button 
                        fullWidth	
                        onClick={() => {
                            setPopupVisible(false)
                        }}
                        >
                        Confirm
                    </Button>
                </Box>
            </Modal>
        </div>
        
    )
}

export default Modals;