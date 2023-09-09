import {
  FunctionComponent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { useLocation, useNavigate } from "react-router-dom";
import PortalDrawer from "./PortalDrawer";
import HamburgerMenu from "./HamburgerMenu";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage    = location.pathname === "/login";
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    signOut();
    navigate("/");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);


  const openHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(true);
  }, []);

  const closeHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(false);
  }, []);

  useEffect(() => {
    function autoCloseHamburgerMenu() {
      if (!isHamburgerMenuOpen) return;
      const md = window.matchMedia(`(max-width: 960px)`);
      setHamburgerMenuOpen(md.matches);
    }

    window.addEventListener("resize", autoCloseHamburgerMenu);
  });

  return (
    <>
      <header className="self-stretch bg-night-ghost-text flex flex-row py-0 px-5 items-center justify-between text-left text-17xl text-royalblue-100 font-rasa md:flex md:gap-[0px] md:pr-5 md:box-border">
        <div className="w-[110px] h-24 flex flex-row items-center justify-between [@media(max-width:1024px)]:flex-1 md:gap-[0px]">
          <a className="[text-decoration:none] flex-1 flex flex-row py-[39px] px-0 items-center justify-between text-[inherit] md:flex-1 md:self-stretch md:h-auto md:text-[70%]">
            <b className="flex-1 relative uppercase">LOGO</b>
          </a>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] [@media(min-width:1024px)]:hidden flex-row items-center justify-between flex"
            onClick={openHamburgerMenu}
          >
            <img className="relative w-11 h-11" alt="" src="assets/images/icon.svg" />
          </button>
        </div>
        <div className="h-4 flex flex-row py-0 pl-0 box-border items-center justify-start text-mini text-primary-black-100 font-overlock md:w-0 md:h-0 md:flex-row md:gap-[0px] md:pr-0 md:box-border">
          <div className="flex flex-row py-0 px-3 box-border items-center justify-between gap-[60px] [@media(max-width:1024px)]:hidden sm:pr-0 sm:box-border">
            <div className="flex flex-row items-start justify-start hover:cursor-pointer hover:[text-decoration:underline]">
              <b className="relative capitalize hover:cursor-pointer">
                Pricing
              </b>
            </div>
            <div className="w-[70px] flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
              <b className="relative capitalize md:">
                products
              </b>
              <div className="overflow-hidden flex flex-col py-1 px-0 items-center justify-center hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                <img
                  className="relative w-[8.94px] h-[5.03px]"
                  alt=""
                  src="assets/images/vector2.svg"
                />
              </div>
            </div>
            <div className="w-20 flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
              <b className="relative capitalize md:">
                use cases
              </b>
              <div className="overflow-hidden flex flex-col py-1 px-0 items-center justify-center hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                <img
                  className="relative w-[8.94px] h-[5.03px]"
                  alt=""
                  src="assets/images/vector2.svg"
                />
              </div>
            </div>
            <div className="w-20 flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
              <b className="relative capitalize">Resources</b>
              <div className="w-[8.94px] h-3.5 overflow-hidden shrink-0 flex flex-col py-1 px-0 box-border items-center justify-between hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                <img
                  className="relative w-[8.94px] h-[5.03px]"
                  alt=""
                  src="assets/images/vector2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row py-0.5 px-0 items-center justify-end gap-[20px] [@media(max-width:1024px)]:hidden md:w-0 md:gap-[0px] md:items-center md:justify-center">
          <div className="group">
            <button
              className={`cursor-pointer py-2.5 px-0 bg-[transparent] rounded-lg box-border w-[110px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100 group-hover:bg-royalblue-100 ${isLoginPage ? "hidden" : ""}`}
              onClick={isAuthenticated() ? onSignOutClick : onLoginButtonClick}
            >
              <b className="self-stretch flex-1 relative text-sm capitalize flex font-overlock text-royalblue-100 text-center items-center justify-center group-hover:text-white">
                {isAuthenticated() ? "Log out" : "Login"}
              </b>
            </button>
          </div>
          <div className={`group ${isAuthenticated() || isRegisterPage ? "hidden" : ""}`}>
            <button className="cursor-pointer py-2.5 px-0 bg-[transparent] box-border rounded-lg flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100 group-hover:bg-royalblue-100" onClick={onSignUpClick}>
              <b className="relative text-sm capitalize flex font-overlock text-royalblue-100 text-center items-center justify-center w-[122px] shrink-0 group-hover:text-white">
                Sign Up
              </b>
            </button>
          </div>
          <div className="group">
            <button className="cursor-pointer py-2.5 px-0 bg-[transparent] box-border rounded-lg flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100 group-hover:bg-royalblue-100">
              <b className="relative text-sm capitalize flex font-overlock text-royalblue-100 text-center items-center justify-center w-[122px] shrink-0 group-hover:text-white">
                Book A Demo
              </b>
            </button>
          </div>
        </div>
      </header>
      {isHamburgerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeHamburgerMenu}
        >
          <HamburgerMenu onClose={closeHamburgerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;
