import React, { useState, useEffect, startTransition } from "react";
import { Box, Text, useNavigate, Grid } from "zmp-ui";


const BrandsItem: React.FunctionComponent = () => {
  const [brands, setBrands] = useState<any>();
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const [temp, setTemp] = useState(2);
  const [language,setLanguage] = useState("3");

  const fado = "URL"

  // let lan = "";
  // useEffect(() => {
  //   if (lan === "en") {
  //     setLanguage("0");
  //   } else {
  //     setLanguage("1");
  //   }
  // },[]);

  const headers = new Headers({
    
    
  });

  const checkWidth = () => {
    if (window.innerWidth <= 299) {
      setTemp(3);
    } else {
      setTemp(4);
    }
  };

  useEffect(() => {
    checkWidth();
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          fado + '/api/admin/brands',
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

        setBrands([...data.data]);

        // console.log(categories)

        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    

    fetchCategories();
  }, []);

  const searching = (data: string) => {
    startTransition(() =>
      navigate(`/search-results?query=${encodeURIComponent(data)}`)
    );
  };

  if (loading) {
    return <Text>Đang tải dữ liệu...</Text>;
  }

  return (
    <Box className="section-container-no-colors">
      <Grid columnSpace="0.4rem" columnCount={temp}>
        {brands.map((cate) => (
          <Box
            className="section-container-no-colors"
            key={cate.id}
            // onClick={() => searching(cate.descriptions[1].title)}
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
                width: "4em",
                height: "4em",
                backgroundImage: `url(${fado + cate.image})`,
                backgroundSize: "contain", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
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
                {/* {cate.descriptions[1].title} */}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandsItem;
