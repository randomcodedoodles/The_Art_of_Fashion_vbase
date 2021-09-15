import { Fragment, useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";

function ScrollToTop (props) { 
    
    const { history, children } = props; //or {location:pathname}
    const location = useLocation(); //or {pathname}

    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo({ 
            left: (document.body.scrollWidth - window.innerWidth) / 2 , 
            top: 0,
            behavior: "smooth"
        });
      });
      return () => {
        unlisten();
      }
    }, [location.pathname]); //or [] or props.location.pathname
  
    return <Fragment>{children}</Fragment>; //or return {children}; but must be wrapped in withRouter
  }
  
  export default withRouter(ScrollToTop); //opt if return <></>