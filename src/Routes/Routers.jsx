import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurGallery from "../Pages/OurGallery/OurGallery/OurGallery";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/ServicePage/ServicePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "gallery",
                element: <OurGallery />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/service",
                element: <Service />
            }
        ]
    }
]);