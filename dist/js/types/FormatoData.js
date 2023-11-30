var FormatoData;
(function (FormatoData) {
    FormatoData["PADRAO"] = "DD/MM/AAAA";
    FormatoData["DIA_SEMANA_DIA_MES_ANO"] = "DIA_SEMANA, DD/MM/AAAA";
    FormatoData["DIA_MES"] = "DD/MM";
})(FormatoData || (FormatoData = {}));
function formatarInformacoes(valor, data, formatoData) {
    const dataFormatada = formatarData(data, formatoData);
    const valorFormatado = formatarMoeda(valor);
    return `${dataFormatada} - ${valorFormatado}`;
}
