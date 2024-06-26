import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import Register from "./components/Register";
import Login from "./components/Login";
import "./styles/app.css";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import LecturePreview from "./pages/LecturePreview";
import LectureReview from "./pages/LectureReview";
import LinkPage from "./pages/LinkPage";
import ReviewPage from "./pages/ReviewPage";
import ThankYouPage from "./pages/ThankYouPage";
import { I18nextProvider } from "react-i18next";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("token")) || false
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(Boolean(token));
  }, []);

  // eslint-disable-next-line no-undef
  globalThis.isAuthenticated = isAuthenticated;
  // eslint-disable-next-line no-undef
  globalThis.setIsAuthenticated = setIsAuthenticated;

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Router>
          <Navbar
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<LandingPage />} />

            {isAuthenticated ? (
              <>
                {/* Page for displaying the user's profile */}
                <Route path="/profile" element={<UserPage />} />

                {/* Page that displays all of the Lectures of a course */}
                <Route path="/lecture/:id" element={<LecturePreview />} />

                {/* Page that displays all of the reviews of a Lecture */}
                <Route path="/reviews/:id" element={<LectureReview />} />

                {/* Page for displaying the QR-code for reviewing a Lecture */}
                <Route path="/link/:id" element={<LinkPage />} />

                {/* Page for displaying the QR-code for reviewing a Lecture */}
                <Route path="/link/:id" element={<LinkPage />} />
              </>
            ) : (
              <>
                {/* Page for registering a new user */}
                <Route
                  path="/signup"
                  element={<Register setIsAuthenticated={setIsAuthenticated} />}
                />

                {/* Page for logging in a user */}
                <Route
                  path="/login"
                  element={<Login setIsAuthenticated={setIsAuthenticated} />}
                />
              </>
            )}

            {/* Lecture reviewing page for Students */}
            <Route path="/review/:id" element={<ReviewPage />} />

            {/* Thank you page */}
            <Route path="/thank-you" element={<ThankYouPage />} />

            {/* Error page */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </I18nextProvider>
  );
};

export default App;
