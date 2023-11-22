import {ReactElement} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Router = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Home</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
