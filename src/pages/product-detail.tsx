import React, { useState, useEffect, startTransition, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Page, Box, Text, Button, Stack, Center, Spinner } from "zmp-ui";
import HeaderProduct from "../header/product-header";
import Currency, {CurrencyContext} from "../components/currency";

const ProductDetail: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cart, setCart] = useState<any[]>([]);
  const [flower, setFlower] = useState<any>();
  // const [rate, setRate] = useState(1);
  // const [symbol, setSymbol] = useState("₫");
  const currencies = useContext(CurrencyContext)

  if(!currencies){
    return(<div>Loading</div>)
  }

  useEffect(() => {
    console.log("Exchange rate in productDetail :", currencies);
  }, [currencies]);

  const fado = "URL"

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    minimumFractionDigits: 0,
  });

  const headers = new Headers({
    

  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => { 
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    console.log("lấy giỏ hàng bên product: ")
    console.log(cart)
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          fado + '/api/admin/products/' + id,
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

        setFlower([data]);

        // console.log(flower[0])
      } catch (error) {
        console.error("Error fetching data:", error);
        setFlower([]);
      }
    };


    fetchProducts();
  }, []);


  if (!flower) {
    return <Center intrinsic><Spinner></Spinner></Center>;
  }

  const addToCart = () => {
    setCart((prev) => {
      const updatedCart = [...prev, flower];
      return updatedCart;
    });
    startTransition(() => navigate("/cart"));
  };

  const checkAvailable = () => {
    if (flower[0].stock !== 0) {
      return "Còn hàng";
    }
    return "Hết hàng";
  };

  return (
    <Page hideScrollbar={true}>

      <HeaderProduct title={flower[0].descriptions?.[1]?.name ?? "Không có tên"} />
      <Page className="page">
        <Stack>
          <Center className="section-container-product-detail">
            <Box
              className="section-container"
              style={{
                width: "20rem",
                height: "20em",
                backgroundImage: `url(${fado + flower[0].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            ></Box>
          </Center>
          <Stack className="section-container-product-detail" space="1rem">

            <Text size="xLarge" bold>
              {flower[0].descriptions?.[1]?.name ?? "Không có tên"}
            </Text>
            <Text size="normal" color="primary">
              {formatter.format(flower[0].price * currencies) + "₫"}
            </Text>
          </Stack>
          <Box className="section-container-product-detail">
            <Button onClick={addToCart} fullWidth>
              {/* onClick={addToCart} */}
              Thêm vào giỏ hàng
            </Button>
          </Box>
        </Stack>

        <Stack>
          <Box className="section-container-product-detail">
            <Text size="normal">Trạng thái còn hàng: {checkAvailable()}</Text>
            <Text size="normal">SKU: {flower[0].sku}</Text>
          </Box>
        </Stack>
      </Page>
      <Currency/>
    </Page>
  );
};

export default ProductDetail;
