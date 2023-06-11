/**
 * Relatórios das métricas de desempenho do web-vitals.
 * @param {Function} onPerfEntry - Função chamada para cada métrica de desempenho coletada.
 * @returns {void}
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Coleta das métricas de desempenho usando as funções fornecidas pelo pacote web-vitals
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
