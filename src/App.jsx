import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "@pages/LandingPage";
import About from "@pages/About";
import Footer from "@components/Footer";
import Header from "@components/Header";
import HeaderAbout from "@components/HeaderAbout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <LandingPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/hakkimizda"
        element={
          <>
            <HeaderAbout />
            <About />
            <Footer />
          </>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
