import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";


const Sponsors: FunctionComponent = () => {

    return (
        <Marquee className="self-stretch relative bg-aliceblue h-[107px] overflow-hidden shrink-0 sm:overflow-hidden sm:mt-5">
            <div className="flex flex-row gap-[40px] items-center h-full w-full">
              <img
                className=" w-[175.7px] h-[49.98px] object-cover"
                alt=""
                src="assets/images/62c75366bfc2c35e0cb61587-covenanttheologicalseminarylogowebp@2x.png"
              />
              <img
                className="w-[103px] h-[50px] object-cover"
                alt=""
                src="assets/images/62a412d0ae6491d139b742a1-harvestlogowebp@2x.png"
              />
              <img
                className="w-[117.6px] h-[49.98px] object-cover"
                alt=""
                src="assets/images/63ed33f4c6d54853bc37f726-billygraham-logowebp@2x.png"
              />
              <img
                className="w-[200px] h-[32.88px] object-cover"
                alt=""
                src="assets/images/62a3c989c488718ef4da4b3b-angelus-temple-logo-3x201webp@2x.png"
              />
              <img
                  className="w-[200px] h-[26px] object-cover"
                  alt=""
                  src="assets/images/63ed33f4d786962305aab5ba-freshlife-logop500png@2x.png"
                />
                <img
                  className="w-[168.65px] h-[49.98px] object-cover"
                  alt=""
                  src="assets/images/6286cf3f50c6ba22b1dfbf0b-subsplasmarqueelogocristapng@2x.png"
                />
                <img
                  className="w-[200px] h-[44.4px] object-cover"
                  alt=""
                  src="assets/images/63ed33f497d1c7e6ac68903e-transformation-logop500webp@2x.png"
                />
                <img
                  className="w-[50px] h-[50px] object-cover mr-[40px]"
                  alt=""
                  src="assets/images/6286cf404380e64617fa596d-subsplasmarqueelogohillsongpng@2x.png"
                />
              </div>
        </Marquee>
    );
};

export default Sponsors