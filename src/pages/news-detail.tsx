import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Page, Box, Text, Button,Stack, Center } from "zmp-ui";
import { News } from "../type";
import news_data from "../mock/news.json";
import Header_product from "../header/product-header";


const NewsDetail: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news] = useState<News[]>(news_data);
  const product = news_data.find((news) => news.id === Number(id));

  if (!product) {
    return <Text>Lỗi</Text>;
  }

  return (
    <Page hideScrollbar={true}>
      <Header_product title={"LOGO"}/>
      <Page className="page"
        
      >
        <Stack>
          <Stack className="section-container-product-detail" space="1rem">
              <Text size="xLarge" bold
                style={{ 
                  textAlign: "center"
                 }}
              >
                  {product.title}
              </Text>      
              <Text size="normal" color="primary">
                  {product.content}
              </Text>    
          <Center className="section-container-product-detail"> 
              <Box className="section-container"
                  style={{
                      width: "20rem",
                      height: "20em",
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                      marginBottom: "8px",
                  }}
              >
              </Box>
            </Center>
          </Stack>
        </Stack>
      </Page>
    </Page>
  );
};

export default NewsDetail;
