import { BrowserRouter , Route, Routes } from "react-router-dom"
import PublicRoutes from "./PublicRoutes"

const MainRoutes = () =>{
    
    return(
        <BrowserRouter>
            <Routes>
                {   
                    
                    PublicRoutes.map(route => {
                        const {path , element} = route;
                        return(
                            <Route key={path} path={path} element={element}/>
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;