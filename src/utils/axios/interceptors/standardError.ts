import { CustomAxiosError } from "@utils/axios/interceptors/customAxiosError";
import { AxiosResponse } from "axios";

export const standardErrorResponse = (response: AxiosResponse) => {
  if (response.data && ("errors" in response.data)) {
    const error = new CustomAxiosError("Standard Error(s)", response.config, response);
    return Promise.reject(error);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((response as any).name.includes("Error")) {
    const error = new CustomAxiosError("Standard Error(s)", response.config, response);
    return Promise.reject(error);
  }

  return response;
};
