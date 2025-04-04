import React, { useState, useEffect } from "react";
import { Box, Text, Button, Grid, Icon, Page } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import CartHeader from "../header/cart-header";
import { constSelector } from "recoil";

const Cart: React.FunctionComponent = () => {
  const [cart, setCart] = useState<any[]>([]);
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    // console.log("----------------------------------------------------")
    // console.log("lấy giỏ hàng savedCart: ")
    // console.log(cart)
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    // console.log("----------------------------------------------------")
    // console.log("lấy giỏ hàng: ")
    // console.log(cart)
  }, [cart]);

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item[0].id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    // console.log("Xóa toàn bộ: ")
    // console.log(cart)
    localStorage.removeItem("cart")
  };

  const totalPrice = formatter.format(cart.reduce((total, item) => total + (item[0]?.price || 0), 0));

  return (
    <Page>
      <CartHeader/>
      <Box className="section-container">
        <Text size="xLarge" bold>
          Giỏ hàng
        </Text>
        {cart.length === 0 ? (
          <Text>Giỏ hàng của bạn hiện tại chưa có sản phẩm nào</Text>
        ) : (
          <>
            <Grid columnCount={1} columnSpace="1rem">
              {cart.map((item) => (
                <Box key={item[0].id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  <Grid columnCount={2} columnSpace="1rem">
                    <Box style={{ flex: 1 }}>
                      <Text>{item[0].descriptions?.[1]?.name ?? "Không có tên"}</Text>
                      <Text>{formatter.format(item[0].price)}đ</Text>
                    </Box>
                    <Box style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                       {/* bug */}  
                      <Button
                        size="small"
                        onClick={() => removeFromCart(item[0].id)} 
                      >
                        Xoá
                      </Button>
                    </Box>
                  </Grid>
                </Box>
              ))}
            </Grid>
            <Box style={{ marginTop: "16px", textAlign: "center" }}>
              <Text size="large" bold>
                Tổng cộng: {totalPrice.toLocaleString()}đ
              </Text>
            </Box>
            <Box style={{ marginTop: "16px" }}>

              <Button onClick={() => navigate("/checkout")} fullWidth>
                Tiến hành thanh toán
              </Button>
              <Button onClick={clearCart} fullWidth style={{ marginTop: "8px" }}>
                Xoá tất cả
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Page>
  );
};

export default Cart;
