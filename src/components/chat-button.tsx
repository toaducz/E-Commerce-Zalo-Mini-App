import React from "react";
import { Button,Box, Icon } from "zmp-ui";

const ChatButton: React.FunctionComponent = () => {
    return(
        <Box mt={6} className="chat-button-overlay">
            <Button 
            size="large" 
            icon={<Icon icon="zi-chat" />}
            // onClick={}
            >
            
            </Button>
      </Box>
    )
};

export default ChatButton;