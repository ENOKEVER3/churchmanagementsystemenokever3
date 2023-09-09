import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFoundPage: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-base text-black font-heading-x-small-600">
      <Header />
      <div className="self-stretch [background:linear-gradient(180deg,_#91a8ea,_#fff)] h-[574.38px] flex flex-col pt-[126px] pb-[268px] pr-[228px] pl-[148px] box-border items-start justify-start md:pt-20 md:pb-[100px] md:pr-20 md:pl-[90px] md:box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[11px]">
          <div className="relative uppercase font-extrabold flex items-center w-[39.01px] h-[18px] shrink-0">
            404
          </div>
          <div className="relative text-21xl font-black flex items-center w-[677.37px] h-[65px] shrink-0 md:self-stretch md:w-auto sm:text-16xl">
            Oops! Page not found.
          </div>
          <div className="self-stretch flex flex-row pt-0 pb-[0px] pr-[11px] pl-0 items-start justify-start text-3xl md:self-stretch md:w-auto">
            <div className="flex-1 relative md:flex-1">
              <p className="m-0">This page doesn’t exist or was removed!</p>
              <p className="m-0">Try going back to home.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;