import React, { useEffect, useState, startTransition } from "react";
import { Box, Text, Page, Icon, useNavigate, Grid, Button } from "zmp-ui";
import { useLocation } from "react-router-dom";
import flowers_data from "../mock/flowers.json";
import { Flower } from "../type";

const SearchResults: React.FunctionComponent = () => {
  const location = useLocation();
  const [results, setResults] = useState<Flower[]>([]);
  const [flowers] = useState<Flower[]>(flowers_data);
  const [keyword, setKeyword] = useState("flowers_data");
  const [temp, setTemp] = useState(2);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query")?.toLowerCase() || "";
    setKeyword(query)
    const filteredFlowers = flowers.filter((flower) =>
      flower.name.toLowerCase().includes(query)
    );
    setResults(filteredFlowers);
  }, [location.search]);

  const checkWidth = () => {
    if (window.innerWidth <= 299) {
      setTemp(1);
    } else {
      setTemp(2);
    }
  };

  useEffect(() => {
    checkWidth();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Tổng số trang
  const totalPages = Math.ceil(results.length / itemsPerPage);

  return (
    <Page className="section-container">
      <Box onClick={() => navigate(-1)}><Icon icon="zi-arrow-left"></Icon></Box>
      <Box>
        <Box>
          <Text bold size="xLarge" style={{ marginBottom: "16px", textAlign: "center" }}>
            Kết quả tìm kiếm: {keyword}
          </Text>
        </Box>
        {results.length > 0 ? (
          <Grid columnSpace="1rem" columnCount={temp} >
            {currentItems.map((flower) => (

              <Box className="section-container"
                key={flower.id}
                onClick={() => navigate(`/product/${flower.id}`)}
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
                    backgroundImage: `url(${flower.source})`,
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
                    {flower.name}
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
                    {flower.price.toLocaleString() + "đ"}
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      size="small"
                      icon={<Icon icon="zi-plus-circle" />}
                    // onClick={}
                    >
                    </Button>
                  </Box>
                </Grid>
              </Box>
            ))}</Grid>) : (
          <Text>Không tìm thấy kết quả nào.</Text>
        )}
      </Box>
      <Box style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button disabled={currentPage === 1} onClick={prevPage}>Trang trước</Button>
        <Text >Trang {currentPage} / {totalPages}</Text>
        <Button disabled={currentPage === totalPages} onClick={nextPage}>Trang sau</Button>
      </Box>
    </Page>
  );
};

export default SearchResults;
