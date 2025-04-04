import React from "react";
import { Route,BrowserRouter } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages/index";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import Setting from "../pages/setting"
import BottomNav from "./bottom-navigation";
import Phones from "../pages/phones";
import ShareButton from "../pages/share-button";
import ChatButton from "./chat-button";
import News_page from "../pages/news-page";
import Search from "../pages/search";
import Cart from "../pages/cart";
import ProductDetail from "../pages/product-detail";
import NewsDetail from "../pages/news-detail";
import SearchResults from "../pages/search-results";
import Checkout from "../pages/checkout";
import Currency,{CurrencyContext} from "./currency";
import AllProduct from "../pages/all-products";


const MyApp = () => {
  return (
    
    <RecoilRoot>

      <App>
     
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              <Route path="/setting" element={<Setting></Setting>}></Route>
              <Route path="/phone" element={<Phones></Phones>}></Route>
              <Route path="/share" element={<ShareButton></ShareButton>}></Route>
              <Route path="/news_page" element={<News_page></News_page>}></Route>
              <Route path="/search" element={<Search></Search>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/search-results" element={<SearchResults />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/all-products" element={<AllProduct></AllProduct>}></Route>
            </AnimationRoutes>
            {/* <Currency/> */}
            <BottomNav /> 
            <ChatButton /> 
            
          </ZMPRouter>
          
        </SnackbarProvider>
       
      </App>
      
    </RecoilRoot>
   
  );
};
export default MyApp;
