import React, { Suspense,useState } from "react";
import { List, Page, Icon, useNavigate, useSnackbar, Text, Center, Box,} from "zmp-ui";
import NewsItem from "../components/news-item";
import NewsItemFirst from "../components/news-item-first";

const News_page: React.FunctionComponent = () => {
    const navigate = useNavigate()
    return(
        <Page className="page" hideScrollbar={true}>
            <Box onClick={()=>navigate(-1)}><Icon icon="zi-arrow-left"></Icon></Box>
            <Box mb={4} textAlign="center" >
                <Text
                    size="xLarge"
                    bold
                > TIN TỨC</Text>
            </Box>

            <NewsItemFirst/>


            <NewsItem/>

        </Page>
    )
};

export default News_page;