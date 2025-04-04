import React from "react";
import {Box,Grid,useNavigate, Center, Icon, Text} from "zmp-ui";

const CartProduct: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return(
        <Box className="header"
        >   <Center>
            <Grid columnSpace="5.5rem"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px",
                borderRadius: "8px",
            }}
            >
                <Box px={2}
                    style={{
                        width: "2rem", 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}

                    onClick={() => navigate(-1)}
                >
                    <Icon 
                        icon="zi-arrow-left"
                    ></Icon>
                </Box>
                <Box 
                     style={{
                        flex: 1, 
                        textAlign: "center",
                      }}
                >
                    <Text>Giỏ hàng</Text>
                </Box>
                <Box px={2}
                    style={{
                        width: "2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}               
                    // onClick={() => navigate("/search")}
                >
                    {/* <Icon icon="zi-call-solid"></Icon> */}
                </Box>
            </Grid>
            </Center>
        </Box>
    )
};

export default CartProduct;