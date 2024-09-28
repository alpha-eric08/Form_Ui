import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";
import Profilepage from "./profile";
import Edit_Profiile from "./edit-profile";
import NotFound from "./notfound";

export const rootRoutes = createBrowserRouter (
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />} >
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profilepage />} />
                <Route path="edit_profile" element={<Edit_Profiile />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </>
    )
)