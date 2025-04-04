import React, { Suspense,useState } from "react";
import { List, Page, Icon, useNavigate, useSnackbar, Text, Center, Box, Button} from "zmp-ui";
import SwiperAutoPlay from "../components/swipper";
// import UserCard from "../components/user-card";
// import Grids from "../components/grid";
// import ButtonToast from "../components/button-toast";
// import ShareButton from "./share-button";
import ProductItem from "../components/product-item";
import NewsItem from "../components/news-item";
import HeaderHome from "../header/home-header";
import BrandsItem from "../components/brand-item";


const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Page hideScrollbar={true}>

    <HeaderHome/>

      <Page className="page" restoreScrollOnBack = {true}>
        
        {/* <Header title="My Zalo App"/> */}
        <div className="section-container">
          <SwiperAutoPlay/>
        </div>

        <Box my={4} textAlign="center" >
          <Text
            size="xLarge"
            bold
          > SẢN PHẨM MỚI</Text>
        </Box>

        <div >
          <ProductItem/>
        </div>

        <Box>
          <Center intrinsic>
            <Button onClick={() => navigate("/all-products")}
            
              >Tất cả sản phẩm...
            </Button>
          </Center>
        </Box>

        <Box my={4} textAlign="center" >
          <Text
            size="xLarge"
            bold
          > TIN TỨC MỚI </Text>
        </Box>

        <div >
          <NewsItem/>
        </div>

        {/* <div className="section-container">
          <List>
            <List.Item
              onClick={() => navigate("/about")}
              suffix={<Icon icon="zi-arrow-right" />}
            >
              <div>About</div>
            </List.Item>
            <List.Item
              onClick={() => navigate("/")}
              suffix={<Icon icon="zi-arrow-right" />}
            >
              <div>User</div>
            </List.Item>

            <List.Item
              onClick={() => navigate("/share")}
              suffix={<Icon icon="zi-arrow-right" />}
            >
              <div>Share</div>
            </List.Item>
            
          </List>
        </div> */}
        {/* <div className="section-container">
          <ButtonToast/>
        </div> */}
        <Box my={4} textAlign="center" >
          <Text
            size="xLarge"
            bold
          > BRANDS ?</Text>
        </Box>

          <BrandsItem/>
      </Page>
    </Page>
  );
};

export default HomePage;
