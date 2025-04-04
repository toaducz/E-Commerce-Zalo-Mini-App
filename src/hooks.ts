import { useState, useEffect } from "react";

export function useVirtualKeyboardVisible() {
    const [visible, setVisible] = useState(false);
    const originalScreen = window.innerHeight;
    useEffect(() => {
      const detectKeyboardOpen = () => {
        setVisible(window.innerHeight + 320 < originalScreen);
      };
      window.addEventListener("resize", detectKeyboardOpen);
      return () => {
        window.removeEventListener("resize", detectKeyboardOpen);
      };
    }, []);
  
    return visible;
  }