import SnackBarProps from "@/interfaces/SnackBarProps";
import { Toast } from "flowbite-react";

const SnackbarExample: React.FC<SnackBarProps> = ({
  handleClose,
  snackbarMessage,
  snackbarSuccess,
}) => {
  return (
    <div className="fixed bottom-5 right-5">
      <Toast onClick={handleClose}>
        <div
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-${
            snackbarSuccess ? "green" : "red"
          }-100 text-${snackbarSuccess ? "green" : "red"}-500`}
        >
          {snackbarSuccess ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="ml-3 text-sm font-normal">{snackbarMessage}</div>
        <Toast.Toggle onClick={handleClose} />
      </Toast>
    </div>
  );
};
export default SnackbarExample;
