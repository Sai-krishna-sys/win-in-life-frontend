
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import SpecialSchool from "./components/SpecialSchool";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <SpecialSchool />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function AdminRouteTest() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#ffffff",
        color: "#111111",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>ADMIN LOGIN ROUTE WORKS</h1>

      <p>
        React Router is successfully loading the admin route.
      </p>

      <a href="/">
        ← Back to Website
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ================= ADMIN LOGIN TEST ================= */}
        <Route
          path="/admin/login"
          element={<AdminRouteTest />}
        />

        {/* Temporary /login route */}
        <Route
          path="/login"
          element={<AdminRouteTest />}
        />

        {/* ================= ADMIN DASHBOARD ================= */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        {/* ================= FALLBACK ================= */}
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <h1>404 - Page Not Found</h1>

              <a href="/">
                ← Back to Website
              </a>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

