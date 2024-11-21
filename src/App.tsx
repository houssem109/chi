import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Programs from "./pages/home/components/programs";
import ProjectsPage from "./components/projetpage/ProjectsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login"  element={<Login />} />
                <Route  path="/Programs" element={<Programs/>} />
                <Route path="/projetpage" element={<ProjectsPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
