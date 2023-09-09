import { FunctionComponent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InlineLoadingIndicator from '../components/basic/InlineLoadingIndicator';

const WebsiteBuilderDashboard: FunctionComponent = () => {
    const navigate = useNavigate();
    const [isBuilderLoading, setBuilderLoading] = useState(false);
    const onStartWithBasicClick = useCallback(
        (e: any) => {
            e.preventDefault();
            if (!isBuilderLoading) {
                setBuilderLoading(true);
                navigate('/websitebuildermain');
            }
        },
        [isBuilderLoading]
    );
    return (
        <div className="relative bg-whitesmoke-200 w-full flex flex-col py-[50px] px-[50px] box-border items-center justify-start overflow-hidden text-center text-5xl text-royalblue-100 font-public-sans">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[50px]">
                <div className="w-[622px] h-[397px] flex flex-col py-0 px-[22px] box-border items-center justify-center gap-[42px]">
                    <div className="relative font-extrabold">Template</div>
                    <div className="self-stretch relative text-21xl font-extrabold text-primary-black-100">
                        <p className="m-0">Start creating your website</p>
                        <p className="m-0">without coding</p>
                    </div>
                    <div className="self-stretch relative font-semibold text-dimgray-200">
                        Easy template with no code
                    </div>
                    <button
                        className="cursor-pointer [border:none] h-[52px] bg-royalblue-100 rounded-lg w-[290px] flex flex-row box-border items-center justify-center gap-[2px]"
                        onClick={onStartWithBasicClick}
                    >
                        <InlineLoadingIndicator isLoading={isBuilderLoading} />
                        <div className="text-lg font-medium font-public-sans text-night-ghost-text text-center flex items-center justify-center">
                            Start with the basic
                        </div>
                    </button>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-left text-[12.17px] text-gray-100 font-label-medium-600">
                    <div className="self-stretch flex flex-row flex-wrap px-0 box-border items-center justify-center gap-[20px]">
                        <div className="relative bg-night-ghost-text w-[571.24px] h-[572px] text-[5.87px] text-gray-800">
                            <div className="absolute top-[15.21px] left-[calc(50%_-_271.93px)] bg-royalblue-100 w-[544.62px] h-[419.96px] overflow-hidden flex flex-col items-start justify-start">
                                <div className="relative w-[528.6px] h-[36.71px] overflow-hidden shrink-0">
                                    <div className="absolute top-[calc(50%_-_10.73px)] right-[28.97px] rounded-[5.87px] [background:linear-gradient(100.67deg,_#fff,_#e8e8e8)] w-[52.13px] overflow-hidden flex flex-row py-[5px] px-[7px] box-border items-center justify-center">
                                        <div className="relative font-semibold">Button</div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.73px)] left-[calc(50%_-_69.95px)] flex flex-row items-start justify-start gap-[1.47px] text-night-ghost-text">
                                        <div className="rounded-[5.87px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.94px]">
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[5.87px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.94px]">
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[5.87px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.94px]">
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[5.87px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.94px]">
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[5.87px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.94px]">
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.87px] h-[8.81px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.63px)] left-[29.37px] flex flex-row items-center justify-start gap-[2.94px]">
                                        <div className="relative rounded-[5.87px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[20.56px] h-[20.56px] overflow-hidden shrink-0 hidden">
                                            <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.67px)] w-[20.56px] h-[20.56px]" />
                                        </div>
                                        <div className="relative rounded-[5.87px] bg-whitesmoke-400 w-[68.28px] h-[20.56px]" />
                                    </div>
                                </div>
                                <div className="w-[528.6px] flex flex-col py-[35px] px-[114px] box-border items-center justify-start gap-[29.37px] text-center text-[35.24px] text-night-ghost-text">
                                    <div className="self-stretch flex flex-col items-center justify-start gap-[14.68px]">
                                        <div className="self-stretch relative font-semibold">
                                            Build your landings in minutes
                                        </div>
                                        <div className="relative text-[6.61px] font-medium inline-block w-[198.23px]">
                                            The night is dark and full of terrors. What is dead may never die. And now
                                            his watch is ended. All men must die.
                                        </div>
                                    </div>
                                    <img
                                        className="relative w-[338.82px] h-[150.87px] overflow-hidden shrink-0"
                                        alt=""
                                        src="assets/images/videos.svg"
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-[21.3px] left-[calc(50%_-_188.26px)] flex flex-row items-center justify-center gap-[12.17px] text-center text-[12.17px] text-gray-100 font-public-sans">
                                <div className="rounded-[6.09px] bg-night-ghost-text box-border w-[182.55px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-royalblue-100">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center text-night-ghost-text border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[454.86px] left-[13.69px] text-[18.26px] font-semibold text-primary-black-100">
                                Template#1
                            </div>
                        </div>
                        <div className="relative bg-night-ghost-text w-[572.24px] h-[573px] text-[12.19px]">
                            <div className="absolute bottom-[21.34px] left-[calc(50%_-_188.43px)] flex flex-row items-center justify-center gap-[12.19px] text-center font-public-sans">
                                <div className="rounded-6xs-1 bg-night-ghost-text box-border w-[182.87px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-royalblue-100">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center text-[12.17px] text-night-ghost-text border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[10.67px] left-[calc(50%_-_271.64px)] bg-royalblue-100 h-[409.94px] overflow-hidden flex flex-col items-start justify-start text-[6.03px] text-gray-800">
                                <div className="relative w-[543.08px] h-[37.71px] overflow-hidden shrink-0">
                                    <div className="absolute top-[calc(50%_-_10.72px)] right-[30.25px] rounded-[5.86px] [background:linear-gradient(100.67deg,_#fff,_#e8e8e8)] w-[53.55px] overflow-hidden flex flex-row py-[5px] px-[7px] box-border items-center justify-center">
                                        <div className="relative font-semibold">Button</div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.89px)] left-[calc(50%_-_70.27px)] flex flex-row items-start justify-start gap-[1.51px] text-night-ghost-text">
                                        <div className="rounded-[6.03px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.02px]">
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.03px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.02px]">
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.03px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.02px]">
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.03px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.02px]">
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.03px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.02px]">
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.03px] h-[9.05px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.42px)] left-[30.17px] flex flex-row items-center justify-start gap-[3.02px]">
                                        <div className="relative rounded-[6.03px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[21.12px] h-[21.12px] overflow-hidden shrink-0 hidden">
                                            <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.77px)] w-[21.12px] h-[21.12px]" />
                                        </div>
                                        <div className="relative rounded-[6.03px] bg-whitesmoke-400 w-[70.15px] h-[21.12px]" />
                                    </div>
                                </div>
                                <div className="w-[543.08px] flex flex-col py-[36px] px-[30px] box-border items-start justify-start gap-[24.14px] text-[36.21px] text-whitesmoke-400">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[15.09px]">
                                        <div className="self-stretch relative font-semibold text-night-ghost-text">
                                            Build your landings in minutes
                                        </div>
                                        <div className="relative text-[6.79px] font-medium inline-block w-[203.65px]">
                                            The night is dark and full of terrors. What is dead may never die. And now
                                            his watch is ended. All men must die.
                                        </div>
                                        <div className="flex flex-row items-start justify-start gap-[3.02px] text-[6.03px]">
                                            <div className="rounded-[5.86px] [background:linear-gradient(100.67deg,_#fff,_#e8e8e8)] w-[53.55px] overflow-hidden shrink-0 flex flex-row py-[5px] px-[7px] box-border items-center justify-center">
                                                <div className="relative font-semibold">Button</div>
                                            </div>
                                            <div className="rounded-[6.03px] w-[53.55px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center text-night-ghost-text">
                                                <div className="relative font-semibold">Button</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row py-[18px] px-0 items-end justify-start gap-[15.09px]">
                                        <img
                                            className="relative rounded-[15.09px] w-[217.99px] h-[122.57px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-01.svg"
                                        />
                                        <img
                                            className="relative rounded-[15.09px] w-[217.99px] h-[122.57px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-02.svg"
                                        />
                                        <img
                                            className="relative rounded-[15.09px] w-[217.99px] h-[122.57px] overflow-hidden shrink-0 opacity-[0.8]"
                                            alt=""
                                            src="assets/images/card-03.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-[443.47px] left-[14.48px] text-[18.29px] font-semibold text-primary-black-100">
                                Template#2
                            </div>
                        </div>
                        <div className="relative bg-night-ghost-text w-[571.24px] h-[572px] text-primary-black-100">
                            <div className="absolute bottom-[21.3px] left-[calc(50%_-_188.26px)] flex flex-row items-center justify-center gap-[12.17px] text-center text-gray-100 font-public-sans">
                                <div className="rounded-[6.09px] bg-night-ghost-text box-border w-[182.55px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-royalblue-100">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center text-night-ghost-text border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[329.36px] left-[22.06px] text-[18.26px] font-semibold">
                                Template#3
                            </div>
                            <div className="absolute top-[14px] left-[12px] bg-gray-800 w-[548px] h-[342.5px] overflow-hidden text-[36.53px] text-night-ghost-text">
                                <img
                                    className="absolute top-[65.46px] left-[304.44px] rounded-[15.22px] w-[307.73px] h-[213.11px] overflow-hidden"
                                    alt=""
                                    src="assets/images/card.svg"
                                />
                                <div className="absolute top-[calc(50%_-_104.31px)] left-[30.44px] w-[274px] flex flex-col items-start justify-start gap-[15.22px]">
                                    <div className="self-stretch relative font-semibold">
                                        Build your landings in minutes
                                    </div>
                                    <div className="relative text-[6.85px] font-medium inline-block w-[169.35px]">
                                        The night is dark and full of terrors. What is dead may never die. And now his
                                        watch is ended. All men must die.
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[3.04px] text-[6.09px]">
                                        <div className="rounded-[6.09px] bg-royalblue-100 w-[54.04px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                        <div className="rounded-[6.09px] w-[54.04px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center gap-[3.04px]">
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Button</div>
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-[0px] left-[calc(50%_-_274px)] w-[548px] h-[38.06px] overflow-hidden text-[6.09px]">
                                    <div className="absolute top-[calc(50%_-_11.12px)] right-[30.44px] rounded-[6.09px] bg-royalblue-100 w-[54.04px] overflow-hidden flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                        <div className="relative font-semibold">Button</div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_11.12px)] left-[calc(50%_-_71.1px)] flex flex-row items-start justify-start gap-[1.52px]">
                                        <div className="rounded-[6.09px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.04px]">
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.09px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.04px]">
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.09px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.04px]">
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.09px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.04px]">
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.09px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.04px]">
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.09px] h-[9.13px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.68px)] left-[30.44px] flex flex-row items-center justify-start gap-[3.04px]">
                                        <div className="relative rounded-[6.09px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[21.31px] h-[21.31px] overflow-hidden shrink-0 hidden">
                                            <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.81px)] w-[21.31px] h-[21.31px]" />
                                        </div>
                                        <div className="relative rounded-[6.09px] bg-gainsboro-100 w-[70.78px] h-[21.31px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-[375px] left-[14px] text-[18.29px] font-semibold">
                                Template#3
                            </div>
                        </div>
                        <div className="relative bg-night-ghost-text w-[571px] h-[571.76px]">
                            <div className="absolute bottom-[21.29px] left-[calc(50%_-_188.22px)] flex flex-row items-center justify-center gap-[12.17px] text-center font-public-sans">
                                <div className="rounded-[6.08px] bg-night-ghost-text box-border w-[182.48px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-royalblue-100">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center text-night-ghost-text border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[374.84px] left-[13.69px] text-[18.25px] font-semibold text-primary-black-100">
                                Template#4
                            </div>
                            <div className="absolute top-[12.17px] left-[calc(50%_-_272.57px)] bg-whitesmoke-300 w-[545px] h-[340.62px] overflow-hidden text-[6.06px]">
                                <div className="absolute top-[-68.88px] left-[333.05px] flex flex-col items-start justify-start gap-[12.11px]">
                                    <img
                                        className="relative rounded-[15.14px] w-[151.39px] h-[151.39px] overflow-hidden shrink-0"
                                        alt=""
                                        src="assets/images/card-011.svg"
                                    />
                                    <img
                                        className="relative rounded-[15.14px] w-[151.39px] h-[151.39px] overflow-hidden shrink-0"
                                        alt=""
                                        src="assets/images/card-021.svg"
                                    />
                                    <img
                                        className="relative rounded-[15.14px] w-[151.39px] h-[151.39px] overflow-hidden shrink-0"
                                        alt=""
                                        src="assets/images/card-031.svg"
                                    />
                                </div>
                                <div className="absolute top-[0px] left-[calc(50%_-_273px)] w-[545px] h-[37.85px] overflow-hidden">
                                    <div className="absolute top-[calc(50%_-_10.98px)] left-[30.28px] flex flex-row items-start justify-start gap-[12.11px]">
                                        <div className="flex flex-row items-center justify-start gap-[3.03px]">
                                            <div className="relative rounded-[6.06px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[21.19px] h-[21.19px] overflow-hidden shrink-0 hidden">
                                                <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.78px)] w-[21.19px] h-[21.19px]" />
                                            </div>
                                            <div className="relative rounded-[6.06px] bg-royalblue-100 w-[70.4px] h-[21.19px]" />
                                        </div>
                                        <div className="flex flex-row items-start justify-start gap-[1.51px]">
                                            <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                                <div className="relative font-semibold">Link</div>
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                            </div>
                                            <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                                <div className="relative font-semibold">Link</div>
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                            </div>
                                            <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                                <div className="relative font-semibold">Link</div>
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                            </div>
                                            <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                                <div className="relative font-semibold">Link</div>
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                            </div>
                                            <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                                <div className="relative font-semibold">Link</div>
                                                <img
                                                    className="relative w-[6.06px] h-[9.08px] hidden"
                                                    alt=""
                                                    src="assets/images/container.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-[calc(50%_-_104.51px)] left-[30.28px] w-[272.5px] flex flex-col items-start justify-start gap-[15.14px] text-[36.33px]">
                                    <div className="self-stretch relative font-semibold">
                                        Build your landings in minutes
                                    </div>
                                    <div className="relative text-[6.81px] font-medium text-gray-500 inline-block w-[168.42px]">
                                        The night is dark and full of terrors. What is dead may never die. And now his
                                        watch is ended. All men must die.
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[3.03px] text-[6.06px] text-night-ghost-text">
                                        <div className="rounded-[6.06px] bg-royalblue-100 w-[53.74px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                        <div className="rounded-[6.06px] w-[53.74px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-royalblue-100 shadow-[0px_19px_40px_rgba(0,_0,_0,_0.25)] w-[571px] h-[571.76px] text-night-ghost-text">
                            <div className="absolute bottom-[21.29px] left-[calc(50%_-_188.22px)] flex flex-row items-center justify-center gap-[12.17px] text-center font-public-sans">
                                <div className="rounded-[6.08px] bg-royalblue-100 box-border w-[182.48px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[16.08px] left-[calc(50%_-_268.5px)] bg-night-ghost-text flex flex-col items-start justify-start text-[5.98px]">
                                <div className="relative w-[538px] h-[37.36px] overflow-hidden shrink-0">
                                    <div className="absolute top-[calc(50%_-_10.16px)] right-[29.89px] rounded-[5.98px] bg-royalblue-100 w-[53.05px] overflow-hidden flex flex-row py-[5px] px-[7px] box-border items-center justify-center">
                                        <div className="relative font-semibold">Button</div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.16px)] left-[calc(50%_-_70.35px)] flex flex-row items-start justify-start gap-[1.49px] text-gray-100">
                                        <div className="rounded-[5.98px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.99px]">
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[5.98px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.99px]">
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[5.98px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.99px]">
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[5.98px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.99px]">
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[5.98px] overflow-hidden flex flex-row py-[5px] px-[7px] items-center justify-center gap-[2.99px]">
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[5.98px] h-[8.97px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.14px)] left-[29.89px] flex flex-row items-center justify-start gap-[2.99px]">
                                        <div className="relative rounded-[5.98px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[20.92px] h-[20.92px] overflow-hidden shrink-0 hidden">
                                            <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.74px)] w-[20.92px] h-[20.92px] hidden" />
                                        </div>
                                        <div className="relative rounded-[5.98px] bg-gray-800 w-[69.49px] h-[20.92px]" />
                                    </div>
                                </div>
                                <div className="flex flex-row py-[35px] px-[29px] items-start justify-start text-[35.87px] text-gray-100">
                                    <div className="w-[269px] flex flex-col items-start justify-start gap-[14.94px]">
                                        <div className="self-stretch relative font-semibold">
                                            Build your landings in minutes
                                        </div>
                                        <div className="relative text-[6.72px] font-medium text-gray-500 inline-block w-[166.26px]">
                                            The night is dark and full of terrors. What is dead may never die. And now
                                            his watch is ended. All men must die.
                                        </div>
                                        <div className="flex flex-row items-start justify-start gap-[2.99px] text-[5.98px] text-night-ghost-text">
                                            <div className="rounded-[5.98px] bg-royalblue-100 w-[53.05px] overflow-hidden shrink-0 flex flex-row py-[5px] px-[7px] box-border items-center justify-center">
                                                <div className="relative font-semibold">Button</div>
                                            </div>
                                            <div className="rounded-[5.98px] w-[53.05px] overflow-hidden shrink-0 flex flex-row py-[5px] px-[7px] box-border items-center justify-center text-gray-100">
                                                <div className="relative font-semibold">Button</div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative rounded-[14.94px] w-[209.22px] h-[209.22px] overflow-hidden shrink-0"
                                        alt=""
                                        src="assets/images/card1.svg"
                                    />
                                </div>
                            </div>
                            <div className="absolute top-[351.24px] left-[13px] text-[18.25px] font-semibold">
                                Template#8
                            </div>
                        </div>
                        <div className="relative bg-night-ghost-text w-[571px] h-[571.76px]">
                            <div className="absolute bottom-[21.29px] left-[calc(50%_-_188.22px)] flex flex-row items-center justify-center gap-[12.17px] text-center font-public-sans">
                                <div className="rounded-[6.08px] bg-night-ghost-text box-border w-[182.48px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-royalblue-100">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center text-night-ghost-text border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[339px] left-[11px] text-[18.25px] font-semibold text-primary-black-100">
                                Template#5
                            </div>
                            <div className="absolute top-[11px] left-[calc(50%_-_274.5px)] bg-primary-black-100 w-[549px] h-[312.52px] overflow-hidden text-6xs-1 text-night-ghost-text">
                                <div className="absolute top-[0px] left-[calc(50%_-_274.5px)] w-[549px] h-[38.13px] overflow-hidden">
                                    <div className="absolute top-[calc(50%_-_11.16px)] right-[30.5px] rounded-6xs-1 bg-royalblue-100 w-[54.14px] overflow-hidden flex flex-row py-[6px] px-[7.625px] box-border items-center justify-center">
                                        <div className="relative font-semibold">Button</div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_11.16px)] left-[calc(50%_-_71.68px)] flex flex-row items-start justify-start gap-[1.52px]">
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7.625px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7.625px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7.625px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7.625px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7.625px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.74px)] left-[30.5px] flex flex-row items-center justify-start gap-[3.05px]">
                                        <div className="relative rounded-6xs-1 [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[21.35px] h-[21.35px] overflow-hidden shrink-0 hidden">
                                            <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.81px)] w-[21.35px] h-[21.35px]" />
                                        </div>
                                        <div className="relative rounded-6xs-1 bg-gray-800 w-[70.91px] h-[21.35px]" />
                                    </div>
                                </div>
                                <div className="absolute top-[38.13px] left-[calc(50%_-_274.5px)] w-[549px] flex flex-col py-[36px] px-[118px] box-border items-center justify-start gap-[30.5px] text-center text-[36.6px]">
                                    <div className="self-stretch flex flex-col items-center justify-start gap-[15.25px]">
                                        <div className="self-stretch relative font-semibold">
                                            Build your landings in minutes
                                        </div>
                                        <div className="relative text-[6.86px] font-medium text-gray-500 inline-block w-[205.88px]">
                                            The night is dark and full of terrors. What is dead may never die. And now
                                            his watch is ended. All men must die.
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start gap-[3.05px] text-left text-6xs-1">
                                        <div className="rounded-6xs-1 bg-royalblue-100 w-[100.65px] overflow-hidden flex flex-row py-[6px] px-[7.625px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                        <div className="rounded-6xs-1 w-[100.65px] overflow-hidden flex flex-row py-[6px] px-[7.625px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-night-ghost-text w-[571px] h-[571.76px] text-6xs-1 text-night-ghost-text">
                            <div className="absolute top-[13px] left-[12px] bg-gainsboro-100 overflow-hidden flex flex-col items-start justify-start">
                                <div className="relative w-[548.78px] h-[38.11px] overflow-hidden shrink-0">
                                    <div className="absolute top-[calc(50%_-_11.15px)] right-[30.27px] rounded-6xs-1 bg-royalblue-100 w-[54.12px] overflow-hidden flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                        <div className="relative font-semibold">Button</div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_11.15px)] left-[calc(50%_-_71.55px)] flex flex-row items-start justify-start gap-[1.52px] text-gray-100">
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-6xs-1 overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.05px]">
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.1px] h-[9.15px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.73px)] left-[30.49px] flex flex-row items-center justify-start gap-[3.05px]">
                                        <div className="relative rounded-6xs-1 [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[21.34px] h-[21.34px] overflow-hidden shrink-0 hidden">
                                            <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.81px)] w-[21.34px] h-[21.34px]" />
                                        </div>
                                        <div className="relative rounded-6xs-1 bg-gray-100 w-[70.88px] h-[21.34px]" />
                                    </div>
                                </div>
                                <div className="w-[548.78px] flex flex-col py-[36px] px-[30px] box-border items-start justify-start gap-[15.24px] text-[36.59px] text-gray-100">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[15.24px]">
                                        <div className="self-stretch relative font-semibold">
                                            Build your landings in minutes
                                        </div>
                                        <div className="relative text-[6.86px] font-medium text-gray-500 inline-block w-[205.79px]">
                                            The night is dark and full of terrors. What is dead may never die. And now
                                            his watch is ended. All men must die.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[3.05px] text-6xs-1 text-night-ghost-text">
                                        <div className="rounded-6xs-1 bg-royalblue-100 w-[54.12px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                        <div className="rounded-6xs-1 w-[54.12px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center text-gray-100">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-end justify-start gap-[8.77px]">
                                        <img
                                            className="relative rounded-[15.24px] w-[80.03px] h-[80.03px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-012.svg"
                                        />
                                        <img
                                            className="relative rounded-[15.24px] w-[80.03px] h-[80.03px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-022.svg"
                                        />
                                        <img
                                            className="relative rounded-[15.24px] w-[132.62px] h-[132.62px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-032.svg"
                                        />
                                        <img
                                            className="relative rounded-[15.24px] w-[80.03px] h-[80.03px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-04.svg"
                                        />
                                        <img
                                            className="relative rounded-[15.24px] w-[80.03px] h-[80.03px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-05.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-[21.29px] left-[calc(50%_-_188.22px)] flex flex-row items-center justify-center gap-[12.17px] text-center text-[12.17px] text-gray-100 font-public-sans">
                                <div className="rounded-[6.08px] bg-night-ghost-text box-border w-[182.48px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-royalblue-100">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center text-night-ghost-text border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[404.84px] left-[13.69px] text-[18.25px] font-semibold text-primary-black-100">
                                Template#6
                            </div>
                        </div>
                        <div className="relative bg-night-ghost-text w-[571px] h-[571.76px]">
                            <div className="absolute bottom-[21.29px] left-[calc(50%_-_188.22px)] flex flex-row items-center justify-center gap-[12.17px] text-center font-public-sans">
                                <div className="rounded-[6.08px] bg-night-ghost-text box-border w-[182.48px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-royalblue-100">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center text-night-ghost-text border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[436.24px] left-[11px] text-[18.25px] font-semibold text-primary-black-100">
                                Template#7
                            </div>
                            <div className="absolute top-[11.24px] left-[calc(50%_-_271.5px)] bg-primary-black-100 w-[541px] h-[408.8px] overflow-hidden text-[6.01px] text-night-ghost-text">
                                <div className="absolute top-[0px] left-[calc(50%_-_270.5px)] w-[541px] h-[37.57px] overflow-hidden">
                                    <div className="absolute top-[calc(50%_-_10.8px)] right-[30.06px] rounded-[6.01px] bg-royalblue-100 w-[53.35px] overflow-hidden flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                        <div className="relative font-semibold">Button</div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.8px)] left-[calc(50%_-_70.07px)] flex flex-row items-start justify-start gap-[1.5px]">
                                        <div className="rounded-[6.01px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.01px]">
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.01px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.01px]">
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.01px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.01px]">
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.01px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.01px]">
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.01px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.01px]">
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.01px] h-[9.02px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.3px)] left-[30.06px] flex flex-row items-center justify-start gap-[3.01px]">
                                        <div className="relative rounded-[6.01px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[21.04px] h-[21.04px] overflow-hidden shrink-0 hidden">
                                            <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.76px)] w-[21.04px] h-[21.04px]" />
                                        </div>
                                        <div className="relative rounded-[6.01px] bg-gray-800 w-[69.88px] h-[21.04px]" />
                                    </div>
                                </div>
                                <div className="absolute top-[37.57px] left-[calc(50%_-_270.5px)] w-[541px] flex flex-col py-[36px] px-[30px] box-border items-start justify-start gap-[15.03px] text-[36.07px]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[15.03px]">
                                        <div className="self-stretch relative font-semibold">
                                            Build your landings in minutes
                                        </div>
                                        <div className="relative text-[6.76px] font-medium text-gray-500 inline-block w-[202.88px]">
                                            The night is dark and full of terrors. What is dead may never die. And now
                                            his watch is ended. All men must die.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[3.01px] text-[6.01px]">
                                        <div className="rounded-[6.01px] bg-royalblue-100 w-[53.35px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                        <div className="rounded-[6.01px] w-[53.35px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                    </div>
                                    <img
                                        className="relative rounded-[15.03px] w-[480.89px] h-[270.12px] overflow-hidden shrink-0"
                                        alt=""
                                        src="assets/images/image.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-night-ghost-text w-[571px] h-[571.76px]">
                            <div className="absolute bottom-[21.29px] left-[calc(50%_-_188.22px)] flex flex-row items-center justify-center gap-[12.17px] text-center font-public-sans">
                                <div className="rounded-[6.08px] bg-night-ghost-text box-border w-[182.48px] overflow-hidden shrink-0 flex flex-row py-[13px] pr-[22px] pl-[22px] items-center justify-center border-[0.8px] border-solid border-royalblue-100">
                                    <div className="relative font-extrabold">Preview</div>
                                </div>
                                <div className="rounded-[6.09px] bg-royalblue-100 box-border w-[182.55px] h-[41.07px] flex flex-row pt-[15px] pb-[15px] pr-[25px] pl-[24px] items-center justify-center text-night-ghost-text border-[1.5px] border-solid border-night-ghost-text">
                                    <div className="relative font-extrabold">Use Template</div>
                                </div>
                            </div>
                            <div className="absolute top-[404.84px] left-[13.69px] text-[18.25px] font-semibold text-primary-black-100">
                                Template#9
                            </div>
                            <div className="absolute top-[calc(50%_-_269.64px)] left-[calc(50%_-_272.5px)] bg-primary-black-100 w-[545.6px] h-[341px] overflow-hidden text-[36.37px] text-night-ghost-text">
                                <div className="absolute top-[0px] left-[350.47px] rounded-tl-[15.16px] rounded-tr-none rounded-br-none rounded-bl-[15.16px] bg-gray-800 w-[195.13px] h-[341px] overflow-hidden">
                                    <div className="absolute top-[65.17px] left-[36.37px] flex flex-row items-start justify-start gap-[11.37px]">
                                        <img
                                            className="relative rounded-[15.16px] w-[107.98px] h-[210.66px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-013.svg"
                                        />
                                        <img
                                            className="relative rounded-[15.16px] w-[107.98px] h-[210.66px] overflow-hidden shrink-0"
                                            alt=""
                                            src="assets/images/card-023.svg"
                                        />
                                    </div>
                                </div>
                                <div className="absolute top-[65.17px] left-[30.31px] w-[286.82px] flex flex-col items-start justify-start gap-[15.16px]">
                                    <div className="self-stretch relative font-semibold">
                                        Build your landings in minutes
                                    </div>
                                    <div className="relative text-[6.82px] font-medium text-gray-500 inline-block w-[168.61px]">
                                        The night is dark and full of terrors. What is dead may never die. And now his
                                        watch is ended. All men must die.
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[3.03px] text-[6.06px]">
                                        <div className="rounded-[6.06px] bg-royalblue-100 w-[53.8px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                        <div className="rounded-[6.06px] w-[53.8px] overflow-hidden shrink-0 flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                            <div className="relative font-semibold">Button</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-[0px] left-[calc(50%_-_272.6px)] w-[545.6px] h-[37.89px] overflow-hidden text-[6.06px]">
                                    <div className="absolute top-[calc(50%_-_11.01px)] right-[29.91px] rounded-[6.06px] bg-royalblue-100 w-[53.8px] overflow-hidden flex flex-row py-[6px] px-[7px] box-border items-center justify-center">
                                        <div className="relative font-semibold">Button</div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_11.01px)] left-[calc(50%_-_70.72px)] flex flex-row items-start justify-start gap-[1.52px]">
                                        <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                        <div className="rounded-[6.06px] overflow-hidden flex flex-row py-[6px] px-[7px] items-center justify-center gap-[3.03px]">
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                            <div className="relative font-semibold">Link</div>
                                            <img
                                                className="relative w-[6.06px] h-[9.09px] hidden"
                                                alt=""
                                                src="assets/images/container.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-[calc(50%_-_10.55px)] left-[30.31px] flex flex-row items-center justify-start gap-[3.03px]">
                                        <div className="relative rounded-[6.06px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[21.22px] h-[21.22px] overflow-hidden shrink-0 hidden">
                                            <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.79px)] w-[21.22px] h-[21.22px] hidden" />
                                        </div>
                                        <div className="relative rounded-[6.06px] bg-gray-800 w-[70.47px] h-[21.22px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteBuilderDashboard;
