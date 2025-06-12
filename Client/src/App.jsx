import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ViewProfile from "./pages/ViewProfile";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import AllMembers from "./pages/AllMembers";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetails";
import JobBoard from "./pages/JobBoard";
import JobDetails from "./pages/JobDetails"
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { checkLogin } from "./redux/authSlice";
import handcuffs from "../src/assets/images/handcuffs.png";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.token) {
      const checkToken = async () => {
        const loginToken = user.token.split(",")[0];
        dispatch(checkLogin(loginToken));
      };
      checkToken();
    }
  }, []);

  return (
    <>
      <div className="bg-blue-200 h-scroll">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/view-profile/:id" element={<ViewProfile />} />
            <Route path="/all-members" element={<AllMembers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event-details/:id" element={<EventDetails />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resource-details/:id" element={<ResourceDetail />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
