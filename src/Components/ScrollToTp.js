import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollToTop() {
    const { pathname } = useLocation();

  //it renders whenever we redirect to a different page and make scroll to top automatically
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }