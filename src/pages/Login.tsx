import axios, { AxiosError } from 'axios';
import { ChangeEvent, FormEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastFail, ToastSuccess, validateMail } from '../globals';
import CustomInputField from '../components/basic/CustomInputField';
import { CustomObject } from '../types/GenericTypes';
import InlineLoadingIndicator from '../components/basic/InlineLoadingIndicator';

const Login: FunctionComponent = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [isLoginProcessing, setLoginProcessing] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const nextLocation = state?.destination ?? '/maininteraction';
    const isAuthenticated = useIsAuthenticated();
    const [errorVisibility, setErrorVisibility] = useState<CustomObject>({});

    useEffect(() => {
        if (isAuthenticated()) navigate(nextLocation, { replace: true });
    });

    const onForgetPasswordClick = useCallback(() => {
        navigate('/passwordreset');
    }, [navigate]);

    const signIn = useSignIn();

    const onSubmitClick = useCallback(
        async (event: FormEvent) => {
            event.preventDefault();
            if (isLoginProcessing) return;

            setLoginProcessing(true);

            // console.log(loadingIndicator);

            const { email, password } = document.forms[0];
            // console.log(email.value, password.value);
            const credentials = { email: email.value, password: password.value };
            try {
                const response = await axios.post(`/auth/jwt/create/`, credentials, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const userDetails = await axios.get(`/auth/users/me`, {
                    headers: {
                        Authorization: `Bearer ${response.data?.access}`,
                    },
                });
                // console.log("Response: ", response.data?.access);

                if (
                    signIn({
                        token: response.data.access,
                        expiresIn: 30 * 60,
                        tokenType: 'Bearer',
                        refreshToken: response.data?.refresh,
                        refreshTokenExpireIn: 24 * 60 * 60,
                        authState: { ...response?.data, ...userDetails?.data },
                    })
                ) {
                    ToastSuccess('Login successful', {
                        onClose: () => {
                            navigate(nextLocation, { replace: true });
                        },
                    });
                } else {
                    ToastFail('Unable to sign you in. An error occurred');
                }
            } catch (err) {
                setLoginProcessing(false);

                if (err && err instanceof AxiosError) {
                    const response = err?.response;
                    if (response?.data?.email) {
                        setErrorVisibility({
                            emailError: true,
                            emailErrorMessage: response.data?.email,
                        });
                    } else if (response?.data?.password) {
                        setErrorVisibility({
                            passwordError: true,
                            passwordErrorMessage: response.data?.password,
                        });
                    }
                }
            }
        },
        [navigate]
    );

    return (
        <div className="relative w-full flex flex-col items-start justify-start text-center text-5xl text-black font-heading-x-small-600">
            <Header />
            <div className="self-stretch [background:linear-gradient(180deg,_#91a8ea,_#fff)] overflow-hidden flex flex-col py-[100px] px-0 items-center justify-start gap-[80px] md:gap-[100px] md:pt-[80px] md:pb-[80px] md:box-border sm:gap-[80px] sm:pt-20 sm:pb-20 sm:box-border">
                <div className="w-[336px] flex flex-col py-4 px-[142px] box-border items-center justify-center gap-[15px]">
                    <div className="relative uppercase font-extrabold flex items-center justify-center w-[156px] h-[38px] shrink-0">
                        LOG IN
                    </div>
                    <div className="relative text-16xl font-black font-open-sansflex items-center w-[253px]">
                        <span className="[line-break:anywhere] w-full">
                            <p className="m-0">Manage your</p>
                            <p className="m-0"> Platform</p>
                        </span>
                    </div>
                    <div className="w-[302px] flex flex-row py-0 px-[3px] box-border items-center justify-center text-left text-3xl text-dimgray-100">
                        <div className="relative flex items-center w-[150px] shrink-0">Are you a donor?</div>
                        <button className=" [border:none] p-0 bg-[transparent] relative text-lg font-heading-x-small-600 text-mediumslateblue text-left flex items-center  shrink-0 hover:[text-decoration:underline]">
                            Click here
                        </button>
                    </div>
                </div>
                <form onSubmit={onSubmitClick}>
                    <div className="flex flex-col items-center justify-start gap-[20px] text-left md:gap-[20px] font-medium font-public-sans text-base">
                        <div className="w-full">
                            <CustomInputField
                                heading="Email"
                                placeholder="Enter your email here"
                                name="email"
                                type="email"
                                errorVisible={errorVisibility?.emailError}
                                errorMessage={errorVisibility?.emailErrorMessage ?? 'Invalid email'}
                                inputFormatAcceptable={(input) => validateMail(input)}
                            />
                        </div>
                        <div className="w-full relative">
                            <div className="z-10">
                                <CustomInputField
                                    name="password"
                                    heading="Password"
                                    placeholder="Enter your password here"
                                    type={passwordVisible ? 'text' : 'password'}
                                    errorVisible={errorVisibility?.passwordError}
                                    errorMessage={errorVisibility?.passwordErrorMessage ?? 'Password cannot be empty'}
                                    inputFormatAcceptable={(input) => input.length !== 0}
                                />
                            </div>
                            <button
                                className="absolute overflow-hidden shrink-0 top-[45px] right-[0] pr-4 [border:none] bg-[transparent]"
                                onMouseDown={(e) => setPasswordVisible(true)}
                                onMouseUp={(e) => setPasswordVisible(false)}
                                onMouseLeave={(e) => setPasswordVisible(false)}
                                onClick={(e) => e.preventDefault()}
                            >
                                <img alt="view password" src="assets/images/group1.svg" />
                            </button>
                            <div className="flex flex-col items-end justify-start">
                                <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-overlock text-mediumslateblue text-center inline-block hover:[text-decoration:underline]"
                                    onClick={onForgetPasswordClick}
                                >
                                    Forget password?
                                </button>
                            </div>
                        </div>

                        <button
                            className="cursor-pointer [border:none] bg-royalblue-100 rounded-lg w-[624px] flex flex-row box-border items-center justify-center md:w-[300px] py-[10px] md:box-border"
                            type="submit"
                            name="submit"
                        >
                            <InlineLoadingIndicator isLoading={isLoginProcessing} />
                            <div className="text-base font-medium font-overlock text-white text-center flex items-center justify-center md:w-[200px]">
                                Log in
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
