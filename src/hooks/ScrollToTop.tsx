import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop: React.FC<{
  history: any;
}> = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollToTop);
