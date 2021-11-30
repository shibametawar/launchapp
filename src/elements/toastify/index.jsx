import { toast as RToast, Slide } from 'react-toastify';

const optionsDefault = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    transition: Slide,
}

const toast = (message, type = undefined, options = {}) => {
    const opts = { ...optionsDefault, ...options };
    if (type === undefined) {
        return RToast(message, opts);
    }

    return RToast[type](message, opts);
};

export { toast };
