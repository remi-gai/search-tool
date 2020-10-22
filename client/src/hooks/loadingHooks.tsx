import { useState } from "react";

import { LoadingHooks } from "../interfaces/interfaces";

const useLoadingStatus = (): LoadingHooks => {
  const [isLoading, updateIsLoading] = useState(false as boolean);

  const setIsLoading = (boolean) => {
    updateIsLoading(boolean);
  };

  return { isLoading, setIsLoading };
};

export { useLoadingStatus };
