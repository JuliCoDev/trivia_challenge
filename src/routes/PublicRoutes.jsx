import Home from "../pages/Home/Home"
import Questions from "../pages/Questions/Questions";

const VIEW_HOME = {
    path: "/",
    element : <Home/>
}

const VIEW_QUESTIONS = {
    path: "questions",
    element : <Questions/>
}

const PublicRoutes =  [VIEW_HOME, VIEW_QUESTIONS];
export default PublicRoutes;