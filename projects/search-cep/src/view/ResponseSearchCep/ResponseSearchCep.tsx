import ICepData from "@/model/CepModel";
import styles from "./ResponseSearchCep.module.css";

interface ResponseSearchCepProps {
  responseCepData: ICepData | undefined;
}

export function ResponseSearchCep({ responseCepData }: ResponseSearchCepProps) {
  return (
    <div className={styles.table}>
      <div className={styles.intro}>
        Os itens da sua pesquisa serão exibidos aqui
      </div>
      <div className={styles.columns}>
        CEP: <div className={styles.data}>{responseCepData?.cep}</div>
      </div>
      <div className={styles.columnsDark}>
        Logradouro:
        <div className={styles.data}>{responseCepData?.logradouro}</div>
      </div>

      <div className={styles.columns}>
        Complemento:{" "}
        <div className={styles.data}>{responseCepData?.complemento}</div>
      </div>
      <div className={styles.columnsDark}>
        Bairro: {responseCepData?.bairro}
      </div>
      <div className={styles.columns}>
        Localidade:{" "}
        <div className={styles.data}>{responseCepData?.localidade}</div>
      </div>
      <div className={styles.columnsDark}>
        UF: <div className={styles.data}>{responseCepData?.uf}</div>
      </div>
      <div className={styles.columns}>
        IBGE: <div className={styles.data}>{responseCepData?.ibge}</div>
      </div>
      <div className={styles.columnsDark}>
        GIA: <div className={styles.data}>{responseCepData?.gia}</div>
      </div>
      <div className={styles.columns}>
        DDD: <div className={styles.data}>{responseCepData?.ddd}</div>
      </div>
      <div className={styles.columnsDark}>
        SIAFI: <div className={styles.data}>{responseCepData?.siafi}</div>
      </div>
    </div>
  );
}
