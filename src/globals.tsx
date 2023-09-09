import { toast } from 'react-toastify';
import { CustomObject } from './types/GenericTypes';

export const Dfn = {
    BASE_URL: 'https://church-nhej.onrender.com/',
    DEFAULT_PAGE: 'masscontact',
};

export const validateMail = (mail: string) => {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        mail
    );
};

export const validatePhone = (number: string) => {
    return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(number);
};

//https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid#answer-2117523
export function generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
}

export const updateAvatar = (avatar: string, surface: string) => {
    const container: HTMLElement = document.getElementById(surface)!;
    const previousImg = container.classList[container.classList.length - 1];
    if (previousImg.startsWith('bg-[url')) container.classList.remove(previousImg);
    container.setAttribute('style', `background-image: url(${avatar}); border: 1px solid #d7d7d7`);
};

export function extrapolate(initial?: CustomObject, final?: CustomObject) {
    if (Object.keys(final ?? {}).length === 0) return initial;

    const combo = { ...initial, ...final };
    return combo!.id ? combo : { ...combo, id: generateUUID() };
}

const toastProps: CustomObject = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    // closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
};

export const ToastSuccess = (
    message: string,
    { onClose, extras }: { onClose?: () => void; extras?: CustomObject } = {}
) => {
    toast.success(message, {
        ...toastProps,
        ...extras,
        onClose,
    });
};

export const ToastFail = (
    message: string,
    { onClose, extras }: { onClose?: () => void; extras?: CustomObject } = {}
) => {
    toast.error(message, {
        ...toastProps,
        ...extras,
        onClose,
    });
};

export const useScript = (scripts: Array<string> | string) => {
    const allScripts = Array.isArray(scripts) ? scripts : [scripts];
    allScripts.forEach((script) => {
        const scriptTag = document.createElement('script');
        scriptTag.src = script;
        scriptTag.async = true;
        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    });
};
