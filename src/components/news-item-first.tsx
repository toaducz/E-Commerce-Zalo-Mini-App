import React, { useState } from "react";
import { Box, Text, useNavigate, Grid, Button, Icon, ZBox } from "zmp-ui";
import { News } from "../type";
import news_data from "../mock/news.json";

const NewsItemFirst: React.FunctionComponent = () => {
  const [news] = useState<News[]>(news_data);
  const navigate = useNavigate();

  // lấy 6 item mới nhất
  const latestNews = news
    .slice() 
    .sort((a, b) => b.id - a.id) 
    .slice(0,1); 
    
  return (
   
      <Box>
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
                width: "17rem",
                height: "10em",
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
                        maxWidth: "160px",   
                    }}
                    >
                    {news.title}
                    </Text>
            </Box>
            
        </Box>
            ))}
    </Box>
  
  );
};

export default NewsItemFirst;
