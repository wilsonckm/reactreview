import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NavBar from "./layout/NavBar";
import FooterBanner from "./layout/FooterBanner";
import ImageDetail from "./layout/ImageDetail";
import NotFound from "./pages/NotFound";
import zion from "./assets/images/zion.jpg";
import centralpark from "./assets/images/centralpark.jpg";

function App() {
  const images = [
    {
      id: 1,
      Image: centralpark,
      Title: "Central Park",
      Description: " Welcome to Central Park",
    },
    {
      id: 2,
      Image: zion,
      Title: "Zion",
      Description: " Welcome to Zion",
    },
  ];

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/image/:id" element={<ImageDetail images={images} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterBanner />
    </BrowserRouter>
  );
}

export default App;
