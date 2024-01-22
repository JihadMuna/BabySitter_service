import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import SignupBabysitters from "./components/SignupBabySitters";
import SignupParents from "./components/SignupParents";

function App() {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const navigateTo = (path) => {
    console.log("Navigating to:", path);
  };

  const onClose = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(false);

    console.log("Modal closed");
  };

  return (
    <Router>
      <>
        <Header
          setSignupModalOpen={setSignupModalOpen}
          setLoginModalOpen={setLoginModalOpen}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/log-in"
            element={
              <Login
                isLoginModalOpen={isLoginModalOpen}
                onClose={onClose}
                navigateTo={navigateTo}
              />
            }
          />

          <Route
            path="/sign-up"
            element={
              <Signup
                isSignupModalOpen={isSignupModalOpen}
                onClose={onClose}
                navigateTo={navigateTo}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/signup-parents" element={<SignupParents />} />
          <Route path="/signup-babysitters" element={<SignupBabysitters />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
