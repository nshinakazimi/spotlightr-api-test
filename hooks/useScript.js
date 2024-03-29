import { useEffect } from "react";

export const useScript = (url, ref) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    if (ref.current) {
      ref.current.appendChild(script);
    }

    return () => {
      ref.current.removeChild(script);
    };
  }, [url, ref]);
};
