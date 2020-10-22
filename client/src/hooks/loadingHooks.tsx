import { useState } from "react";

const useLoadingStatus = () => {
  const [isLoading, updateIsLoading] = useState(false as boolean);

  const setIsLoading = (boolean) => {
    updateIsLoading(boolean);
  };

  return { isLoading, setIsLoading };
};

export { useLoadingStatus };
