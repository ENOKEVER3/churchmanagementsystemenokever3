import { FunctionComponent, MouseEventHandler, useCallback } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const PasswordReset: FunctionComponent = () => {

  const resetPassword = useCallback(async (event: any) => {
    const NL : Number = 13;
    if(event.keyCode !== NL)
      return;
      
    const email = event.target.value;
    try {

      // console.log(email);
      const response = await axios.post("/auth/users/reset_password/", {
        email: email
      });
      
      //TODO: password reset
      // console.log(response);
    }
    catch (err) {

    }

  }, []);

  return (
    <div className="relative w-full block flex-col items-end justify-start text-left text-21xl text-black font-public-sans">
      <Header />
      <div className="self-stretch flex-1 [background:linear-gradient(180deg,_#91a8ea,_#fff)] flex flex-row py-[272px] px-0 items-start justify-between md:pt-[150px] md:pb-[150px] md:box-border sm:pt-20 sm:pb-20 sm:box-border">
        <div className="flex-1 flex flex-col py-0 pr-0 pl-[51px] items-start justify-start gap-[50px]">
          <div className="self-stretch relative font-black sm:text-11xl sm:">
            <p className="m-0">{`REQUEST `}</p>
            <p className="m-0">PASSWORD RESET</p>
          </div>
          <div className="self-stretch flex flex-row py-0 pr-[25px] pl-0 items-center justify-center text-3xl text-dimgray-200">
            <div className="flex-1 relative ">
              <p className="m-0">{`Please enter the e-mail address you use to login `}</p>
              <p className="m-0">
                and an e-mail with a reset link will be sent to you.
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-sm-3 font-heading-x-small-600">
            <div className="self-stretch h-[94px] flex flex-col items-start justify-start gap-[12px]">
              <div className="relative w-[53px] h-[18px]">
                <div className="absolute top-[0px] left-[0px] uppercase font-extrabold">
                  eMAIL
                </div>
              </div>
              <div className="rounded-lg bg-white box-border h-[58px] flex flex-row py-0 px-[31px] items-center justify-center border-[1px] border-solid border-lightgray-200 md:w-[350px] md:pl-[31px] md:box-border sm:w-[300px]">
                <input
                  className="[border:none] font-medium font-open-sanstext-base bg-[transparent] self-stretch relative text-dimgray-200 text-left flex items-center w-[630px] shrink-0 [outline:none] md:flex-1"
                  type="email"
                  placeholder="Enter your here"
                  onKeyDown={resetPassword}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordReset;
