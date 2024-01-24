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
import LoginBabysitters from "./components/LoginBabySitters";
import LoginParents from "./components/LoginParents";
import ParentsPage from "./components/ParentsPage";
import BabySittersPage from "./components/BabySittersPage";
import ParentProfile from "./components/ParentProfile";
import BabySitterProfile from "./components/BabySitterProfile";
import ParentEdit from "./components/ParentEdit";
import BabySitterEdit from "./components/BabySitterEdit";

function App() {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );

  const handleLogin = (user) => {
    console.log("handleLogin called with user:", user);

    setLoggedIn(true);
    setUsername(user.username);

    localStorage.setItem("loggedIn", JSON.stringify(true));
    localStorage.setItem("username", user.username);

    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
  };

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
          loggedIn={loggedIn}
          username={username}
          onLogout={handleLogout}
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
                onLogin={handleLogin}
              />
            }
          />
          <Route
            path="/log-in"
            element={
              <Login
                isLoginModalOpen={isLoginModalOpen}
                onClose={onClose}
                navigateTo={navigateTo}
                onLogin={handleLogin}
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
                onLogin={handleLogin}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route
            path="/signup-parents"
            element={<SignupParents onClose={onClose} />}
          />
          <Route
            path="/signup-babysitters"
            element={<SignupBabysitters onClose={onClose} />}
          />
          <Route path="/babysitters-search" element={<BabySittersPage />} />
          <Route path="/job-search" element={<ParentsPage />} />
          <Route
            path="/login-parents"
            element={<LoginParents onLogin={handleLogin} onClose={onClose} />}
          />
          <Route
            path="/login-babysitters"
            element={
              <LoginBabysitters onLogin={handleLogin} onClose={onClose} />
            }
          />
          <Route path="/parents/:id" element={<ParentProfile />} />
          <Route path="/babysitters/:id" element={<BabySitterProfile />} />
          <Route path="/parents/edit" element={<ParentEdit />} />
          <Route path="/babysitters/:id/edit" element={<BabySitterEdit />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
