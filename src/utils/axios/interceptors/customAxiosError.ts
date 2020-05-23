import { AxiosRequestConfig, AxiosResponse } from "axios";

export class CustomAxiosError extends Error {
  public readonly isAxiosError = true;

  constructor(
    public readonly message: string,
    public readonly config: AxiosRequestConfig,
    public readonly response: AxiosResponse,
  ) {
    super(message);
  }
}
