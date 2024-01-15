import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import DetailPage from "./Pages/DetailPage";
import AddPage from "./Pages/AddPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="/AddPage" element={<AddPage/>} />
        <Route path="/DetailPage/:id" element={<DetailPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
