import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/register/register";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
