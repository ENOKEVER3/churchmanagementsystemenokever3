import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import AnchorLink from "./basic/AnchorLink";

type HamburgerMenuType = {
  onOpen?: () => void;
  onClose?: () => void;
};

const HamburgerMenu: FunctionComponent<HamburgerMenuType> = ({ onClose }) => {

  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

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

  const [isFlowIn, setIsFlowIn] = useState(true);

  const animate = useCallback(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }
    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);

      }
    };
  }, []);

  useEffect(() => {
    // console.log(isFlowIn);
      if(isFlowIn)
        animate();
  });

  const animateClose = useCallback(() => {
    setIsFlowIn(false);
    animate();
    onClose?.();
  }, []);

  return (
    <div
      className={`relative bg-night-ghost-text w-full h-[339px] flex flex-col px-[37px] box-border items-start justify-center gap-[10px] [&.animate]:animate-[0.5s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-h-[90%] overflow-auto text-left text-mini text-primary-black-100 font-overlock`}
      data-animate-on-scroll
    >
      <div className="self-stretch flex h-[70px] flex-row items-center justify-between text-17xl text-royalblue-100 font-rasa">
        <a className="[text-decoration:none] w-[110px] flex flex-row px-0 box-border items-center justify-end relative gap-[10px] text-[inherit]">
          <button  className="[border:none] p-0 bg-[transparent] my-0 mx-[!important] absolute top-[12px] left-[0px] rounded-sm w-4 overflow-hidden shrink-0 flex flex-row items-start justify-center z-[1]"
            onClick={animateClose}>
            <img className="relative w-4 h-4" alt="" src="assets/images/vector10.svg" />
          </button>
          <b className="relative uppercase z-[0]">LOGO</b>
        </a>
        <div className="flex flex-row gap-[10px] h-full justify-center items-center">
        <div className="group">
        <button className=" py-2.5 px-0 bg-[transparent] rounded-lg box-border w-[110px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100 group-hover:bg-royalblue-100"
          onClick={isAuthenticated() ? onSignOutClick : onLoginButtonClick}>
          <b className="self-stretch flex-1 relative text-xs capitalize flex font-open-sanstext-royalblue-100 text-center items-center justify-center group-hover:text-white">
            {isAuthenticated() ? "Log out" : "Login"}
          </b>
        </button>
        </div>
        <div className={`group ${isAuthenticated() ? "hidden" : ""}`}>
        <button className=" py-2.5 px-0 bg-[transparent] rounded-lg box-border w-[110px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100 group-hover:bg-royalblue-100 [@media(max-width:470px)]:hidden"
          onClick={onSignUpClick}>
          <b className="self-stretch flex-1 relative text-xs capitalize flex font-open-sanstext-royalblue-100 text-center items-center justify-center group-hover:text-white">
            Sign Up
          </b>
        </button>
        </div>
        </div>
      </div>
      <div className="self-stretch h-2.5 flex flex-row py-2.5 px-0 box-border items-center justify-center">
        <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-gainsboro-200" />
      </div>
      <div className="self-stretch flex-1 flex flex-col py-[5px] pr-[31px] pl-0 items-start justify-between">
        <div className="self-stretch flex-1 flex flex-col py-0 items-start justify-between">
          <div className="cursor-pointer flex flex-row items-start justify-start self-stretch py-[4px] hover:[background-color:#efefef] pl-3">
            <b className="relative capitalize">
              <AnchorLink text="Pricing"/>
            </b>
          </div>
          <div className="cursor-pointer flex flex-row items-start justify-start self-stretch py-[4px] hover:[background-color:#efefef] pl-3">
            <b className="relative capitalize">
              <AnchorLink text="Products"/>
            </b>
          </div>
          <div className="cursor-pointer flex flex-row items-start justify-start self-stretch py-[4px] hover:[background-color:#efefef] pl-3">
            <b className="relative capitalize">
              <AnchorLink text="Use Cases"/>
            </b>
          </div>
          <div className="cursor-pointer flex flex-row items-start justify-start self-stretch py-[4px] hover:[background-color:#efefef] pl-3">
            <b className="relative capitalize">
              <AnchorLink text="Resources"/>
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch h-2.5 flex flex-row py-2.5 px-0 box-border items-center justify-center">
        <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-gainsboro-200" />
      </div>
      <div className={`cursor-pointer flex flex-row items-start justify-start self-stretch py-[4px] hover:[background-color:#efefef] pl-[6px] [@media(min-width:470px)]:mb-4 ${isAuthenticated() ? "mb-4" : ""}`}>
        <b className="relative capitalize">
          <AnchorLink text="Book a demo" />
        </b>
      </div>
      <div className={`cursor-pointer flex flex-row items-start justify-start self-stretch py-[4px] hover:[background-color:#efefef] pl-[6px] mb-4  [@media(min-width:470px)]:hidden ${isAuthenticated() ? "hidden" : ""}`} onClick={onSignUpClick}>
        <b className="relative capitalize">
          <AnchorLink text="Sign Up" />
        </b>
      </div>
    </div>
  );
};

export default HamburgerMenu;