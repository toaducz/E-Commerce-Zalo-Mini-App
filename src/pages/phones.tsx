import React from "react";
import {Tabs, Page,List, Avatar, Icon,Stack} from "zmp-ui";

const Phones: React.FunctionComponent = () => {


    return (
        <Page className="page">
            <div className="section-container">
            <Tabs id = "tabs-contact" defaultActiveKey = "tab1" bottomBar = {false} >
                <Tabs.Tab key = "tab1" label ="Recently" >         
                    <List id = "contact-list">
                        <List.Item
                            prefix = {<Avatar online = {true}></Avatar>}
                            title = {"User"}
                            suffix = {<Icon icon="zi-chat"></Icon>}
                            subTitle= "testing"
                        />
                        <List.Item
                            onClick={() => {

                            }}
                            prefix = {<Avatar online = {true}></Avatar>}
                            title = {"User"}
                            suffix = {<Icon icon="zi-chat"></Icon>}
                            subTitle= "testing"
                        />
                        <List.Item
                            onClick={() => {
                                
                            }}
                            prefix = {<Avatar online = {true}></Avatar>}
                            title = {"User"}
                            suffix = {<Icon icon="zi-chat"></Icon>}
                            subTitle= "testing"
                        />
                        <List.Item
                            onClick={() => {
                                
                            }}
                            prefix = {<Avatar online = {true}></Avatar>}
                            title = {"User"}
                            suffix = {<Icon icon="zi-chat"></Icon>}
                            subTitle= "testing"
                        />
                        
                    </List>
                </Tabs.Tab>
                <Tabs.Tab key = "tab2" label="Contacts">
                    Tab2 contents
                </Tabs.Tab>
                <Tabs.Tab key = "tab3" label = "Something...">
                    Tab3 contents
                </Tabs.Tab>
            </Tabs>
            </div>
        </Page>
    );
}

export default Phones;