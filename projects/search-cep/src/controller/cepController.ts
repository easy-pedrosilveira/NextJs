import ICepData from "@/model/CepModel";
import Localization from "@/services/IClientHttp";

export default class LocalizationController {
  async searchCep(cep: string): Promise<ICepData | null> {
    try {
      // Fazer a requisição à API para obter os dados do CEP
      const responseData = await Localization.fetchCepData(cep);
      return responseData;
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      return null;
    }
  }
}
