import axios from "axios";

export interface IClientHttp {
  get(url: string): Promise<any>;
}

export class ClientHttpAxios implements IClientHttp {
  async get(url: string) {
    return await axios.get(url);
  }
}
