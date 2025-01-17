import { toast } from 'react-toastify';

export const showToast = (type, message) => {
  const options = {
    // position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, // Auto close after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  if (type === 'success') {
    toast.success(message, options);
  } else if (type === 'error') {
    toast.error(message, options);
  }
};
