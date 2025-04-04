import React from "react";
import {Box,Grid,useNavigate, Center, Icon} from "zmp-ui";

const HeaderHome: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return(
        <Box className="header"
        >   <Center intrinsic={true}>
            <Grid columnSpace="8rem"
            style={{
                borderRadius: "8px",
                padding: "8px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}
            >
                <Box

                    onClick={() => navigate("/search")}
                >
                    <Icon icon="zi-search"></Icon>
                </Box>
                <Box>
                    LOGO
                </Box>
                <Box
                    // onClick={() => navigate("/search")}
                >
                    <Icon icon="zi-call-solid"></Icon>
                </Box>
            </Grid>
            </Center>
        </Box>
    )
};

export default HeaderHome;