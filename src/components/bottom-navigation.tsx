import React, {useState,useEffect, startTransition, useMemo } from "react";
import {BottomNavigation, Icon, useNavigate} from "zmp-ui"
import { useLocation} from "react-router-dom";
import {useVirtualKeyboardVisible} from "../hooks"

const BottomNav: React.FunctionComponent = () => {
    const [activeTab, setActiveTab] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();
    const keyboardVisible = useVirtualKeyboardVisible();

    useEffect(() => {
      const path = location.pathname;
      switch (path) {
        case "/":
          setActiveTab("home");
          break;
        case "/search":
          setActiveTab("search");
          break;
        case "/news_page":
          setActiveTab("news");
          break;
        case "/cart":
          setActiveTab("cart");
          break;
        case "/user":
          setActiveTab("user");
          break;
        default:
          setActiveTab("home"); 
      }
    }, [location.pathname]);

    const changeNavigation = (key:string) => {
      setActiveTab(key);
      switch(key) {
        case "home":
          navigate("/");
          break;
        case "search":
          navigate("/search");
          break;
        case "news":
          navigate("/news_page");
          break;
        case "cart":
          navigate("/cart");
          break;
        case "user":
          startTransition(() => navigate("/user"))
          break;
        default:
          navigate("/");
          break;
      }
    }

    const BOTTOM_NAVIGATION_PAGES = ["/","/search" , "/news_page", "/cart", "/user"];

    const noBottomNav = useMemo(() => {
      return BOTTOM_NAVIGATION_PAGES.includes(location.pathname) && 
      !(location.pathname === "/search" && keyboardVisible)
    }, [location.pathname]);
  
    if (!noBottomNav || keyboardVisible) {
      return <></>;
    }

    return(
        <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => changeNavigation(key)}
      >
        <BottomNavigation.Item
          key="home"
          label="Trang chủ"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
        
       
        />
        <BottomNavigation.Item
          label="Tìm kiếm"
          key="search"
          icon={<Icon icon="zi-search" />}
          activeIcon={<Icon icon="zi-search"/>}
         
        />
        <BottomNavigation.Item
          label="Tin tức"
          key="news"
          icon={<Icon icon="zi-more-grid" />}
          activeIcon={<Icon icon="zi-more-grid" />}
         
        />
        <BottomNavigation.Item
          label="Giỏ hàng"
          key="cart"
          icon={<Icon icon="zi-save-to-collection" />}
          activeIcon={<Icon icon="zi-save-to-collection"/>}
          
        />
        <BottomNavigation.Item
          label="Tài khoản"
          key="user"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user"/>}
         
        /> 
      </BottomNavigation>
    )
}

export default BottomNav;