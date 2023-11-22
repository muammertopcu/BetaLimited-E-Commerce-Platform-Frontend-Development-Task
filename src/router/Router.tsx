import {type ReactElement} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "@/screens";

const Router = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
