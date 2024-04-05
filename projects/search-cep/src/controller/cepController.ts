// controller.ts
import { IClientHttp } from "@/services";
import { BASE_URL } from "@/api";
import ICepData from "@/model/CepModel";

export interface IGetLocalization {
  getLocalization(cep: string): Promise<ICepData>;
}

export class GetCep implements IGetLocalization {
  client: IClientHttp;
  constructor(client: IClientHttp) {
    this.client = client;
  }

  async getLocalization(cep: string) {
    try {
      const response = await this.client.get(`${BASE_URL}${cep}/json`);
      return response.data as ICepData; 
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
