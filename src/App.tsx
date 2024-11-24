import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/register/register";

import Login from "./components/login/login";
import Programs from "./pages/home/components/programs";
import ProjectsPage from "./components/projetpage/ProjectsPage";
import QuestionPage from "./components/question/QuestionPage";
import RegisterSPage from "./components/register/registerSPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login"  element={<Login />} />
                <Route  path="/Programs" element={<Programs/>} />
                <Route path="/projetpage" element={<ProjectsPage/>} />
                <Route path="/QuestionPage" element={<QuestionPage/>} />
                <Route path="/registerSPage" element={<RegisterSPage/>} />

            </Routes>
        </Router>
    );
}

export default App;
