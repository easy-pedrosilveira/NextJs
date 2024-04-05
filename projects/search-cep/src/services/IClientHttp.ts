import axios from "axios";

export default class Localization {
  static async fetchCepData(cep: string) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  }
}
