import React, { useState, useEffect } from "react";
import { Box, Text, useNavigate, Grid, Button, Icon, ZBox } from "zmp-ui";
import { News } from "../type";
import news_data from "../mock/news.json";

const NewsItem: React.FunctionComponent = () => {
    const [news] = useState<News[]>(news_data);
    const navigate = useNavigate();
    
    const [temp,setTemp] = useState(2);

    // lấy 6 item mới nhất
    const latestNews = news
        .slice() 
        .sort((a, b) => b.id - a.id) 
        .slice(0, 6); 
    
    const checkWidth = () => {
        if(window.innerWidth <= 299){
            setTemp(1);
        }else{
            setTemp(2);
        }
    }

    useEffect(() => {
        checkWidth();
    }, []);
    
    return (
   
      <Box className="section-container-no-colors">
        <Grid columnSpace="1rem" columnCount={temp}>
        {latestNews.map((news) => (
        
        <Box className="section-container"
            key={news.id}
            onClick={() => navigate(`/news/${news.id}`)}
            style={{
              borderRadius: "8px",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                width: "9em",
                height: "9em",
                backgroundImage: `url(${news.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            ></Box>

            <Box
                style={{ 
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                }}
            >
                {news.date.toLocaleString()}
            </Box>

            <Box>
                <Text
                    size="normal"
                    bold
                    style={{
                        textAlign: "center",
                        whiteSpace: "nowrap", 
                        overflow: "hidden",    
                        textOverflow: "ellipsis",
                        maxWidth: "140px",   
                    }}
                    >
                    {news.title}
                    </Text>
            </Box>
            
        </Box>
            ))}
        </Grid>
    </Box>
  
  );
};

export default NewsItem;
