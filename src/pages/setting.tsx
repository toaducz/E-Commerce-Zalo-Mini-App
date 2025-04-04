import React, {useState} from "react";
import {Page, List, Select, Icon, Box, useNavigate, Modal, Button} from "zmp-ui";
import Theme from "../components/theme";
import Sound from "../components/sound";
import Modals from "../components/Modal";
import Location from "../components/location";
import Date from "../components/date-time";

const Setting: React.FunctionComponent = () =>{ 
    const navigate = useNavigate();
    const [popupVisible, setPopupVisible] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    return(
        
        <Page className="page">

           <Modals
                popupVisible={popupVisible}
                dialogVisible={dialogVisible}
                setPopupVisible={setPopupVisible}
                setDialogVisible={setDialogVisible}
            />
            <div className="section-container">
                <List>
                    <List.Item suffix = {<Theme />}>
                        <div>Dark Mode</div>
                    </List.Item>
                </List>
                <List>
                    <List.Item suffix = {<Location />}>
                        <div>Location</div>
                    </List.Item>
                </List>
            </div>
            <div className="section-container">
                <List>
                    <List.Item >
                        <Sound/>
                    </List.Item>
                </List>
            </div>
            <div className="section-container">
                <List>
                    <List.Item
                        onClick={() => navigate("/form")}
                        suffix = {<Icon icon = "zi-arrow-right"/>}
                    >
                        Profile Update
                    </List.Item>
                </List>
            </div>
            <div className="section-container">
                <List>
                    <List.Item
                        onClick={() => navigate("/form")}
                        suffix = {<Icon icon = "zi-arrow-right"/>}
                    >
                        Profile Update
                    </List.Item>
                    <List.Item
                        onClick={() => navigate("/about")}
                        suffix = {<Icon icon = "zi-arrow-right"/>}
                    >
                        About
                    </List.Item>
                    <List.Item
                        onClick={() => setDialogVisible(true)}
                        suffix = {<Icon icon = "zi-arrow-right"/>}
                    >
                        Survey
                    </List.Item>
                </List>
                
            </div>
            <div className="section-container">
                <Box p = {4}>
                  <Date/>
                </Box>   
                            
            </div>
            <div className="section-container">
                <List>
                    <List.Item
                        // onClick={() => navigate("/form")}
                        suffix = {<Icon icon = "zi-arrow-right"/>}
                    >
                        Date
                    </List.Item>
                </List>
            </div>

        </Page>
    )
}

export default Setting;