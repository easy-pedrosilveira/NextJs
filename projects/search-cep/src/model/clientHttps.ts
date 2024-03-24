import axios from "axios";

export abstract class IClientHttp {
  get(url: string) {}
}

export class ClientHttpAxios implements IClientHttp {
  async get(url: string) {
    return await axios.get(url);
  }
}
