import { toast } from 'react-toastify';

const notificationSucess = (message) => {

    toast.success(message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });

}

export default notificationSucess;