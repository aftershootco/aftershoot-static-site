import { Toaster, toast } from "sonner";

export const AppToast = () => (
  <Toaster
    // position="top-center"
    duration={2500}
    toastOptions={{
      style: {
        right: "10px",
        // transform: "translateX(-50%)",
        width: "max-content",
        fontSize: "14px",
      },
    }}
  />
);

const useAppTaost = () => {
  const triggerToast = (message: string, type: "success" | "failure") => {
    if (type === "success") toast(message);
    if (type === "failure")
      toast(message, {
        style: {
          color: "#D83D3D",
        },
      });
  };

  return triggerToast;
};

export default useAppTaost;
