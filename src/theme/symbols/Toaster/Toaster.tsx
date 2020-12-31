import React from "react";
import { ToastContainer, cssTransition } from "react-toastify";
import "./animate.css";

interface ToasterProps {}

export const Zoom = cssTransition({
  enter: "zoomIner",
  exit: "zoomOuter",
});

const Toaster: React.FC<ToasterProps> = () => {
  return (
    <ToastContainer
      autoClose={500}
      hideProgressBar={true}
      pauseOnHover={false}
    />
  );
};

export default Toaster;
