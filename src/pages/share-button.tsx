import React from "react";
import  { openShareSheet } from "zmp-sdk";
import {Button} from "zmp-ui";

const ShareButton: React.FunctionComponent = () => {
    const share = () =>
        openShareSheet({
            type: "zmp",
            data: {
            title: "Sharing",
            description: "Home page",
            thumbnail: "https://picsum.photos/id/237/200/300",
            },
            success: (res) => {},
            fail: (err) => {},
    });
    return(
        <div className="section-container">
            <Button
                fullWidth
                onClick={share}
            >
                Chia sẻ với bạn bè ngay!
            </Button>
        </div>
        
    )
};

export default ShareButton;