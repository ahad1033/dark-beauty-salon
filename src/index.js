import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routers";
import "../src/assets/CSS/lunar.css";
import "../src/assets/CSS/magnific-popup.css";
import "../src/assets/CSS/menu.css";
import "../src/assets/CSS/flaticon.css";
import "../src/assets/CSS/bootstrap.min.css";
import "../src/assets/CSS/style.css";
import "../src/assets/CSS/custom.css";
import "../src/assets/CSS/animate.css";
import "../src/assets/CSS/responsive.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
