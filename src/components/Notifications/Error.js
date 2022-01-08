import { toast } from 'react-toastify';

const notificationError = (message) => {

    toast.error(message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });

}

export default notificationError;