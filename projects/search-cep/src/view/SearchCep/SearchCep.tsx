import styles from "./SearchCep.module.css";
import { GetCep } from "@/controller";
import ICepData from "@/model/CepModel";
import { ClientHttpAxios } from "@/services";
import { useState } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

interface SearchCepProps {
  getCep: (value: ICepData | any) => void; 
}

export function SearchCep({ getCep }: SearchCepProps) {
  const [cep, setCep] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
    setError(null);
  };

  async function handleCep() {
    try {
      const client = new ClientHttpAxios();
      const controller = new GetCep(client);
      const data = await controller.getLocalization(cep);
      getCep(data);
    } catch (error) {
      setError(
        "Erro ao buscar o CEP. Por favor, verifique se digitou corretamente e tente novamente."
      );
      getCep(null);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <label htmlFor="email" className={styles.titleInput}>
          Insira um CEP
        </label>
        <input
          onChange={handleCepChange}
          value={cep}
          className={styles.input}
          placeholder="99999-999"
        />
      </div>
      <button type="button" onClick={handleCep} className={styles.btn}>
        Buscar
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
