import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainInteraction from "./pages/MainInteraction";
import LiveStream from "./pages/LiveStream";
import PasswordReset from "./pages/PasswordReset";
import Login from "./pages/Login";
import LoginAppGivingDashboard from "./pages/LoginAppGivingDashboard";
import LoginAppDashboard from "./pages/LoginAppDashboard";
import { FunctionComponent, ReactElement, useEffect } from "react";
import { RequireAuth } from "react-auth-kit";
import NotFoundPage from "./pages/NotFoundPage";
import ChurchWebsiteBuilder from "./pages/ChurchWebsiteBuilder";
import ChurchManagement from "./pages/ChurchManagement";
import ChooseStation from "./pages/ChooseStation";
import BuilderDashboard from "./pages/BuilderDashboard";
import WebsiteBuilderDashboard from "./pages/WebsiteBuilderDashboard";
import DashboardDesignSelection from "./pages/DashboardDesignSelection";
import AppBuilderDashboard from "./components/builder/AppBuilderDashboard";
import Family from "./pages/Family";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WebsiteBuilderMain from "./pages/WebsiteBuilderMain";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/maininteraction":
        title = "";
        metaDescription = "";
        break;
      case "/livestream":
        title = "";
        metaDescription = "";
        break;
      case "/passwordreset":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/loginappgivingdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/loginappdashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/maininteraction"
          element={
            <RequireAuth loginPath={"/login"}>
              <MainInteraction />
            </RequireAuth>
          }
        />



        
        <Route
          path="/churchmanagement"
          element={
            <RequireAuth loginPath={"/login"}>
              <ChurchManagement />
            </RequireAuth>
          }
        />
        <Route
          path="/websitebuilder"
          element={
            <RequireAuth loginPath={"/login"}>
              <ChurchWebsiteBuilder />
            </RequireAuth>
          }
        />
        <Route
          path="/websitebuildermain"
          element={
            <RequireAuth loginPath={"/login"}>
              <WebsiteBuilderMain />
            </RequireAuth>
          }
        />
        <Route path="/livestream" element={<LiveStream />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/choosestation" element={<ChooseStation />} />
        <Route
          path="/builderdashboard"
          element={
            <RequireAuth loginPath={"/login"}>
              <BuilderDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/sitebuilderdashboard"
          element={
            <RequireAuth loginPath={"/login"}>
              <WebsiteBuilderDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/appbuilderdashboard"
          element={
            <RequireAuth loginPath={"/login"}>
              <AppBuilderDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/designselection"
          element={
            <RequireAuth loginPath={"/login"}>
              <DashboardDesignSelection />
            </RequireAuth>
          }
        />
        <Route
          path="/loginappgivingdashboard"
          element={<LoginAppGivingDashboard />}
        />
        <Route path="/family" element={<Family />} />
        <Route path="/loginappdashboard" element={<LoginAppDashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer className="text-base font-inter font-medium" />
    </>
  );
}
export default App;
