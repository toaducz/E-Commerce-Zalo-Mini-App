import React, { useState, useEffect, useMemo, startTransition } from "react";
import { Box, Text, useNavigate, Grid, Button, Icon, Input, Page } from "zmp-ui";
import CartHeader from "../header/cart-header";

const AllProduct: React.FunctionComponent = () => {
  const [flowers, setFlowers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const navigate = useNavigate();
  const [inputPage, setInputPage] = useState<any>("");

  const fado = "url"

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          fado + `/api/admin/products?page[number]=${page}`,
          {
            method: "GET",
            headers: {
           
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setFlowers((prevFlowers) => [...prevFlowers, ...data.data]);
        setPerPage(data.per_page);
        setTotalPages(Math.ceil(data.total / data.per_page));
        setLoading(false);
        setInputPage(page);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.scrollHeight === target.scrollTop + target.clientHeight &&
      !loading && page < totalPages
    ) {
      setPage((prevPage) => prevPage + 1); 
      console.log(page)
    }
  };

  const handleJumpToPage = () => {
    const targetPage = parseInt(inputPage, 10);
    if (targetPage >= 1 && targetPage <= totalPages) {
      setPage(targetPage);
    } else {
      alert(`Vui lòng nhập số trang từ 1 đến ${totalPages}.`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(e.target.value.replace(/\D/, ""));
  };

  if (loading && flowers.length === 0) {
    return <Text>Đang tải dữ liệu...</Text>;
  }

  return (
    <Page className="page" onScroll={handleScroll}>
      <CartHeader />
      <Box className="section-container-no-colors">
        <Box my={4} textAlign="center">
          <Text size="xLarge" bold>
            TẤT CẢ SẢN PHẨM
          </Text>
        </Box>
        <Grid columnSpace="1rem" columnCount={2}>
          {flowers.map((flower) => (
            <Box
              key={flower.id}
              className="section-container"
              onClick={() => startTransition(() => navigate(`/product/${flower.id}`))}
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
              <Text
                size="normal"
                bold
                style={{
                  textAlign: "center",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {flower.descriptions?.[1]?.name ?? "Không có tên"}
              </Text>
              <Grid columnCount={2} columnSpace="1rem" style={{ marginTop: "0.5rem" }}>
                <Box>{formatter.format(flower.price) + "₫"}</Box>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button size="small" icon={<Icon icon="zi-plus-circle" />} />
                </Box>
              </Grid>
            </Box>
          ))}
        </Grid>

        {loading && <Text>Đang tải thêm...</Text>}
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        Bạn đang ở trang:
        <Input
          value={inputPage}
          placeholder=""
          onChange={handleInputChange}
          style={{ width: "3rem", textAlign: "center" }}
        />
        <Button size="small" onClick={handleJumpToPage}>
          Đi
        </Button>
      </Box>
    </Page>
  );
};

export default AllProduct;
