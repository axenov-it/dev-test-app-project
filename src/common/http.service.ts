import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export class HttpService {
  async get(url: string, options: AxiosRequestConfig): Promise<AxiosResponse> {
    const response = await axios.get(url, options);

    return response;
  }
}
