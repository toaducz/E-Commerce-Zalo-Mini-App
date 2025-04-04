import React, { useState, useEffect,startTransition } from "react";
import { Box, Text, useNavigate, Grid, Button, Icon, ZBox } from "zmp-ui";


const ProductItem: React.FunctionComponent = () => {
  const [flowers,setFlowers] = useState<any>([]);
  const navigate = useNavigate();
  const [temp,setTemp] = useState(2);
  const [loading, setLoading] = useState(true); 


  // lấy 6 item mới nhất
  // const latestFlowers = flowers
  //   .slice() 
  //   .sort((a, b) => b.id - a.id) 
  //   .slice(0, 6); 

  const fado = "url"

  const headers = new Headers({
  
    
  });

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    minimumFractionDigits: 0,
  });
  
  useEffect(() => {
        checkWidth();
        const fetchProducts = async () => {
          try {
            const response = await fetch(
              fado + '/api/admin/products?page[number]=1',
              {
                method: 'GET',
                headers: headers,
              }
              
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
  
            // data.data.map(cate => {
            //   console.log(cate.descriptions[0].title)
            // })
  
            setFlowers([...data.data]);
  
            // console.log(data.data)
  
            setLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        
  
        fetchProducts();
      }, []);

  const checkWidth = () => {
    if(window.innerWidth <= 299){
      setTemp(1);
    }else{
      setTemp(2);
    }
  };

  
  useEffect(() => {
        checkWidth();
  },[]) 

  if (loading) {
        return <Text>Đang tải dữ liệu...</Text>;
      }
  
    
  return (
   
      <Box className="section-container-no-colors">
        <Grid columnSpace="1rem" columnCount={temp}  >
        {flowers.map((flower) => (
        
          <Box className="section-container"
            key={flower.id}
            onClick={()=>(startTransition(() => navigate(`/product/${flower.id}`)))}
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
                backgroundImage: `url(${fado + flower.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            ></Box>
            <Box>
                    <Text
                    size="normal"
                    bold
                    style={{
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                    }}
                    >
                    {flower.descriptions?.[1]?.name ?? "Không có tên"}
                    </Text>
                </Box>
            <Grid columnCount={2} columnSpace="1rem" 
              style={{ 
                marginTop: "0.5rem",
                marginLeft: "0.2rem"
               }}
            >
                <Box
                  style={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                   }}
                >
                  {formatter.format(flower.price.toLocaleString()) + "₫"}
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end", 
                  }}
                >
                    <Button 
                        size="small" 
                        icon={<Icon icon="zi-plus-circle"/>}
                        // onClick={}
                        
                        >
                
                    </Button>
                </Box>
            </Grid>
          </Box>
        ))}
        </Grid>
      </Box>
  
  );
};

export default ProductItem;
