import * as React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast: React.SFC<{}> = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
    />
  );
};

export function toastError(message: string) {
  if (!message) {
    toast.error("Something went wrong :(");
  } else {
    toast.error(message);
  }
}
