import { FunctionComponent, useState, useCallback } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

const ChurchWebsiteBuilder: FunctionComponent = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(true);
  }, []);

  const closeHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(false);
  }, []);

  const onGetStartedButtonClick = useCallback(() => {
    navigate("/loginappgivingdashboard");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-end justify-start text-center text-base ">
      <Header />
      <div className="text-night-ghost-text self-stretch flex-1 [background:linear-gradient(28.44deg,_#0d43df,_#fff)] overflow-hidden flex flex-col items-center justify-between text-left text-mid md:pt-0 md:box-border">
        <div className="self-stretch flex-1 flex flex-row py-[100px] px-[60px] box-border items-center justify-center max-w-[1200px] m-auto md:flex-col md:gap-[0px] md:pl-[60px] md:pr-[60px] md:box-border md:m-auto">
          <div className="flex-1 flex flex-col pt-0 px-0 pb-[30px] items-start justify-start gap-[37px] md:h-auto md:gap-[10px] md:items-center md:justify-center md:flex-[unset] md:self-stretch sm:flex-1 sm:gap-[0px] sm:pb-[30px] sm:box-border">
            <div className="relative uppercase font-extrabold">
              Church Website Builder
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-[32px] md:flex-1 md:items-start md:justify-between md:gap-[0px]">
              <div className="flex-1 relative font-black">
                <p className="m-0">{`We ensure that your digital `}</p>
                <p className="m-0">{`platform is visually stunning, `}</p>
                <p className="m-0">accessible, and user-friendly.</p>
              </div>
            </div>
            <div className="self-stretch relative text-5xl ">
              <p className="m-0">
                Together, let's build a foundation that will
              </p>
              <p className="m-0"> stand the test of time.</p>
            </div>
            <div className="flex flex-row py-0 px-px items-center justify-center gap-[10px] text-base sm:flex-col sm:gap-[18px]">
              <button
                className="cursor-pointer [border:none] py-2.5 px-0 bg-night-ghost-text rounded-lg w-[110px] flex flex-row box-border items-center justify-center"
                onClick={onGetStartedButtonClick}
              >
                <b className="relative capitalize font-rasa text-gray-100 text-center">
                  Get started
                </b>
              </button>
              <a className="[text-decoration:none] w-[187px] h-[52px] flex flex-row items-center justify-center gap-[3px] text-[inherit] md:flex-1 md:text-[70%]">
                <button  className=" [border:none] p-0 bg-night-ghost-text relative rounded-81xl shadow-[1px_1px_4px_1px_rgba(0,_0,_0,_0.1)] w-[49px] h-[49px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[16.9px] left-[17.33px] w-3.5 h-3.5 overflow-hidden"
                    alt=""
                    src="assets/images/icon10.svg"
                  />
                </button>
                <div className="flex-1 flex flex-row py-0 pr-0 pl-0.5 items-center justify-between">
                  <div className="flex-1 relative flex items-center h-[52px] hover:cursor-pointer hover:[text-decoration:underline]">
                    How it works
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col py-4 px-0 items-center justify-center relative gap-[10px] ml-[-42px] md:hidden md:pl-0 md:pr-0 md:box-border md:m-auto">
            <img
              className="relative w-[531px] h-[514px] object-cover z-[0]"
              alt=""
              src="assets/images/imac-24-inch1@2x.png"
            />
            <img
              className="absolute my-0 mx-[!important] h-[35.34%] w-[19.42%] top-[38.28%] right-[7.51%] bottom-[26.38%] left-[73.07%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
              alt=""
              src="assets/images/rectangle1@2x.png"
            />
          </div>
        </div>
        <Sponsors />
      </div>
      <div className="font-rasa self-stretch flex-1 [background:linear-gradient(#fff,_#fff),_#f0f0f2] flex flex-row items-center justify-center text-primary-black-100">
        <div className="self-stretch flex-1 flex flex-col py-[80px] px-0 items-center justify-start gap-[56px]">
          <div className="self-stretch flex flex-row py-0 px-[62px] items-center justify-center">
            <div className="flex flex-col py-0 px-1 items-center justify-center gap-[40px]">
              <div className="self-stretch relative uppercase font-extrabold flex items-center justify-center h-4 shrink-0">
                World-class church websites builder
              </div>
              <div className="self-stretch relative text-21xl font-extrabold flex items-center h-10 shrink-0">
                <span className="[line-break:anywhere]">
                  <p className="m-0">Beautifully built with ease</p>
                </span>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[30px] flex-wrap text-left ">
            <div className="w-[300px] h-[548.82px] flex flex-col items-center justify-center gap-[15px] text-center text-gray-100">
              <div className="relative bg-lavender w-[300px] h-[421.82px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_143px)] left-[76.5px] bg-night-ghost-text shadow-[22px_13px_16px_rgba(0,_0,_0,_0.25)] w-56 h-[286px] overflow-hidden">
                  <img
                    className="absolute top-[152px] left-[163px] w-[61px] h-[61px] overflow-hidden"
                    alt=""
                    src="assets/images/remixiconsfilldesigndragdropfill.svg"
                  />
                  <img
                    className="absolute top-[92px] left-[102px] w-[91px] h-[91px] overflow-hidden"
                    alt=""
                    src="assets/images/remixiconsfillmediaimage2fill1.svg"
                  />
                  <div className="absolute top-[220px] left-[101px] font-extrabold">{`Drag & Drop`}</div>
                </div>
              </div>
              <div className="self-stretch relative text-5xl text-primary-black-100">
                <p className="m-0">{`Drag & drop church website`}</p>
                <p className="m-0">builder</p>
              </div>
            </div>
            <div className="w-[380px] h-[617px] flex flex-col items-center justify-center gap-[15px] text-7xs-7">
              <div className="relative bg-lightpink w-[380px] h-[543px] overflow-hidden shrink-0">
                <div className="absolute h-[63.72%] w-9/12 top-[6.08%] right-[-3.69%] bottom-[30.2%] left-[28.69%] bg-night-ghost-text shadow-[30px_11px_24px_rgba(0,_0,_0,_0.25)] overflow-hidden">
                  <div className="absolute top-[239.39px] left-[398.27px] rounded-[50%] [background:linear-gradient(262.61deg,_#7341f2,_#5a45fd)] [filter:blur(58.2px)] w-[137.15px] h-[137.15px] opacity-[0.3]" />
                  <img
                    className="absolute top-[64px] left-[217px] w-[142px] h-[261px] object-cover"
                    alt=""
                    src="assets/images/httpsunsplashcomphotos3mwdi5-6hrc@2x.png"
                  />
                  <div className="absolute h-[9.86%] w-full top-[0%] right-[0%] bottom-[90.14%] left-[0%] bg-primary-black-100 overflow-hidden">
                    <div className="absolute top-[calc(50%_-_10.04px)] left-[28.5px] flex flex-row items-center justify-start gap-[2.85px]">
                      <div className="relative rounded-7xs-7 [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[19.95px] h-[19.95px] overflow-hidden shrink-0">
                        <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.56px)] w-[19.95px] h-[19.95px]" />
                      </div>
                      <div className="relative rounded-7xs-7 bg-gray-800 w-[66.26px] h-[19.95px]" />
                    </div>
                  </div>
                  <b className="absolute top-[13.54px] left-[444.59px] ">
                    CONTACT US
                  </b>
                  <b className="absolute top-[14.25px] left-[68.75px] text-[8.55px] ">
                    LIVING STONE CHURCH
                  </b>
                  <div className="absolute h-[3.84%] w-[3.27%] top-[4.59%] left-[102.31%] uppercase inline-block opacity-[0.9]">
                    Blog
                  </div>
                  <div className="absolute h-[1.92%] w-[7%] top-[4.66%] left-[93%] uppercase inline-block opacity-[0.9]">
                    Sermon
                  </div>
                  <div className="absolute h-[1.92%] w-[8%] top-[4.66%] left-[79.67%] uppercase inline-block opacity-[0.9]">
                    About us
                  </div>
                  <div className="absolute h-[1.92%] w-[5%] top-[4.66%] left-[69.33%] uppercase text-right inline-block opacity-[0.9]">
                    Home
                  </div>
                  <b className="absolute top-[128.96px] left-[32.44px] text-[17.1px] uppercase text-gray-500">
                    <p className="m-0">{`THE benefits of joining `}</p>
                    <p className="m-0">our church</p>
                  </b>
                  <div className="absolute top-[190.94px] left-[33.5px] text-[8.55px] lowercase text-dimgray-100">
                    <p className="m-0">
                      find fulfillment and joy by joining us on
                    </p>
                    <p className="m-0">Sunday service and weekly service.</p>
                  </div>
                  <div className="absolute top-[229.06px] left-[33.86px] rounded-[3.56px] [background:linear-gradient(262.61deg,_#7341f2,_#5a45fd)] w-[67.69px] h-[20.66px]">
                    <b className="absolute top-[calc(50%_-_4.28px)] left-[calc(50%_-_15.32px)] ">
                      Join us today!
                    </b>
                  </div>
                  <div className="absolute top-[116.13px] left-[33.86px] uppercase font-medium text-mediumslateblue">
                    The bELIEVING CHURCH
                  </div>
                  <div className="absolute top-[299.6px] left-[37.42px] flex flex-row items-end justify-start gap-[8.55px]">
                    <img
                      className="relative w-[8.55px] h-[8.55px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilllogosfacebookboxfill1.svg"
                    />
                    <img
                      className="relative w-[8.55px] h-[8.55px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilllogosgooglefill1.svg"
                    />
                    <img
                      className="relative w-[8.55px] h-[8.55px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilllogostwitterfill1.svg"
                    />
                    <img
                      className="relative w-[8.55px] h-[8.55px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilllogosinstagramfill1.svg"
                    />
                  </div>
                </div>
                <div className="absolute h-[55.2%] w-[34.6%] top-[41.44%] right-[63.95%] bottom-[3.37%] left-[1.44%] bg-night-ghost-text shadow-[12px_22px_24px_rgba(0,_0,_0,_0.25)] overflow-hidden text-[5.91px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[138.42px] h-[30.64px] overflow-hidden"
                    alt=""
                    src="assets/images/frame-75.svg"
                  />
                  <b className="absolute top-[12.92px] left-[9.97px] text-[8.86px] ">
                    LIVING STONE CHURCH
                  </b>
                  <img
                    className="absolute top-[129.19px] left-[5.17px] w-[128.36px] h-[141.74px] object-cover"
                    alt=""
                    src="assets/images/httpsunsplashcomphotos3mwdi5-6hrc1@2x.png"
                  />
                  <b className="absolute top-[58.69px] left-[9.97px] text-[11.81px] uppercase text-gray-500">
                    <p className="m-0">THE benefits of</p>
                    <p className="m-0">joining our church</p>
                  </b>
                  <div className="absolute top-[41.71px] left-[9.97px] uppercase font-medium text-mediumslateblue">
                    The bELIEVING CHURCH
                  </div>
                  <div className="absolute top-[90.06px] left-[9.97px] text-[5.17px] lowercase text-dimgray-100">
                    <p className="m-0">
                      find fulfillment and joy by joining us on
                    </p>
                    <p className="m-0">Sunday service and weekly service.</p>
                  </div>
                  <div className="absolute top-[109.63px] left-[9.97px] rounded-[3.69px] [background:linear-gradient(262.61deg,_#7341f2,_#5a45fd)] w-[47.98px] h-[14.03px]">
                    <b className="absolute top-[calc(50%_-_4.43px)] left-[calc(50%_-_15.87px)] ">
                      Join us today!
                    </b>
                  </div>
                  <div className="absolute top-[277.94px] left-[calc(50%_-_30.75px)] flex flex-row items-end justify-start gap-[8.86px]">
                    <img
                      className="relative w-[8.86px] h-[8.86px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilllogosfacebookboxfill2.svg"
                    />
                    <img
                      className="relative w-[8.86px] h-[8.86px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilllogosgooglefill2.svg"
                    />
                    <img
                      className="relative w-[8.86px] h-[8.86px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilllogostwitterfill2.svg"
                    />
                    <img
                      className="relative w-[8.86px] h-[8.86px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilllogosinstagramfill2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-5xl text-primary-black-100 text-center">
                <p className="m-0">Modern, mobile-friendly website</p>
                <p className="m-0">designs</p>
              </div>
            </div>
            <div className="w-[300px] h-[466.82px] flex flex-col items-center justify-center gap-[15px] text-[4.63px] ">
              <div className="relative bg-cornflowerblue w-[300px] h-[421.82px] overflow-hidden shrink-0">
                <div className="absolute top-[36px] left-[22px] bg-primary-black-100 shadow-[-12px_13px_13px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col items-start justify-start">
                  <div className="relative w-[416.34px] h-[28.91px] overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_8.58px)] right-[23.47px] rounded-[4.63px] bg-royalblue-100 w-[41.06px] overflow-hidden flex flex-row py-[4px] px-[5px] box-border items-center justify-center">
                      <div className="relative font-semibold">
                        Button
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_8.58px)] left-[calc(50%_-_56.4px)] flex flex-row items-start justify-start gap-[1.16px]">
                      <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4px] px-[5px] items-center justify-center gap-[2.31px]">
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                        <div className="relative font-semibold">
                          Link
                        </div>
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                      </div>
                      <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4px] px-[5px] items-center justify-center gap-[2.31px]">
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                        <div className="relative font-semibold">
                          Link
                        </div>
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                      </div>
                      <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4px] px-[5px] items-center justify-center gap-[2.31px]">
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                        <div className="relative font-semibold">
                          Link
                        </div>
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                      </div>
                      <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4px] px-[5px] items-center justify-center gap-[2.31px]">
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                        <div className="relative font-semibold">
                          Link
                        </div>
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                      </div>
                      <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4px] px-[5px] items-center justify-center gap-[2.31px]">
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                        <div className="relative font-semibold">
                          Link
                        </div>
                        <img
                          className="relative w-[4.63px] h-[6.94px] hidden"
                          alt=""
                          src="assets/images/container.svg"
                        />
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_8.55px)] left-[23.13px] flex flex-row items-center justify-start gap-[2.31px]">
                      <div className="relative rounded-[4.63px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[16.19px] h-[16.19px] overflow-hidden shrink-0 hidden">
                        <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(2.89px)] w-[16.19px] h-[16.19px]" />
                      </div>
                      <div className="relative rounded-[4.63px] bg-gray-800 w-[53.78px] h-[16.19px]" />
                    </div>
                  </div>
                  <div className="w-[416.34px] flex flex-col py-[27px] px-[90px] box-border items-center justify-start gap-[23.13px] text-center text-[27.76px]">
                    <div className="self-stretch flex flex-col items-center justify-start gap-[11.56px]">
                      <div className="self-stretch relative font-semibold">
                        Build your landings in minutes
                      </div>
                      <div className="relative text-[5.2px] font-medium text-gray-500 inline-block w-[156.13px]">
                        The night is dark and full of terrors. What is dead may
                        never die. And now his watch is ended. All men must die.
                      </div>
                    </div>
                    <div className="relative w-[266.86px] h-[118.83px] overflow-hidden shrink-0 text-left text-[3.69px] ">
                      <div className="absolute top-[15.03px] left-[0px] rounded-[11.56px] bg-gray-800 w-[158.44px] h-[89.05px] overflow-hidden" />
                      <div className="absolute top-[15.03px] left-[108.42px] rounded-[11.56px] bg-gray-800 w-[158.44px] h-[89.05px] overflow-hidden" />
                      <div className="absolute top-[0px] left-[27.76px] rounded-[11.56px] bg-night-ghost-text w-[211.35px] h-[118.83px] overflow-hidden">
                        <div className="absolute top-[-0.29px] left-[0.14px] rounded-[2.34px] [background:linear-gradient(177.26deg,_#2352d5,_rgba(35,_82,_213,_0))] w-[211.35px] h-[115.94px]">
                          <div className="absolute top-[calc(50%_-_57.97px)] left-[calc(50%_-_111.46px)] rounded-[2.31px] bg-night-ghost-text w-[241.2px] h-[142.51px] overflow-hidden">
                            <img
                              className="absolute top-[0.29px] left-[5.64px] w-[312.95px] h-[124.69px] object-cover"
                              alt=""
                              src="assets/images/httpsunsplashcomphotos53m8pcxqqe4@2x.png"
                            />
                            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[221.67px] h-[124.69px] overflow-hidden">
                              <div className="absolute top-[110.72px] left-[calc(50%_-_74.7px)] bg-night-ghost-text w-[149.51px] h-[0.92px] overflow-hidden" />
                              <div className="absolute top-[110.72px] left-[calc(50%_-_74.7px)] bg-crimson-100 w-[33.71px] h-[0.92px] overflow-hidden" />
                              <div className="absolute top-[15.47px] left-[18.01px] font-medium">
                                Pastor Fred
                              </div>
                              <div className="absolute top-[9.7px] left-[196.62px] flex flex-row items-center justify-start gap-[1.5px]">
                                <div className="relative rounded-[50%] bg-crimson-100 w-[1.85px] h-[1.85px]" />
                                <div className="relative font-extrabold">
                                  Live
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[9.81px] left-[9.7px] flex flex-row items-center justify-start gap-[2.05px] text-[4.37px]">
                              <img
                                className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                                alt=""
                                src="assets/images/remixiconslinesystemarrowleftsline1.svg"
                              />
                              <div className="relative font-semibold">
                                Faithful God
                              </div>
                            </div>
                            <img
                              className="absolute top-[108.64px] left-[26.55px] w-[5.08px] h-[5.08px] overflow-hidden"
                              alt=""
                              src="assets/images/remixiconsfillmediarepeatonefill1.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="absolute top-[calc(50%_-_14.89px)] right-[90.64px] w-[30.07px] h-[30.07px]"
                          alt=""
                          src="assets/images/play.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[303px] left-[30px] rounded-[10.19px] bg-night-ghost-text w-[132.5px] h-[106px] overflow-hidden text-21xl text-primary-black-100 ">
                  <div className="absolute top-[calc(50%_-_26.5px)] left-[calc(50%_-_26px)] flex flex-col items-center justify-center gap-[15px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/remixiconsfilldesigntboxfill.svg"
                    />
                    <div className="relative font-semibold">
                      Aa
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-5xl text-primary-black-100 text-center">
                Customisable Design
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-aliceblue h-[1131px] overflow-hidden shrink-0 flex flex-row py-[30px] px-0 box-border items-center justify-between text-primary-black-100 ">
        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center gap-[30px] flex-wrap">
          <div className="self-stretch flex flex-col pt-[100px] px-0 pb-[40px] items-start justify-start">
            <div className="overflow-hidden flex flex-col items-center justify-center gap-[19px]">
              <div className="relative uppercase font-extrabold">
                Top website features for churches
              </div>
              <div className="relative text-21xl font-extrabold text-left">
                <p className="m-0">{`Do more with your `}</p>
                <p className="m-0">church website</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[30px] flex-wrap">
            <div className="self-stretch w-[330px] flex flex-col items-start justify-start gap-[72.82px]">
              <div className="relative bg-gray-800 w-[330px] h-[364.09px]" />
              <div className="relative bg-night-ghost-text w-[330px] h-[364.09px]" />
              <div className="relative w-[330px] h-[364px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] right-[-0.18px] w-[330px] h-[364px] object-cover"
                  alt=""
                  src="assets/images/httpsunsplashcomphotos3xmcv5mjzpw@2x.png"
                />
              </div>
              <div className="relative bg-gray-800 w-[330px] h-[364.09px]" />
            </div>
            <div className="self-stretch flex flex-row pt-5 px-0 pb-0 items-start justify-start">
              <div className="self-stretch w-[330px] flex flex-col items-start justify-start gap-[72px]">
                <div className="relative bg-night-ghost-text w-[330px] h-[364.09px] overflow-hidden shrink-0" />
                <div className="relative bg-gray-800 w-[330px] h-[364.09px] overflow-hidden shrink-0" />
                <div className="relative w-[330px] h-[327px] overflow-hidden shrink-0">
                  <div className="absolute top-[-28.18px] left-[0.09px] w-[330px] h-[355.38px]">
                    <img
                      className="absolute top-[28.18px] left-[0px] w-[330px] h-[355.38px] object-cover"
                      alt=""
                      src="assets/images/httpsunsplashcomphotosgdokeynofne@2x.png"
                    />
                  </div>
                </div>
                <div className="relative bg-night-ghost-text w-[330px] h-[364.09px] overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-royalblue-100 overflow-hidden flex flex-col py-[150px] px-0 items-center justify-start text-21xl text-night-ghost-text">
        <div className="relative w-[525.56px] h-[156.38px]">
          <div className="absolute top-[0px] left-[36px] font-black">
            Tools for your ministry
          </div>
          <div className="absolute top-[65px] left-[33.89px] text-3xl flex items-center w-[433px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Everything you need to know, grow, and</p>
              <p className="m-0">engage your church in-person and online.</p>
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-night-ghost-text flex flex-col py-[50px] px-0 items-center justify-start gap-[100px] text-primary-black-100">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <div className="self-stretch relative uppercase font-extrabold">
            World-class church websites BUILDER
          </div>
          <div className="self-stretch relative text-21xl font-extrabold">
            <p className="m-0">{`It's as simple as creating, reaching, `}</p>
            <p className="m-0">connecting, and growing.</p>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col py-5 px-10 items-start justify-center gap-[20px] text-left text-17xl ">
          <div className="self-stretch flex flex-col py-1 px-0 items-start justify-start gap-[10px]">
            <b className="self-stretch relative flex items-center h-9 shrink-0">
              Why us?
            </b>
            <div className="self-stretch relative text-base text-dimgray-300 flex items-center h-5 shrink-0">
              No complex interface, no stress, no code required.
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center gap-[20px] flex-wrap text-base">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] flex items-center w-[71.47px] h-5">
                    Autosave
                  </b>
                  <div className="absolute top-[51.18px] left-[20px] text-xs text-dimgray-300 flex items-center w-[145.36px] h-[15px]">
                    Changes are auto-saved
                  </div>
                </div>
              </div>
              <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] flex items-center w-[81.22px] h-5">
                    Dark mode
                  </b>
                  <div className="absolute top-[51.19px] left-[20px] text-xs text-dimgray-300 flex items-center w-[125.4px] h-[15px]">
                    Light or dark anytime
                  </div>
                </div>
              </div>
              <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] flex items-center w-[92.37px] h-5">
                    SEO friendly
                  </b>
                  <div className="absolute top-[51.19px] left-[20px] text-xs text-dimgray-300 flex items-center w-[118.93px] h-[15px]">
                    Great search results
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] flex items-center w-[105.75px] h-5">
                    Domain
                  </b>
                  <div className="absolute top-[51.18px] left-[20px] text-[12.5px] text-dimgray-300 flex items-center w-[113.86px] h-[15px]">
                    or yourdomain.com
                  </div>
                </div>
              </div>
              <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] ">
                    HTTPS
                  </b>
                  <div className="absolute top-[51.19px] left-[20px] text-xs text-dimgray-300 flex items-center w-[104.37px] h-[15px]">
                    Secured with SSL
                  </div>
                </div>
              </div>
              <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] flex items-center w-[92.29px] h-5">
                    AWS hosted
                  </b>
                  <div className="absolute top-[51.19px] left-[20px] text-xs text-dimgray-300 flex items-center w-[81.9px] h-[15px]">{`Fast & Secure`}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="rounded-3xs overflow-hidden flex flex-col items-start justify-start">
                <div className="relative rounded-3xs bg-whitesmoke-200 w-[300px] h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] flex items-center w-[99.87px] h-5">
                    Multiple sites
                  </b>
                  <div className="absolute top-[51.18px] left-[20px] text-xs text-dimgray-300 flex items-center w-[101.11px] h-[15px]">
                    One account
                  </div>
                </div>
              </div>
              <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] flex items-center w-[127.72px] h-5">
                    No code required
                  </b>
                  <div className="absolute top-[51.19px] left-[20px] text-xs text-dimgray-300 flex items-center w-[113.48px] h-[15px]">
                    Super simple setup
                  </div>
                </div>
              </div>
              <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                  <b className="absolute top-[19px] left-[20px] flex items-center w-[109.65px] h-5">
                    Easy Analytics
                  </b>
                  <div className="absolute top-[51.19px] left-[20px] text-xs text-dimgray-300 flex items-center w-[142.11px] h-[15px]">
                    Track visitors and views
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-night-ghost-text flex flex-row items-center justify-center text-[38px] ">
        <div className="flex-1 flex flex-col py-[50px] px-5 items-center justify-center gap-[20px]">
          <div className="self-stretch flex flex-row items-center justify-center max-w-[680px]">
            <b className="flex-1 relative ">
              FAQs
            </b>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-between max-w-[680px] text-left text-base">
            <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-2.5 items-center justify-center gap-[10px]">
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                <div className="relative font-medium">
                  What is us?
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/svg1.svg"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                <div className="relative font-medium">
                  Can I use my own domain ?
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/svg1.svg"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                <div className="relative font-medium">
                  Can I use my own domain ?
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/svg1.svg"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                <div className="relative font-medium">
                  How much does it cost?
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/svg1.svg"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                <div className="relative font-medium">
                  Can I create an e-commerce website ?
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/svg1.svg"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                <div className="relative font-medium">
                  Do I still need website hosting?
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/svg1.svg"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                <div className="relative font-medium">
                  Do you offer customer support?
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/svg1.svg"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                <div className="relative font-medium">
                  Can I cancel my subscription at any time?
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/svg1.svg"
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

export default ChurchWebsiteBuilder;
