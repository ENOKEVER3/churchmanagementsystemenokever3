import axios, { AxiosError } from 'axios';
import { ChangeEvent, FormEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastSuccess, updateAvatar, validateMail } from '../globals';
import CustomInputField from '../components/basic/CustomInputField';
import FileUpload from '../components/basic/FileUpload';
import { subscribe, unsubscribe } from '../event';
import { CustomObject } from '../types/GenericTypes';

const Register: FunctionComponent = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const nextLocation = state?.destination ?? '/login';
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate(nextLocation, { replace: true });
        }
    });

    const [error, setError] = useState('');
    const [fullname, setFullname] = useState<CustomObject>({});
    const [errorVisibility, setErrorVisibility] = useState<CustomObject>({});
    const signIn = useSignIn();

    const onSubmitClick = useCallback(
        async (event: FormEvent) => {
            event.preventDefault();

            const submitButton = document.querySelector('[type="submit"]');
            const loadingIndicator = document.getElementById('loadingIndicator');

            // console.log(loadingIndicator);

            submitButton?.setAttribute('disabled', '');
            loadingIndicator?.classList.remove('hidden');

            const { email, password } = document.forms[0];
            // console.log(email.value, password.value, fullname);
            const credentials = {
                first_name: fullname?.firstName,
                last_name: fullname?.lastName,
                email: email.value,
                password: password.value,
            };
            try {
                const response = await axios.post(`/auth/users/create_manager/`, credentials, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                ToastSuccess("You are now registered, you'll need to verify your email before you can log in");
            } catch (err) {
                submitButton?.removeAttribute('disabled');
                loadingIndicator?.classList.add('hidden');

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
        [navigate, errorVisibility]
    );

    const [fileUploaded, setFileUploaded] = useState(false);
    subscribe('fileupload', (event) => {
        setFileUploaded(true);
        updateAvatar(event.detail.file, 'image-container');
    });

    // useEffect(() => {
    //   return () => {
    //     unsubscribe("fileupload", (event) =>
    //       console.log("[AddVisitor] Unsubscribed from", event.name)
    //     );
    //   };
    // }, []);

    return (
        <div className="relative w-full flex flex-col items-start justify-start text-center text-5xl text-black font-heading-x-small-600">
            <Header />
            <div className="self-stretch [background:linear-gradient(180deg,_#91a8ea,_#fff)] overflow-hidden flex flex-col py-[100px] px-0 items-center justify-start gap-[80px] md:gap-[100px] md:pt-[80px] md:pb-[80px] md:box-border sm:gap-[80px] sm:pt-20 sm:pb-20 sm:box-border">
                <div className="w-[336px] flex flex-col py-4 px-[142px] box-border items-center justify-center gap-[15px]">
                    <div className="relative uppercase font-extrabold flex items-center justify-center w-[156px] h-[38px] shrink-0">
                        REGISTER
                    </div>
                    <div className="relative text-16xl font-black font-open-sansflex items-center w-[253px]">
                        <span className="[line-break:anywhere] w-full">
                            <p className="m-0">Manage your</p>
                            <p className="m-0"> Platform</p>
                        </span>
                    </div>
                    <div className="w-[302px] flex flex-row py-0 px-[3px] box-border items-center justify-center text-left text-3xl text-dimgray-100">
                        <div className="relative flex items-center w-[150px] shrink-0">Are you a donor?</div>
                        <button className="[border:none] p-0 bg-[transparent] relative text-lg font-heading-x-small-600 text-mediumslateblue text-left flex items-center shrink-0 hover:[text-decoration:underline]">
                            Click here
                        </button>
                    </div>
                </div>
                <form onSubmit={onSubmitClick}>
                    <div className="flex flex-col items-center justify-start gap-[20px] text-left md:gap-[20px] font-medium font-public-sans text-base">
                        <div className="w-full">
                            <CustomInputField
                                heading="Full name"
                                name="fullname"
                                type="text"
                                placeholder="Enter first name and last name"
                                inputFormatAcceptable={(input) => {
                                    const matches = input.matchAll(/^([a-z-]+)\s([a-z-]+)$/gi);
                                    const parts = Array.from(matches)?.[0];
                                    if (parts?.length !== 3) return false;
                                    setFullname({ firstName: parts[1], lastName: parts[2] });
                                    return true;
                                }}
                                errorMessage="Invalid name format"
                            />
                        </div>
                        <div className="w-full">
                            <CustomInputField
                                heading="Email"
                                placeholder="Enter your email here"
                                name="email"
                                type="email"
                                errorMessage={errorVisibility?.emailErrorMessage ?? 'Invalid email'}
                                errorVisible={errorVisibility?.emailError}
                                inputFormatAcceptable={(input) => validateMail(input)}
                                onChange={() => setErrorVisibility({})}
                            />
                        </div>
                        <div className="flex flex-row justify-start w-full">
                            <div className={`flex gap-[16px] items-center ${!fileUploaded ? 'hidden' : ''}`}>
                                <button
                                    id="image-container"
                                    className={`cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-81xl w-[99px] h-[99px] overflow-hidden shrink-0  bg-cover bg-no-repeat bg-[top] bg-[url(assets/images/avatar.png)]`}
                                    onClick={(e) => e.preventDefault()}
                                />
                                <button
                                    className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-4 h-4 shrink-0 bg-[url(assets/images/edit-blue.svg)] bg-cover bg-no-repeat bg-[top]`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setFileUploaded(false);
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={`w-full border-[1px] border-dashed border-royalblue-100 rounded-lg ${
                                fileUploaded ? 'hidden' : ''
                            }`}
                        >
                            <FileUpload visibility={!fileUploaded} />
                        </div>
                        <div className="w-full relative">
                            <div className="z-10">
                                <CustomInputField
                                    name="password"
                                    heading="Password"
                                    placeholder="Enter your password here"
                                    type={passwordVisible ? 'text' : 'password'}
                                    errorMessage={errorVisibility?.passwordErrorMessage ?? 'Password cannot be empty'}
                                    errorVisible={errorVisibility?.passwordError}
                                    inputFormatAcceptable={(input) => input.length !== 0}
                                    onChange={() => setErrorVisibility({})}
                                />
                            </div>
                            <button
                                className="absolute overflow-hidden shrink-0 top-[45px] right-[0] p-0 mr-1 [border:none] bg-[transparent]"
                                onMouseDown={(e) => setPasswordVisible(true)}
                                onMouseUp={(e) => setPasswordVisible(false)}
                                onMouseLeave={(e) => setPasswordVisible(false)}
                                onClick={(e) => e.preventDefault()}
                            >
                                <img alt="view password" src="assets/images/group1.svg" />
                            </button>
                        </div>
                        <button
                            className="cursor-pointer [border:none] bg-royalblue-100 rounded-lg w-[624px] flex flex-row box-border items-center justify-center md:w-[300px] py-[10px] md:box-border"
                            type="submit"
                            name="submit"
                        >
                            <div className="flex text-white px-4 rounded-md hidden" id="loadingIndicator">
                                <svg className="h-5 w-5 mr-3 animate-spin" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.735a8 8 0 008-8h4a12 12 0 01-12 12v-4.265zM20 12a8 8 0 01-8 8v4.265a12 12 0 0012-12h-4zm-8-6.735a8 8 0 018-8v-4.265a12 12 0 00-12 12h4z"
                                    />
                                </svg>
                            </div>
                            <div className="text-base font-medium font-overlock text-white text-center flex items-center justify-center md:w-[200px]">
                                Register
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
