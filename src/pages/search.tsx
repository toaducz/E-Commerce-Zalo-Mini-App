import React, { Suspense,useEffect,useState } from "react";
import {Page,Text, Box, useNavigate} from "zmp-ui";
import CategoreisItem from "../components/category-item";
import Header_search from "../header/search-header";

const Search: React.FunctionComponent = () => {

    const navigate = useNavigate();

    return(
        <Page hideScrollbar={true}>
            <Header_search/>
            <Page className="page">
                <Box >
                    <Box className="section-container-no-color"
                        style={{
                            width: "100%",
                            height: "10%",
                            backgroundImage: "url(https://staging-shop.fado.vn/data/banner/bannerhoa.jpg)",
                            backgroundSize: "cover",

                            borderRadius: "8px",
                            marginBottom: "8px", 
                        }}
                    >
                        
                    </Box>
                </Box>
                <Box my={4} textAlign="center" >
                    <Text
                        size="xLarge"
                        bold
                    > </Text>
                </Box>
                 <Box className="section-container">  
                    <CategoreisItem/>
                </Box> 

            </Page>`
        </Page>
    )
};

export default Search;