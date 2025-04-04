  import React, { useState, useEffect, startTransition } from "react";
  import { Box, Text, useNavigate, Grid } from "zmp-ui";


  const CategoreisItem: React.FunctionComponent = () => {
    const [categories, setCategories] = useState<any>();
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();
    const [temp, setTemp] = useState(2);
    const [language,setLanguage] = useState("1");

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
        setTemp(1);
      } else {
        setTemp(2);
      }
    };

    useEffect(() => {
      checkWidth();
      const fetchCategories = async () => {
        try {
          const response = await fetch(
            fado + '/api/admin/categories?page[number]=1',
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

          setCategories([...data.data]);

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
          {categories.map((cate) => (
            <Box
              className="section-container-no-colors"
              key={cate.id}
              onClick={() => searching(cate.descriptions[1].title)}
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
                  backgroundImage: `url(${fado + cate.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "100px",
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
                  {cate.descriptions[1].title}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    );
  };

  export default CategoreisItem;
