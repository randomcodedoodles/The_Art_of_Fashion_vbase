import { Fragment, useEffect } from "react";
import { useLocation, withRouter, useHistory } from "react-router-dom";

function ScrollToTop (props) { 
    
    //const history = useHistory(); //ok alternatively 
    const { history, children } = props; //or {location:pathname} //ok
    const location = useLocation(); //or const { pathname } = useLocation()

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
    }, [location.pathname]); //or [] or props.location.pathname //or [pathname]
  
    return <Fragment>{children}</Fragment>; //or return {children}; but must be wrapped in withRouter
  }
  
  export default withRouter(ScrollToTop); //opt if return <></>